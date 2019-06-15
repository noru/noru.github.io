---
date: '2019-03-06'
title: '小事儿: 线程阻塞对css animation和svg animation的影响'
category: 'Code'
tags: ['css', 'svg', 'animation', '小事儿']
banner: '/assets/image/css-svg-anim/spinner-blocked.png'
---

在测试前端解析一个比较大的 Excel 文件时候, 发现我们的 button 的 spinner 卡住了. 印象中即使线程阻塞了, 有些 GPU 加速的东西依然应该有效. 怀疑又是某种 css in js 的弱智用法(没错, 我就是讨厌 css in js). 查看了一下元素发现是用了 svg 的[animateTransform](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform). 写法上面感觉跟 css 差不多都是一堆`transform` + `rotate`. 难道这样也会阻塞吗?

[所以做了个测试](https://jsbin.com/wodenoxaku/1/edit?html,css,output)

![demo](/assets/image/css-svg-anim/demo.gif)

结果是, 虽然长得像, 但 css animation 还是一等公民, 并不像[Stack Overflow 某问题](https://stackoverflow.com/questions/25233248/gpu-accelerated-css-animation-vs-svg-native-animations)的评论所说`They are the same. UAs generally have one animation engine which does both kinds of animation`. css 得到了 GPU 加速但 svg 会被线程阻塞影响.

由于动画, GPU 加速等等属于浏览器的自主裁量行为了, 所以测试结果并不代表什么确切的东西. 有可能未来某时刻打开测试连接结果就不一样了呢. 只能说写下本文时, 浏览器对 css 的优化优先级更高, 实践中应优先使用吧.

---

如果链接挂了的话, 这是代码:

### html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

  <h1>CSS spinner</h1>
  <div class="css-spinner"></div>
  <h1>Svg spinner</h1>
  <div>
    <svg width="50" height="50" viewBox="0 0 44 44">
      <defs>Ç
        <linearGradient id="a">
          <stop stop-color="#FF4F42" offset="0%"></stop>
          <stop stop-color="#FF8E3C" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(3 3)" fill="none" fill-rule="evenodd">
        <path d="M36 18c0-9.94-8.06-18-18-18" stroke="#000" stroke-width="5" stroke-linecap="round" transform="rotate(217.117 18 18)">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="2s" repeatCount="indefinite"></animateTransform>
        </path>
      </g>
    </svg>
  </div>

  <button onclick="for (var i = 0; i < 100000; i++) console.log(i)">Blocking action</button>
</body>
</html>
```

### css

```css
@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

.css-spinner {
  animation: spin 2s infinite linear;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid black;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-top-color: transparent;
  margin-left: 30px;
}

button {
  margin-top: 30px;
  height: 30px;
}
```
