---
date: '2019-08-29'
title: 'Canvas拖尾效果(Trails Effect)'
category: 'Code'
tags: ['canvas', 'animation', 'web', 'js']
banner: '/assets/image/canvas-trails.png'
---

最近在把前面做的几个视(wan)觉(piao)向的代码迁出到新的[repo](https://github.com/noru/visual-effects), 并添加了一些新的效果. 除了巩固了一下 Canvas API 和高中三角函数知识外, 还是学到了若干 Tricks. 其中一个是 Canvas 的尾迹效果, 或者说淡出(fade out)效果.

![example](/assets/image/canvas-trails.png)

如果独立思考的话, 首先想到的方法大概是:

- 缓存上一帧 Canvas
- 在渲染当前帧之前, 先把缓存加一个 alpha 值并绘制在 Canvas 上
- 继续当前帧所有元素的绘制

但这个方法的问题是, Canvas 的`Context`并没有类似接口可以利用. 本以为`globalAlpha`可以做到类似效果, 但其实这并不能影响已绘像素. 所以不免要用到`getImageData`.

再继续深入下去之前, 发现前人解决方法竟是非常简单:

```javascript
function loop() {
  // Draw a "chiffon" over the whole canvas to create the trail effect
  context.fillStyle = 'rgba(255, 255, 255, .05)' // using background color with an alpha
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Draw things as usually...
}
```

翻译: 在绘制每一帧之前, 施加一层带透明度的背景色, 来模拟过去帧的淡出效果.

除了无法分区和需要事先知道背景色之外, 似乎这是个聪明无破绽的方法. 但实际上海有个很大问题: **轨迹会停留在一个接近背景色的颜色上, 永远不会变为背景色.**

经过一番调查, 这篇[Blog](http://rectangleworld.com/blog/archives/214)很好的解释了的可能的原因: alpha 值再由浮点数转为 0-255 的整数时, 由于采用了类似`Math.ceil`的向上取整, 会导致停留在一个整数上, 例如:

`5 * 0.9 -> 4.5(5) * 0.9 -> 4.5(5) * 0.9...`

另外一个证据就是, 使用开头提到的多层 Canvas + globalAlpha 的方法, 也会出现一样的效果. 并且指出 Chrome 的早期版本, 区别于 IE 和 Firefox, 是可以完全淡出的. 至于后面为什么又改回来了, 不排除是故意而为之.

### 那么有没有...

**有!**

单单要想解决这一个残影问题, 方法还是有的:

- 简单粗暴, 在不改变透明覆盖层颜色的情况下, 把背景色调整为与残影颜色一致即可.
- 使用真"轨迹", 记录元素的"过去"M 帧的状态, 当做正常帧来绘制. 好处是可以仅为需要施加效果的元素做处理. 坏处是时间复杂度 O(元素个数) -> O(元素个数\*淡出所需帧数). 并且复杂情况下缓存的数据可能不止位置信息, 空间复杂度上升同样需要注意.
- 使用`getImageData`, 用整形操作 alpha 值. 但如此即抛弃了 GPU 加速的可能, 立刻提升 CPU 负载.

```javascript
let lastImage = context.getImageData(0, 0, theCanvas.width, theCanvas.height)
let pixelData = lastImage.data
let i
let len = pixelData.length
for (i = 3; i < len; i += 4) {
  pixelData[i] -= 3
}
```

## 总结

以上各种方法, 还说得过去, 可以根据实际情况选择使用. 看上去完美的 Canvas 拖尾淡出效果还不存在. 也许这应该是 WebGL 的领域, Canvas 并不是非常关心类似的操作, 也不大可能期待未来有接口上的动作.
