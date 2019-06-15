---
date: '2019-01-05'
title: '自用剪贴板小工具(https://xiuz.hu/clipboard)'
category: 'Code'
tags: ['复制黏贴', ‘share’, 'web', 'docker']
banner: '/assets/image/drews_clipboard.jpg'
---

公司的iPhone交还了回去，换了安卓的新手机。安卓现在真的挺不错的，用了5年iOS换回来竟然没有任何不适，唯一的缺点是没有iOS的handover功能。即使是iOS也无法跟家里的台（you）式（xi）机做到共享一些东西。`对于极度讨厌在桌面上开微信的人来说，急切希望有个跨平台的剪切板。也找过一些软件，都挺麻烦的，本来挺简单一件事还要装这装那。所以呢，就自己做个基于web的剪贴板试试。

### 先放链接

https://xiuz.hu/clipboard

[Github](https://github.com/noru/home-server)

功能很简单，往里面填文字，各处打开的页面都能收到变化。

![demo](/assets/image/clipboard.gif)

### 怎么做的？

杂七杂八东西不少，每一块其实都挺简单，加起来差不多一天时间多点：

- 用koa搭个server, 创建clipboard 用的websocket接口。还有静态文件，主入口什么的。
- 裸写个前端页面, 直接丢在server中当静态文件提供
- 页面按PWA的要求配置
- 创建个人docker镜像，把server丢进去。这个跟工具没啥大关系，只是一个一直想做的事情，不想再ssh了，烦的一比。

### Takeaway

Koa令人惊奇的简单（至少对于我这个小功能），docker的配置也没花多大时间，页面更是随便写写。最麻烦的竟然在于实现PWA的要求（主要是创建手机上主屏幕入口）。Icon的规格必须要全, 192px和512px的都得有，service work也要正确配置才能够让浏览器跳出“添加到主屏幕”的提示。 还有其他要求，参照[Checklist](https://www.npmjs.com/package/lighthouse)或者使用[lighthouse](https://www.npmjs.com/package/lighthouse)工具做下检查 ，照着改就行了。

### TODO

- ~~websocket链接恢复，等鲁棒性改善~~ Done
- ~~支持文件~~ （https://xiuz.hu/clipboard）
- README
- server代码用travis构建，上传 github，容器直接拿包不拿源码(应该这样吗？)
