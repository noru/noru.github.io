---
date: '2019-12-08'
title: '简单贪吃蛇游戏试水scala.js'
category: 'Code'
tags: ['game', 'web', 'js', 'scala']
banner: '/assets/image/snake.png'
---

**Talk is cheap, show me the** [![GitHub](https://img.shields.io/github/forks/noru/snake.svg?label=Souce%20Code&style=social#nopreview)](https://github.com/noru/snake)

<iframe src="https://blog.xiuz.hu/snake" frameBorder="0" width="100%" height="500" style="max-width:600px;margin-left:50%;transform:translateX(-50%);overflow:hidden;"></iframe>

## 前言

听说到[scala.js](https://www.scala-js.org/)已经有一两年了吧。印象已经不深，只记得还在知乎上面劝别人不要用这个。当然，不是因为对scala本身有什么意见，而是这个东西剑走偏锋又脱离社区太远，必定不会是一个愉快的开发体验。

虽然这个偏负面的判断不是实践得来，却是合理甚至是必然的。`语言特性` x `社区资源` = `成功程度`。这个套在`ts`/`js`这一对好基友上面就是相互放大。反看`scala.js`, 两个因数都是小于1的，只能越乘越小。

之所以现在又想做一些相关的摸索，是因为最近主要在使用`ts`做小程序的开发。小程序的社区资源相比web圈还是要缩水很多的，很多已经习惯的工具链在这里只能兜着用，手脚放不开。缺失了工具的情况下，很多代码中烦扰的问题就自然而然的寻求来自语言本身的解决方案。事实上在这种情况下，`ts`确实是且只是`js`的超集，并不能让人满意。举个例子，例如最能解决当前痛点的两个语言层面的功能当属`pattern matching`和`pipe operator`, 这两个`proposal`还都处于`stage1`状态，远水解不了近渴。更不要提诸如`immutable`之类。

总结下来，有很多痛点都是主流的函数式编程语言已经解决了的。所以开始思考`FP compile to js`的方案。最先想到的当然是facebook的`ReasonML`，但是强制写分号让我迅速转到了下一个目标`fable`，希望能得到近似typescript的体验，结果并不能。`fable`一副老派`.Net`的作风，又是`.proj`又是安装dotnet又是visual studio又是NuGet的，虽然语言层面上很满意，但还是不太想下手。最后决定重拾scala，于是就有了现在这个项目。

## 搭建

脱离了`npm init`一把梭，真的是很不习惯。scala.js使用`sbt`作为构建工具，倒不是很陌生。JDK配置安装一条龙逃不掉的，紧接着maven下载包也要花上不少时间。总体来说还算可以接受。

然而紧接着，就是扑面而来的来自JVM的问候：各种说着奇怪语言的报错和没有IDE就寸步难行的调试步骤。

勉强熬过了所有错误，然后开始配置IDE。JVM上就认准Intellij错不了，但是那个速度在习惯了VS Code之后真的接受不了。还是配一下Scala的Language Server吧，官方推荐的[Metals](https://scalameta.org/metals/)在vscode中竟然出人意料的简单，确实差不多`One Click Installation`，这个倒是我没有想到的。这个过程还吃到一个瓜：原本的主流Scala Lang Server [ensime](https://ensime.github.io/)和Metals之间的恩怨。

Metals在补全和检查方面已经做到可以正常使用了，只是类型跳转，重命名等操作还是不灵。看来大场合还是要Intellij才行。

## 代码

贪吃蛇从功能上讲，要比三消和（计划要写一个玩的）Pacman简单多了。DOM的渲染选择了`Scala.Binding`，一个敢叫板React的框架。由于只是简单做一下绑定和渲染，具体不评价。文档上面差强人意（易用性），但要解决的问题都找到了。个人觉得这个框架最多只做到了底层原理上的对标react，生产环境下的所必备的大部分功能肯定是缺失的，例如：路由，分包加载，状态管理。或者退一步讲，缺少成熟解决方案。

最后大约[100行多点](https://github.com/noru/snake/blob/master/src/main/scala/snake/App.scala)即完成了的游戏的功能，这里并没有追求行数，语法熟练或者刻意精简的话，我觉得50行甚至20行都不是问题。总结一下使用Scala写前端的体验。

### 优点

- Scala支持Native XML，体验接近jsx
- Pattern Matching
- Case Class 简化声明，简化判等操作
- Scala强大的Collections
- Scala的各种语法糖

### 缺点

- 无法debug。这个可能是最严重的Show Stopper。前端很多debug方法诸如`console.log`和`debugger`之类全部无效。Source Map没看见过。这里不排除我已经生疏了的因素，但这方面肯定有问题。
- 第三方库。尚未尝试其他js库交互，想必免不了一番折腾。猜测Scala的Dynamics功能会出场这一块。
- 打包体积。100行的代码打包出来180kb。这之中自然包含了Scala语言包相关依赖，但是还是很可观。优化方案未知。
- 依赖IDE。这其实不一定是缺点，强类型语言自然需要IDE配合才能体现优势。
- 与其他资源的结合成疑。例如：inline css, 图片，字体等。这些资源现在scala中没有位置，需要直接对接html文件，跟webpack中的体验无法相比。

## 总结

从各方面来讲，scala.js都达不到我认为生产可用的标准。融入js环境的程度需要跟ts一样才有可能进一步作为，因为在语言的接受程度上就已经是劣势。ts现如今拥有最多的社区资源，最顺滑的开发体验，这已是scalajs不可能完成的任务了。

返回来看初衷，也许ReasonML才是正确的选择，毕竟有react血统一致的优势，分号不分号的问题真是不值一提。后面会在摸索一下另外两种语言，说不定PacMan就用ReasonML来完成了。
