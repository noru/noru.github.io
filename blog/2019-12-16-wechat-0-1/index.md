---
date: '2019-12-16'
title: '小程序从0到1总结'
category: 'Code'
tags: ['小程序', 'web', 'js']
banner: '/assets/image/miniprogram.jpg'
---

公司第一个(也是我的第一个)小程序今天上线了!

<img src="/assets/image/miniprogram.jpg" width=150 height=150 />

总得来讲, 整个开发过程是一个吃 💩 吃到习惯, 到最后觉得再吃一点也还可以接受, 大概就是斯德哥尔摩综合症吧.

在正式开始原生小程序开发之前, 还使用了好评较多的[TaroJs](https://taro.jd.com/)来开发 KYC 的 H5(这 tm 的发明的这个词...)App. 尽管 Taro 的工具链很完整有很紧跟潮流的使用了大部分流行技术, 还是避免不了各种坑要自己填. 总的来说, 流行框架带来的开发效率, 被填各端特有的坑所花的精力基本抹平, 甚至入不敷出也是有可能, 毕竟我只是在专注 H5 端开发的情况下就发现了很多问题. 要怎样做到在这样的平台下体现出多端同构的优势, 这是一个我无法回答的问题.

鉴于需求上的变化(专注微信端), 小程序端正式启动时还是果断采用了原生的道路. 在上线后也顺便总结一下, 从零到一搭建一个能吃的下去的 💩 的过程.

## 用户是一等公民, 但开发者不是

这是现在我全部的小程序开发体会. 可以看出微信为了把握住触达用户的这一关口, 基本上什么事都做得出来. 当然这本身没有什么错, 只是由于本身能力和思维方式的问题, 让开发者吃了太多的 💩.

小程序原理上的设计, 借鉴了很多 web 标准,尤其是[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), 刚使用起来甚至有在使用 Vue/Polymer 的错觉. 并且抛开简单的配置及组件定义, 并没有特别的多的关于如果组织前端框架的意见, 这就给了开发者搭建脚手架的空间. 诸如 MobX 等流行的库在小程序中使用并无太大问题. 按理说, 整个小程序架构也算是出自见过世面的人之手.

但是...

- 是没用过`Promise`还是没见过`Node`的 callback? 整个`wxsdk`是基于自创的 callback 写法是什么意图?
- 包管理这么重要的功能不好好屡屡清楚, 跑去做个什么 Wechat Devtools. 是觉得小程序的开发者都不配用命令行和 VSCode? 好不容易支持个`npm`, 那引入方式还不如自己写个脚本来的方便.
- API 说改就改. 社区问题基本不理.
- CICD 基本没法做, 因为要求 Devtools 处于登陆状态. API Secret 不香吗?
- 调试工具难用到新层次. 控制台一堆莫名其妙的 warning.
- 官方 ts 类型不改没法用
- `Page`有存在的意义么
- 各种`json`, 各种`../../../../`

**总之, 小程序的架构上在一些奇奇怪怪的地方用力过猛, 应该顺应标准的地方强行独树一帜, 对社区的一般实践和习惯视而不见. 搞的整个框架就像一曲农业重金属, 又华丽又土.**

## 任何东西重油重辣都能吃, 即使是 💩

除了莫名其妙且完全没必要的各种`.json`, 小程序的`模板` + `样式` + `控制器`的组织形式是老套且有效的. 从构建的角度看, 每一块都可以独立出来, 并且有完善的工具链支持. 已是过去式的`gulp`以及其各种插件就能够胜任小程序的各种现代化改造了.

- `.wxml` + `posthtml`

  wxml 与 html 并无太大差异理论上无需改造直接导出即可使用. 但是由于小程序对体积的限制, 一些如图片之类的静态资源加载需要外链处理, 并且能够有类似`webpack`在`css`中 resolve 资源的能力. 因此引入了`posthtml`的`posthtml-urls`插件. 这一处理不要紧, 还引入了一些麻烦. 主要是`posthtml`会按照 html 规则解析`wxml`并重新输出, 导致一些`self-closing tag`和诸如`disabled`等特殊 attribute 无法正确输出. 好在通过插件配置都可以避免.

- `.wxss` + `postcss`

  wxss 在文档中被描述成`是css又不是css`的存在. 具体差别又语焉不详. 各种 css 特性处于薛定谔的猫状态, 到底能不能用谁也不知道. 好在`css variables`和`@import`是能够使用的, 再加上`sass`的`nested syntax`, 也可以说没有其他奢求了. 所以使用了`postcss-nested`, `postcss-assets`, `postcss-px2units`. `postcss-assets`与`posthtml-urls`作用相同, 用于处理 css 中的 assets 路径. `postcss-px2units`则用于把`px`转为`rpx`.

- `.ts` to `.js`

  这个便没什么好说了. `tsc`伺候即可, gulp 亦有相关插件. 值得注意点是由于小程序对`npm`的奇葩支持方式, 各`modules`在目标文件夹的`miniprogram_npm`中并且会更改文件夹结构. 这就为某些按路径引入模块埋下了一堆坑, 也就是说不能像平常一样愉快的使用`node_modules`. 这就注定了一切 npm 包的引入都得见招拆招的使用.

  `Wechat DevTools`的`npm构建`也是跳不过的一关, 好在提供命令行接口, 但是依赖 DevTools 的安装路径. 小程序开发的缩影: 就是不喂你吃屎也要给你塞个苍蝇.

- 其他: 复制 json, copy 或软链文件, ...

  常规操作, 不赘述. 状态管理方面, 由于 MobX 与小程序性格上匹配尚可, 配合官方插件使用起来也没什么好抱怨. 什么? 热更新? 想太多呵呵.

这样一系列`gulp task`下来, 配合开发工具的 watch 功能, 总体上能达到一个可接受的开发环境. `gulpfile.js`无需很繁琐, `package.json`也能保持清爽. 如果更进一步还可以封装成命令行工具. 不过, 何必呢...

PS: 望这是我的最后一个小程序.
