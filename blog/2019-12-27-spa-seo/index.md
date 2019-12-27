---
date: '2019-12-27'
title: '对单页应用(SPA)进行预渲染从而实现搜索引擎优化(SEO)'
category: 'Code'
tags: ['SPA', 'seo', 'web', 'js']
banner: '/assets/image/seo.jpg'
---

SEO 作为 Growth 团队的重要一环, 成了我现在对前端项目的主要优化方向. 除了一些常规内容(TDK, sitemap, robots.txt)的优化, 手头上的[一个 SPA 项目](https://www.airwallex.com.cn/guides/payout)也是工作重点: 这个项目信息多, 链接多, 是索引的重点.

那为什么不一开始就放弃 SPA 走 SSR? 原因是立项之初有此页面并不向公众开放, API 需要登录认证才可访问. 后续, API 随着策略调整放开了身份验证. 因此, SEO 的需求也就接踵而至.

对 SPA 的 SEO 优化的常规解决方案, 就是在构建过程中加入截取`snapshot`的任务. 无论是[react-snapshot](https://github.com/geelen/react-snapshot)还是[Webpeck 插件](https://github.com/markdalgleish/static-site-generator-webpack-plugin)还是[其他什么方案](https://github.com/stereobooster/react-snap/blob/master/doc/alternatives.md), 其原理都基本相同, 无非是采用无头浏览器渲染(prerendering)还是直接`renderToString()`(snapshoting)的区别. [两者优缺点](https://github.com/stereobooster/react-snap/blob/master/doc/alternatives.md#prerendering-snapshotting)也很明显. 共同的问题就是, 对现有项目都有着多多少少的侵入性. 在亲自上手体验各个方案的过程中发生了非常多的幺蛾子, 让人很不愉快.

所以打算自己动手实现一下这个项目的预渲染 + 后期优化. 当然还有一个策略是将整个项目迁移至 SSR 框架下, 虽然迁移本身并不一定是很大的工作了, 但考虑到随之而来的构建部署相关的影响...就不考虑了.

## First things first...

项目本身不是纯静态页面, 而是链接 CMS 系统, 根据 API 返回数据渲染页面. 同时另一主要目标是侵入性减到最小. 由此, 选用无头浏览器(puppeteer)对一个路径列表进行爬取是比较合适的方案.

这里直接用 node 写个简单的爬虫即可:

```js
;(async () => {
  const startDate = new Date().getTime()
  const total = PATHs.length
  const USER_AGENT = 'Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3239.108 Safari/537.36'
  const browser = await puppeteer.launch()
  const pages = await Promise.all(Array.from({ length: 10 }).map(() => browser.newPage()))
  let runner = async page => {
    while (PATHs.length > 0) {
      await RenderOnePage(PATHs.pop(), page)
    }
  }
  await Promise.all(pages.map(runner))
  await browser.close()
  console.log(`Total ${total} pages exported. Time elapsed ${Math.round((new Date().getTime() - startDate) / 1000)}s`)
})()
```

代码比较简单. `PATH`是项目中所有需要爬取的路径, 这里是 128 个国家\*三个页面 + 两个功能页; `RenderOnePage()`即为使用`puppeteer`模拟`打开页面`->`访问网址`->`等待页面加载完成`->`操作DOM`->`输出html文件`的流程.

`操作DOM`的过程中, 根据页面内容动态添加了 TDK(title, description, keywords)元信息. 也可以做一些其他奇奇怪怪的事情(如下面介绍 👇).

需要说明的是, 近 400 个网页每个 3 秒的时间爬取是个比较漫长的过程. 于是这里做了点优化: 模拟同时打开 10 个 tab 页进行抓取. 把整个抓取时间降到 120 秒左右.

整个过程波澜不惊, 文件输出顺利. 剩下的过程就是把这些 html 文件上传至阿里云的 OSS, 然后再服务器端做一个简单的请求转发即可(注意区分 html 和其他 assets 即可).

事情到这里其实已经完成了对 SPA 项目的基本 SEO 的需求.

## But...

事情当然不可能那么简单. 虽然页面显示结果已经与正常网页无异, 但会出现:

- 页面闪烁: 因为 react 会重新填充页面, 将已经预渲染的内容移除.
- 首次访问中获取数据的 API 依然会被触发: 无疑浪费了预渲染的工作.

第一个问题不容易察觉, 且容易解决. 因为`react-dom`为此专门提供[`hydrate`方法](https://reactjs.org/docs/react-dom.html#hydrate), 用之代替`render`即可. 简而言之, 此方法会尝试与 DOM 中已有的元素建立绑定关系(如, 事件), 而不是直接塞进新元素.

第二个问题则麻烦一点, 由于 API 触发所带来的`loading`等效果, 使预渲染带来的首屏展示速度大打折扣. 解决这个问题取决于项目本身, 如果所有 API 触发都放在了组件生命周期方法中, 那恐怕神仙也救不了了. 但如果用了全局状态管理, 那这个问题就退化成一个如何初始化全局状态的问题了.

在初始化全局状态问题之前, 如何获取预渲染中的数据是一个首先需要解决的问题. 这里我首先想到了`nextjs`的做法: 在 dom 中渲染一个不显示的节点存放序列化之后的数据. 不过即使没有用过 SSR 框架, 这也是一个自然而然的思路吧.

对于`redux`和`mobx`, 初始化过程显而易见不赘述. 不巧的是这个项目使用的是`graphql`, 再折腾了半天`apollo client`如何写进初始值之后(文档真是差, 下次决定用 relay), 发现`Apollo client`提供了[SSR 解决方案](https://www.apollographql.com/docs/react/performance/server-side-rendering/). 剩下的事情就简单了, 跟随文档, 用`client.extract()`输出序列化数据到 dom 上(注意要挂在 body 中可见元素后面), 并在创建 client 时利用`cache.restore`即可.

至此经过测试, 页面的渲染已经完全不会有闪烁. 只是不知道为什么, 页面在有数据的情况下, 依然触发了一次 query. 怀疑是 cache 并未命中, 于是加了`id`和`__typename`等值, 依然没有做到避免这次触发. 不过鉴于这个问题对原本的问题影响基本可以忽略不计, 就不纠结了.

## What else...

事情至此, 主要目标已经完成. 要完整实现工程化, 还需要将此过程集成到 CICD Pipeline 中. 构建过程仅仅依赖`puppeteer`和网络连接, 完全可以部署在函数计算服务中, 通过 CMS 系统的 Web hook 触发, 保证静态内容的更新. 整个过程做到全部自动化没有问题.

需要注意的是, 函数计算服务对任务时间有上限限制, 所以若页面数量很多, 还需要进一步拆分任务. 另外 Aliyun 的函数计算还有 50M 的包体积限制(puppeteer 100M+), 需要发工单才行. 找到了理由偷懒, 于是, 再贱!
