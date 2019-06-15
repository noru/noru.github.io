---
date: '2019-04-17'
title: '小事儿: Android风格Loading Indicator(Spinner)'
category: 'Code'
tags: ['css', 'animation', '小事儿']
banner: '/assets/image/spinner.png'
---

这是一道我经常在面试中会问的css题：如何实现Android平台上常见的，线条长度会变化的Loading组件：

<style>

@keyframes spin {
  to {transform:rotate(0deg);}
  from {transform:rotate(360deg);}
}

.spinner {
  animation: spin 5s linear infinite;
}

@keyframes dash {
  0% {stroke-dashoffset: 0;}
  100% {stroke-dashoffset: 860;}
}

.spinner circle {
  cx: 50%;
  cy: 50%;
  r: 67px;
  stroke-width: 5;
  stroke-dasharray: 430 430;
  fill: none;
  stroke: orange;
  animation: dash 3s linear infinite;
}

</style>
<svg class="spinner">
  <circle></circle>
</div>

这是一个我自己也答不出来的题, 问这个题的目的只是试探一下候选人是不是思维特别敏捷或者真的有深厚的css知识，而且也只当附加题助兴。如果真的思路正确甚至能完美答出，那真是遇见水平超出自己的人了。可惜并没有遇到，哪怕是思路靠边的也没有，看来此题并不是一个特别好的面试题。

第一次发现这个的纯css实现， 是在使用公司的`JFrog artifactory`。具体Inspect的细节已经不急不清楚了，只记得是根据边框dash line的线段长短和offset来实现。当时真是觉得惊为天人，是那自我感觉良好，但突然发现一个事实让你感觉自己还是一个菜B的经历。

过了这么久，问了这么多遍，竟然自己还没有实现过确实说不过去。既然上一篇blog解决了在markdown中写demo的问题，就趁热动动手。

### 思路

刚见到实现的时候，一个最大的收获就是一个看似复杂的动作，其实只是两个简单的子动作的组合而已。再次提醒，拆分解决问题的重要性。如上，这个动画效果是两个子动画的叠加：

- 整个圆形的旋转，匀速，反复。
- 把圆的周长拉直，想象成一条轨道，一条实线在轨道上划过，反复。

这样分解之后，问题就简单了很多。

匀速旋转的css实现很简单：

```css
@keyframes spin {
  to {
    transform:rotate(0deg);
  }
  from {
    transform:rotate(360deg);
  }
}
.spinner {
  animation: spin 5s linear infinite;
}
```

第二个看起来也不难，但涉及到具体实现方式就有问题了。本以为`border`的`dashed`会有类似的属性来控制offset，结果并没有，需要借助`svg`的`stroke-dashoffset`才可以：

```css
@keyframes dash {
  0% {stroke-dashoffset: 0;}
  100% {stroke-dashoffset: 860;}
}

.spinner circle {
  cx: 50%;
  cy: 50%;
  r: 67px;
  stroke-width: 5;
  stroke-dasharray: 430 430;
  fill: none;
  stroke: orange;
  animation: dash 3s linear infinite;
}
```

```html
<svg class="spinner">
  <circle cx="50%" cy="50%" r="67px"></circle>
</div>
```

这里注意offset和dasharray的数值，都跟spinner的半径有关: `dasharray`的实线和空白长度为周长， `dashoffset`的变化是两倍的周长。 于是就有了开头的效果。

最初在尝试写这个效果的时候，我在`keyframe`中使用的是`stroke-dasharray`而非`stroke-dashoffset`。结果得到了如下的结果：

<style>

@keyframes dash2 {
  0% {stroke-dasharray: 430, 0;}
  50% {stroke-dasharray: 0, 430;}
  100% {stroke-dasharray: 430, 0;}
}

.spinner circle.demo2 {
  cx: 50%;
  cy: 50%;
  r: 67px;
  stroke-width: 5;
  stroke-dasharray: 430, 430;
  fill: none;
  stroke: orange;
  animation: dash2 3s linear infinite;
}

</style>
<svg class="spinner">
  <circle class="demo2"></circle>
</div>

很明显线段在伸长时的方向不对。但如果调整一下旋转方向，或加快速度，又是另一番风味：

<style>
.spinner-1,.spinner-2 {
  animation: spin 1s linear infinite;
}

@keyframes dash3 {
  0% {stroke-dasharray: 430, 0;}
  66% {stroke-dasharray: 0, 430;}
  100% {stroke-dasharray: 430, 0;}
}

@keyframes dash4 {
  0% {stroke-dasharray: 0, 430;}
  33% {stroke-dasharray: 430, 0;}
  100% {stroke-dasharray: 0, 430;}
}


.spinner-1 circle {
  cx: 50%;
  cy: 50%;
  r: 67px;
  stroke-width: 5;
  stroke-dasharray: 430 430;
  fill: none;
  stroke: orange;
  animation: dash3 1s linear infinite;
}
.spinner-2 circle {
  cx: 50%;
  cy: 50%;
  r: 67px;
  stroke-width: 5;
  stroke-dasharray: 430 430;
  fill: none;
  stroke: pink;
  animation: dash4 1s linear infinite;
}

</style>
<svg class="spinner-1">
  <circle></circle>
</svg>
<svg class="spinner-2">
  <circle></circle>
</svg>

在这个框架下面，通过调整各种参数还是能得到很多意想不到的效果。网上还搜到[一个spinner的css实现合集](https://codepen.io/ingomc/pen/ONrMqe)，其中还包括不用svg实现的相同效果和利用`box-shadow`实现圆点组成的spinner，也很是更新认知。

