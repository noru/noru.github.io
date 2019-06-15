---
date: '2019-02-15'
title: '由一道ts的类型题想到的'
category: 'Code'
tags: ['typescript', 'advanced type']
banner: '/assets/image/tstypes/tse.png'
---

本来是在网上闲逛看看现在有什么适配React Hooks的库, 发现有一个[rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks)还行. 竟然是LeetCode开源的, 于是就点进去看看. 发现了一个[hire](https://github.com/LeetCode-OpenSource/hire)的repo.


> - [编写复杂的 TypeScript 类型](https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md)
> - [用 Webpack 实现 predictable long term cache](https://github.com/LeetCode-OpenSource/hire/blob/master/webpack_zh.md)
> - [编写工程化的组件](https://github.com/LeetCode-OpenSource/hire/blob/master/engineering_zh.md)
>- [用 RxJS 处理复杂的异步业务](https://github.com/LeetCode-OpenSource/hire/blob/master/rxjs_zh.md)

3, 4做得多了没什么新鲜感, 只能感叹下现在前端招聘确实越来越注重工程化和实用性了, 没想到一个OG网站的前端题竟然没有一个是算法的. 2确实很棒, 反手就把自己项目给改了, 虽然现有的部署方式并不需要这种优化.

题目1确实是挺头疼的一个实际问题. 本来以为在实际工作中用用扁平的基本类型就够用了, 但正如之前写Scala一样, 一入类型深似海啊, 各种头疼的`TS Error`. 工作中想写点骚类型看见什么`keyof`, `Exclude`, `Extract`之类就头大, 每次都疯狂搜半天. 做这个题时候正好顺便屡屡清楚.

这道题的描述挺多挺复杂的, 但其实要求精简一下就是:
写出一个`改变某个interface的某些属性的类型, 继承其他的属性`的类型.

改来改去后我的最终答案是:

```typescript
// keys of non-function props: count, message...
type NonFuncKeys = Exclude<keyof EffectModule, keyof Connected>

// extract non-function types from original interface
type NonFuncProps = {
  [key in NonFuncKeys]: EffectModule[key]
}

// combine
type Result = Partial<NonFuncProps> & Connected
```

类型这种东西在js世界里很难说是严谨的, 所以满足要求的答案应该是不止一个, 并且还跟编译器版本有关. 所以关于答案就不深究了. 倒是几种关键字有必要理清除一下.

---

## in

`in`关键字是用来生成[`Mapped types`](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)的. 作用类似js里的`for ... in`, 只不过针对的是属性`key`值的[`Index types`](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types), 实际上是所有公开属性名的[`Union type`](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types).

用`in`把一个类型的所有属性map成`any`的例子:

```typescript
interface Person {
  name: string
  age: number
}

type ToAny<T> = {
  [P in keyof T]: any
}
// or...
type ToAny2<T extends string | number | symbol> = {
  [P in T]: any
}

// map name/age to any
type Result = ToAny<Person>
// or
type Result = ToAny2<keyof Person>
```

---

## keyof

`keyof`就是👆提到的`index type`的`query operator`, 类型经过`keyof`操作后就得到所有公开属性名的Union type

```typescript
type PersonKeys = keyof Person // 'name' | 'age'
```

---

## T[K]
这个方括号叫`indexed access operator`. 这个很好理解了, 经这个操作可以获取类型`T`的属性key为`K`的类型

```typescript
type Age = Person['age'] // number
```

---

## Nullable, NonNullable, Partial, Readonly, Required

挺常用的工具类型, 字面意思, 没啥难度. 但是`Required`的定义就比较骚了:

```ts
type Required<T> = {
    [P in keyof T]-?: T[P]; // -? 😲
};
```

---

## Pick

这个就是看起来有点屌的类型的, 但其实定义并不复杂, 用法也很简单
```ts
type Droid = Pick<Person, 'name'>
type ClonePerson = Pick<Person, 'name' | 'age'>
```
还有一个`Record`, 刚好像`Pick`反过来, 生成一个所有属性都是目标类型的新类型. 不知道有啥用不写了.

---

## Exclude, Extract

```ts
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
```

这两个最让人头大了, 之前用的时候经常得到一个`never`. 不过在搞懂了`keyof`之后就没什么问题了. 看定义就知道这两个类型的参数必须`T extends U`, 否则就会直接丢给你个`never`. 这也就减弱了这两个方法的可用性, 在两个类型没有继承关系的时候必须要经过`keyof`转为`indexed type`和`Pick`操作才能达到字面上的效果. 这也是为啥很多库里面类型声明文件中起手就是一个`Omit`或者`Substract`.

---

## T extends U ? A: B
v2.8引入的语法. 感觉会挺实用. 但是条件语句表达方式有限, 期待扩展.

---

## BONUS💰 ThisType\<T>
这个是自己点进`lib.d.ts`里看到的, 文档里很难找到([但还是有](https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypet)). 刚看到觉得这个可以解决`Vue`中的很多问题, 因为`Vue`项目是`this`的重度用户. 一搜果然早在v2.5就已经用上了.

---

还有一些工具类型和关键字, 先不写了. 之前还有使用了[`@salesforce/ts-types`](https://forcedotcom.github.io/sfdx-dev-packages/ts-types/), 还没来得及仔细看. 就都留到下一篇blog吧.