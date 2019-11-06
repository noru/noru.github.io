---
date: '2019-11-06'
title: 'CSS省略号样式Loading'
category: 'Code'
tags: ['css', 'animation', '小事儿']
banner: '/assets/image/css-svg-anim/spinner-blocked.png'
---

> 水一篇代码相关的 blog.

最近在做微信小程序, 设计稿上有一个省略号依次颜色变化组成的 loading 组件. 据说来自微信 UI 设计标准, 可是哪里都找不到, 只能自制了. 顺便吐槽一下小程序的设计和文档, 真是 tmd...

### 思路

效果主要就是省略号中各个点周期性交替闪烁. 闪烁可以有多种表现形式, 如颜色或者透明度变化, 这方面倒不是什么大问题. 如何支持任意个数的"点"是需要思考的地方. 经过一些实验, 打算采取通过子元素作为 stub 控制个数, `:nth-child()`伪元素和`animation-delay`来控制交替. `animation-delay`可以设为负值来避免初始状态的问题, 也算是覆盖到了知识盲点.

### 代码

#### CSS

```css
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
.ellipsis-loading i {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: gray;
  border-radius: 861112px;
  animation: blink 1s ease-in-out -1s infinite alternate;
}
.ellipsis-loading i:nth-child(3n + 1) {
  animation-delay: -0.5s;
}
.ellipsis-loading i:nth-child(3n + 2) {
  animation-delay: -0.1s;
}
.ellipsis-loading i:nth-child(3n + 3) {
  animation-delay: -1.5s;
}
```

#### DOM

```html
<div class="ellipsis-loading">
  <i />
  <i />
  <i />
</div>
```

### Demo

<style>
  @keyframes blink {
    from { opacity: 1; }
    to   { opacity: 0.2; }
  }
  #playground {
    width: 500px;
    height: 300px;
    background: white;
    font-size: 30px;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 80px;
  }
  .ellipsis-loading i {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: gray;
    border-radius: 861112px;
    animation: blink 1s ease-in-out -1s infinite alternate;
  }
  .ellipsis-loading i:nth-child(3n + 1) {
    animation-delay: -.5s;
  }
  .ellipsis-loading i:nth-child(3n + 2) {
    animation-delay: -.1s;
  }
  .ellipsis-loading i:nth-child(3n + 3) {
    animation-delay: -1.5s;
  }
</style>

<div id="playground">
  <span>文字</span>
  <span class="ellipsis-loading">
    <i></i>
    <i></i>
    <i></i>
  </span>
  <br>
  <span class="ellipsis-loading">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </span>

  <br>
  <span style="font-size:.5em">0.5倍字体</span>
  <span class="ellipsis-loading" style="font-size:.5em">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </span>

  <br>
  <span style="font-size:.5em">4个点</span>
  <span class="ellipsis-loading" style="font-size:.5em">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </span>
</div>
