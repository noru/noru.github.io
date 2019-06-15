# 10 Code Smells

- [Side effects](#side-effects)
- [Readability](#readability)
- [Nested `if`s](#nested-ifs)
- [Duplicated Code](#duplicated-code)
- [Long class/method/function/whatever](#long-classmethodfunctionwhatever)
- [Stale comments](#stale-comments)
- [Circular Dependencies](#circular-dependencies)
- [Too many parameters](#too-many-parameters)
- [Hiding Sequential Coupling](#hiding-sequential-coupling)
- [Unencapsulate Conditions](#unencapsulate-conditions)

# Side effects

```javascript
function BodyTransform(response) {
  if (response && response.data && response.data.data) {
    return response.data.data
  } else {
    return response
  }
}
```

The code above servers a purpose of reducing boilerplate code: backend data are often nested in response body like this:

```json
{
  data: {
    data: {
      ...
    }
  }
}
```
that entails a lot of pointless code in business components `var data = resp.data.data`.

This function is plugged in AJAX lib as an interceptor. Everytime an http call was returned, it was called and all you have to deal with is pure data you needed.

It seems ok, doesn't it? However like every anti-pattern, it works until it fails. The problem here is: this function carris __side effect__. Things will go awry when this function is called unexpectedly. And it did, the AJAX lib never guareente call times of interceptors, and clearly when it was called more than once it will fail on `resp.data.data.data.data`

## Fix
There are mutilple ways of fixing it in real life, but all can be concluded to:

1. reduce the side effects

instead of lifting target data, using a prefixed property like '$$result' and attach it to the response, a less harmful side effect(although a bit arbitrary)

2. limited the scope of side effects (move this function from 'interceptor' section to 'transform' where side effects are aware of and more carefully be dealt with)


# Readability

```javascript
const AssetIndice = AssetIndice$
  .switchMap(conf => Observable.timer(0, conf.interval).map(() => conf))
  .flatMap(conf => Observable.fromPromise(AssetAPI.assetIndex(0, 200, conf.month))
                             .map(resp => ({ resp, conf }))
                             .retryWhen(errors => _retry(errors, conf.interval)))
  .switchMap(({ resp, conf }) => _slice(resp, conf.interval, conf.bufferCount!, conf.durationPerPage!))
  .share()
```

The code readability is a big topic and this case covers only one bit: FP(-ish) readability. The readability of functional programming is oftenly blast and I'm not going to start a holy war of it. FP __DOES__ have readability issue, for the one that doesn't understand the paradigm behind the scene. I'm not targeting this either, means whoever reading this code piece should be comfortable with `switchMap` or `flatMap` stuff.

Aside from all that, this code is hard to fathom indeed, with arrow functions and indents. Can it be more human readable in a traditional way? Let's have a try:

```javascript
// AssetIndice$ is a stream source that emmit a `conf`, the suffix `$` is part of the convention, just let it be.
const AssetIndice = AssetIndice$
  // when a `conf` data is emmitting, I want a new stream emmitting the save `conf` periodically, by Observable.timer
  .switchMap(conf => Observable.timer(0, conf.interval).map(() => conf))
  // when receive, make the ajax call and get the data, also take care the error handling
  .flatMap(conf => Observable.fromPromise(AssetAPI.assetIndex(0, 200, conf.month))
                             .map(resp => ({ resp, conf }))
                             .retryWhen(errors => _retry(errors, conf.interval)))
  // post process the response data
  .switchMap(({ resp, conf }) => _slice(resp, conf.interval, conf.bufferCount!, conf.durationPerPage!))
  .share()
```

So, with proper naming and extraction, here goes the ...

## Fix
```javascript
const GenerateInterval = (interval, input) => Observable.timer(0, interval).map(() => input))

const CallAPI = (promiseFactory, config) => Observable
    .fromPromise(promiseFactory)
    .map(resp => ({ resp, config }))
    .retryWhen(errors => _retry(errors, config.interval))

const PostProcess = (resp, conf, processor) => processor(resp, conf)

const AssetIndice = AssetIndice$
  .switchMap(conf => GenerateInterval(conf.interval, conf))
  .flatMap(config => CallAPI(() => AssetAPI.assetIndex(0, 200, conf.month), config))
  .switchMap(({ resp, conf }) => PostProcess(resp, conf, _slice))
  .share()
```

While still having space to improve, it is better looking now and extracted functions are reusable.


# Nested `if`s

This is a common abuse.

```javascript
if (serverTime <= endTime) {
  if (users.length == 5) {
    groupState = 1;
  }
  if (users.length < 5) {
    if (joinedGroup == '0') {
      this.groupState = 2;
    } else {
      this.groupState = 3;
    }
  }
} else {
  if (users.length == 5) {
    groupState = 1;
  } else {
    groupState = 0;
  }
}
```

Code like this are error-prone and hard to maintain. Usually it can be fixed with a few simple technics:
- Return fast
- Single Response Priciple (extraction)
- (Most importantly) Get the logic straight

## Fix

```javascript

function getState(users, serverTime, endTime, joinedGroup) {
  if (serverTime > endTime) return 0
  if (users.length === 5)   return 1
  if (joinedGroup === '0')  return 2
  return 3
}

this.groupState = getState(users, serverTime, endTime, joinedGroup)

```

# Duplicated Code

A direct violation of DRY principle. Most of the time, it can be fixed by extraction of common part. But there are more sophisticated situation where it is not easy too identify and extract. Advance paradigm like AOP(aspect oriented programming) may needed.

Considering there is a React component which internally uses 3rd lib that may interupt react lifecycle (e.g, legacy or graphic lib). Normally we would fit them in the lifecycle hooks in react. Here we goes:

```javascript
class ChartComp extends React.Component {

  componentDidMount() {
    this.chart = someFunctionThatInitTheChartInstance()
    // do other things...
  }

  componentWillUnmount() {
    this.chart.someFunctionThatDistroyAndRecycleInstance()
    // do other things...
  }

}
```

It looks perfectly ok, unless there are many similar components perform the same actions. To avoid tedious effort, we could separate the cross-cutting concerns and increase modularity. One possible soluction would be:

## Fix

```javascript

@AutoInitAndDiscard
class ChartComp extends React.Component {
  // focus on its own business
}

function AutoInitAndDiscard {
  return Target => class Decorated extends Target {
    componentDidMount() {
      // do the initialization
    }
    componentWillUnmount() {
      // do the discard
    }
  }
}
```

# Long class/method/function/whatever
Long code is a sure sign of bad structure and hotbed for other anti-patterns. The most obvious would be readability issue: nobody can keep a clear mind track while reading code over 2 screens. The worst part is long code encourage people create bigger scope with more mutable states and more logical branches.

Considering this:

```javascript

function ABadFunction(option) {
  let state = option || {}

  if (CONDITION_A) {
    state = getSomeOption(state)
  }

  if (CONDITION_B && CONDITION_C) {
    mutate(state)

    if (ANOTHER_CONDITION) {
      mutate(state)
    }
  }

  // what's the state here?
  // is the option still the orignal one?
}
```

The answer to the questions that raised at the end is like __schrodinger's cat__: you can't possiblily know that until you run the code, even mutilple times.

You may argue that that's not long at all and it is bad because of some other problems. That's another reason of not writing long code: when its short, it is easy to expose the problems. Most of the time, when it's not short, you'll be stuck in trying to understand it. And when you finally have done it and sorted out all loose ends, it is easier to refactory the code (if you're still not beaten by it) when all the variables are within your sight.

## Fix
There is not silver bullet except simply __Avoid Writing It__ in the first place. But `long` is a objective word, and it's hard to bring everyone on the same page. I would like to quote a few tips from the book \<Clean Code>:
- Do (only) one thing
- Keep your Methods/Functions as short as possible, and within one screen.
- 200 lines top per file/class

# Stale comments
Comments are of great help when one's trying to understand the code... or is it? Personal experiences told me, maybe 10% of comments are actually helpful while the others are either explaining the code repeatly or lie about it. Yes, lie, and they did much much more damage than no comments at all.

Code are checked, either by the compiler or Jenny from QA team. Comments are not. To bet on the accuracy of a comment is a pure probability issue. To know the probability is simple, just ask yourself when is the last time you maintain your comments? What is the chance you forget doing it while making the code change?

No matter the chances, I wouldn't risk my time in either producing more mistakes by trusting a false comment or wondering if the comments are still viable. Code, on the other hands, are always trustworthy - they do not lie even they have bugs.

Some bad comments example:
```javascript
if (org[key] == value) {
    // 如果查询科室, 但orgType不是4(科室), 则orgName显示空
    // (when trying to find by department and department is not 4, orgName is therefore empty.)
    if (key == 'id') {
      if (org.orgType == 4)
        orgName = org.name
      else
        orgName = ''
    } else {
      orgName = org.name
    }
  }
```
The comment did nothing wrong, except wasting my time reading it. It takes the same amount of time to get the same information by reading the code next to it. And it misses the most important part: why. What's special about number 4? How would this comment help me when I'm encounter a problem regards to it?

```javascript
// 02012312320202^231123/1231/231/23^123123123
  const arrowIndex = str.indexOf('^')
  if (arrowIndex > 0) {
    return str.substring(0, arrowIndex)
  }
```
Is there anything confidential behind the line? How do I decrypt the message? Why can't it be "process string that contains '^'"?

```javascript
  // if
  if (bv === ov) {
    // Pick A as B has not changed from O
    r[k] = v
  } else if (v !== ov) {
    // A, O and B are different
    if (k in o)
      conflicts[k] = {a:v, o:ov, b:bv}
    else
      conflicts[k] = {a:v, b:bv}
    hasConflicts = true
  } // else Pick B (already done) as A has not changed from O
```
A perfect example of "Comments can not save the bad code". The code needs proper naming, not bad translation.

```javascript
const pageY = e.targetTouches[0].pageY
let diffY = pageY - this.state.ogY
//if it's scroll
if (diffY < 0) return

//if it's not at top
let $content = ReactDOM.findDOMNode(this.refs.content).offsetParent
if ($content.scrollTop > 0) return
```

Can't it just be:
```javascript
let isScrolled = (e.targetTouches[0].pageY - this.state.ogY) > 0
let notAtTheTop = ReactDOM.findDOMNode(this.refs.content).offsetParent > 0
if (isScrolled || notAtTheTop) return
```

Previous cases are enough to prove 'comments are not always helping' even when it doesn't provide anything not true, and it's easy to imagine the consequences when it does.

## Fix
We're living in a world where the rule of thumb of comments is "the more the better". Actually every comment is merely a __amendment__ for the mistakes you made in the code. The only responsibility for a comment is to convey the message that your code failed to do. It should be taken as a warning instead of a praise. So the new rule of thumb should be:
- Always try to rewrite the code before put down any comments
- Don't create more mistakes: don't comment if you can't find a proper way
- Remove it when possible

Other tips for commenting:
- KISS (keep it simple, stupid). Use less amount/more accurate words.
- Explain things that are outside the context, not in it.
- Don't use comments as documentation

# Circular Dependencies
Dependency management is a huge topic through out the software industry. Dependency management tools are trying very hard to resolve this issue, but still tons of problems are regarding to it. Almost all the projects that I've been working on got the problem, and usually it hides deep.

## Fix
I wouldn't call it a fix, just some measurement to prevent it from too late:
- Be aware of the issue. It is __inevitable__.
- Flattern your dependencies as much as possible.
- Trust the tools instead yourself.
- Be careful with dynamic imports.


# Too many parameters
Once upon a time, I have this:
```javascript
function AwesomeFunction(a, b) {
  // do awesome stuff
}
```
One day I decide to do even more awesome stuff, and I need another argument. To avoid breaking the current code, I added ad as optional(at the end)
```javascript
function AwesomeFunction(a, b, c) {
  // do awesome stuff
  // do more awesome stuff with c
}
```
Everything is awesome ever since, this function is popular and used 1000 times. Now I have to do the most awesome stuff in the world which require a 4th argument. And I have a problem: where to put it? No matter where I put it, I have to make sure it doesn't break anything in 1000 other places.

You may say: I'm using Java(or any other static typed language), refactory is not an issue. What if the 100 developers that doesn't aware of this change? Will your compiler told the differences of those arguments other than their types?

Things are easily loose control, even with only a few arguments. And the problem magnified exponentially with the growth of argument list.

Even nothing is going to change ever, the order of the arguments are hard for people to remember which makes people painful to use your method/function and error-prone.

## Fix
Simple
- Don't create methods over 3 arguments
The methods violate that are either doing to many things(against the Single Responsibility Principle) or did not squash its arguments properly. It can be fixed by decomposing or combine arguments into a single one.

# Hiding Sequential Coupling
Couplings are 'necessary evil', it is unrealistic to eliminate them all. Sequential coupling is one of this kind, it is critical to keep sequential order in almost every cases. So we may have code like this:

```javascript
componentDidMount() {
  this.prepareData()
  this.processContent()
  this.processEventHandler()
  this.processMain()
}
```

This piece of code is not bad at all: naming and structure are all good. But it got potential issue if these steps got sequential dependencies. What if they got accidentally switch places? How does each of these steps handle exceptions? These are all big `if`s and may casue serious maintenance trouble.

Things go wrong much more easily in real life:

```javascript
onDrillDown(index: number) {
  let { items, showRoot } = this.state
  let { drillDownId } = Filter$.getValue()
  if (showRoot && index === 0) {
    if (drillDownId) {
      this.onBackToRoot()
    }
    return
  }
  if (drillDownId) {
    return
  }
  let item = items[showRoot ? index + 1 : index]
  FilterUpdater(state => {
    state.drillDownId = item.id
    return state
  })
}
```
It is very attempting to life the second return up front. But if you look closely enough, it won't work.

To avoid that, simply expose the sequential order more clearly. One may say this complicates the matter, it doesn't. It only exposes the complicity which is already there in the first place.

## Fix
```javascript
componentDidMount() {
  let data = this.prepareData()
  if (data) {
    let content = this.processContent()
    let handler = this.processEventHandler()
    this.processMain(content, handler)
  }
}
```

# Unencapsulate Conditions

```javascript
// in a method
if(input.user === undefined || input.user.age <= 18 || input.parentControl === false) {
  // do one thing
} else if (input.listItem === undefined || input.listItem.length === 0) {
  // do another thing
} else if (input.listItem !== undefined || (input.listItem.length < 10 && input.listItem.length > 5)) {
  // do something else
}
```

If I have to choose one to be the worst code smell, I'd choose this. Not because it is seriousness, but for it, among other couple of things, makes me want to smash my screen. It contains almost all ugliness out there: long lines, unclear logical operations, nested logical condition, magical numbers, ill naming, potential NPEs, etc, which may cause serious trouble maintaining it. And __it is so EASY to avoid__.

Just, encapsulate the conditions

## Fix
```javascript

function isUserAllegable() { /* do the check */ }
function userGotEmptyList() { /* do the check */ }
function userGotListInRange() { /* do the check */ }

if(isUserAllegable(input)) {
  // do one thing
} else if (userGotEmptyList(input)) {
  // do another thing
} else if (userGotListInRange(input)) {
  // do something else
}
```

