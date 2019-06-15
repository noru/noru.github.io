---
date: '2019-01-02'
title: 'iframe对history对象的影响'
category: 'Web开发'
tags: ['history api', 'web', 'iframe']
banner: '/assets/bg/1.jpg'
---

在实际问题中遇到在使用了iframe的情况下对前端路由的影响。应用的角度讲，这种方式不常用也不大会影响生活，不过浏览器如何处理这个情况确实是一个有意思的问题。遂做如下小实验：

```
┌─────────────────────────────────────────────────┐
│ Main window                                     │
╞═════════════════════════════════════════════════╡
│   Keep changing iframe.src and print history    │
│            +----------------------+             │
│            |                      |             │
│            |                      |             │
│            |    iFrame            |             │
│            |    (Print history)   |             │
│            |                      |             │
│            |                      |             │
│            +----------------------+             │
└─────────────────────────────────────────────────┘
```

由于安全策略的原因，`history`的内容并不能直接被访问，只有一个`length`属性可以看看stack的大小。所以这里所谓的`print`也只是打印下`length`和自己手动记录的`src`值而已，除了响应操作之外并没有太多意义。

### 问题
- history在host和iframe中是否互相独立？
- 如果不是，那是怎样的互相影响？

## 结论
- host和iframe中的`history`实例是不同的，__实例下对应的`model`是相同的__([joint session history](https://www.w3.org/TR/2011/WD-html5-20110113/history.html#joint-session-history))

划重点:

> `history`是所有[fully active](https://www.w3.org/TR/2011/WD-html5-20110113/browsers.html#fully-active)的`Document`对象的所有[browsing context](https://www.w3.org/TR/2011/WD-html5-20110113/history.html#session-history)的所有[session history](https://www.w3.org/TR/2011/WD-html5-20110113/browsers.html#browsing-context)的合集。

简单说就是同一个session, 同一个history，甚至不同域也逃不掉(虽然依然收同源策略制约)。

### 其他takeaway:
- `history.length`看看就好没啥意义，不同浏览器初始值都不同，变化也各种没谱，还有个最大值50
- `iframe.src`的变化会反映到`history`中，同浏览器地址栏
- 跨`document`的路由基本不用考虑了，事件侦听和同步的成本比较大。
