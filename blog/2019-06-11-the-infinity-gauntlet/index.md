---
date: '2019-06-11'
title: 'Google的无限手套特效'
category: 'Code'
tags: ['canvas', 'animation', '小事儿']
banner: '/assets/image/infinity-gauntlet-effect/banner.jpg'
---

#### 注: 本页的 demo 需要较新的浏览器(推荐 Chrome70+)才能正常执行

大概<妇联 4>上映的时候, google 也上线了一个[无限手套的特效(点此链接再点屏幕右侧的手套)](https://www.google.com/search?q=infinity+gauntlet&oq=infinity+gauntlet). 搜索结果中的条目, 随机的一半机会随风消逝, 同时附加一些屏幕滚动以及搜索总数目的变化. 除了敬佩还是敬佩! 从那时就有了复刻一下这个效果的想法.

简单考察了一下, 控制台打出了`html2canvas`的 log, 也指明了主要技术方向. 其他方面, 由于有随机性加持, 也没看出什么端倪, 只好自己想办法.

### 已知

- 屏幕元素是通过`html2canvas`转为`canvas`或至少为图像数据
- 动画是通过`canvas`完成

于是主要问题出现...

### 如何在 canvas 上实现粒子的运动

`canvas`的 api 极其底层, 这里也不打算使用第三方库来省事. 于是最容易想到的方案就是: 暴力渲染. 经查, `getImageData`和`putImageData`两个 API 可以实现对图像的截取以及填充. 那么剩下的步骤就简单了

1. 把已经加载的 canvas 图像分割成粒子, 存储起来
2. 在动画阶段, 逐帧执行: 擦除整个 canvas -> 计算粒子位置 -> 回填粒子 -> 执行前两步直到遍历所有粒子
3. 适当时刻结束动画

这里有一个问题: 所有动画效果都无法超出 canvas 的范围. 不过, 先来实现它吧.

#### `particalize()` 切割图片为粒子的集合

```javascript
function particalize(ctx, width = 2, height = 2) {
  let canvas = ctx.canvas
  let particals = []
  let cols = (rows = 0)
  let wholeImage = ctx.getImageData(0, 0, canvas.width, canvas.height)
  for (let x = 0; x < canvas.width; x += width) {
    cols += 1
    for (let y = 0; y < canvas.height; y += height) {
      rows += 1
      // using getImageData() for every partical, slower
      // let imgData = ctx.getImageData(x, y, width, height)
      // if (imgData.data[3] === 0) {
      //   continue // ignore transparent particals
      // }
      let data = clapData(x, y, width, height, canvas.width, canvas.height, wholeImage.data)
      if (data[3] === 0) {
        continue // ignore transparent particals
      }
      let imgData = new ImageData(data, width, height)
      particals.push([x, y, imgData, rows, cols])
    }
  }
  return [particals, cols, rows]
}
```

---

#### `animate()` 计算位置并回填粒子实现动画

```javascript
let currentFrame = 0
let endFrame = 15
function animate(ctx, particals, rows) {
  clearRect(ctx)
  currentFrame += 1
  let stripHeight = rows / 8
  let alpha = (1 - currentFrame / endFrame) * 255
  particals.forEach(p => {
    let [x, y, imgData, row, col] = p
    for (var i = 3; i < imgData.data.length; i += 4) {
      imgData.data[i] = alpha
    }
    let dx = 0,
      dy = randomInt(-15, -5)
    switch (Math.floor(rows / stripHeight)) {
      case 0:
      case 2:
      case 4:
      case 6:
        dx = randomInt(-2, 15)
        break
      case 1:
      case 3:
      case 5:
      case 7:
        dx = randomInt(-15, 2)
        break
    }
    p[0] = x + dx
    p[1] = y + dy
    ctx.putImageData(imgData, p[0], p[1])
  })
  if (currentFrame > endFrame) {
    currentFrame = 0
    return
  }
  requestAnimationFrame(() => animate(ctx, particals, rows))
}
```

---

### Demo

就把我的 F22 变消失吧. 这是一张 500\*300 的扣掉背景的图, 点击蒸发!

<script data-inline-script="data-inline-script">
let currentFrame = 0
let endFrame = 30
let img = new Image()
img.src = '/assets/image/infinity-gauntlet-effect/target.png'
img.onload = function() {
  img.loaded = true
}
function randomInt(low, high) {
  let factor = Math.random()
  return (factor * low + factor * high) | 0
}
function clearCanvas(ctx) {
  let canvas = ctx.canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function clapData(x, y, w, h, ow, oh, data) {
  let result = new Uint8ClampedArray(w * h * 4)
  let leng = w * 4
  for (let i = 0; i < h; i++) {
    let j = ((y + i) * ow + x) * 4
    let subArr = data.subarray(j, j + leng)
    result.set(subArr, i * leng)
  }
  return result
}

window.$$$infinityGauntlet$$$ = {
  img: img,
  particalize: function(ctx, width = 2, height = 2) {
    let canvas = ctx.canvas
    let particals = []
    let cols = rows = 0
    let wholeImage = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for (let x = 0; x < canvas.width; x += width) {
      cols += 1
      for (let y = 0; y < canvas.height; y += height) {
        rows += 1
        // using getImageData() for every particals, slow
        //
        // let imgData = ctx.getImageData(x, y, width, height)
        let data = clapData(x, y, width, height, canvas.width, canvas.height, wholeImage.data)
        if (data[3] === 0) {
          continue // ignore transparent particals
        }
        let imgData = new ImageData(data, width, height)
        particals.push([x, y, imgData, rows, cols])
      }
    }
    return [particals, cols, rows]
  },
  animate: function animate(ctx, particals, rows, reset, useAlpha) {
    clearCanvas(ctx)
    currentFrame += 1
    let stripHeight = rows / 8
    let alpha = (1 - currentFrame / endFrame) * 255
    particals.forEach(p => {
      let [x, y, imgData, row, col] = p
      // no alpha altering would be much faster
      if (useAlpha) {
        for (var i = 3; i < imgData.data.length; i += 4) {
          imgData.data[i] = alpha
        }
      }
      let dx = 0, dy = randomInt(-15, -5)
      switch (Math.floor(row / stripHeight)) {
        case 0:
        case 2:
        case 4:
        case 6:
          dx = randomInt(-2, 8)
          break
        case 1:
        case 3:
        case 5:
        case 7:
          dx = randomInt(-8, 2)
          break
      }
      p[0] = x + dx
      p[1] = y + dy
      if (p[0] > 0 && p[1] > 0) {
        ctx.putImageData(imgData, p[0], p[1])
      }
    })
    if (currentFrame > endFrame) {
      currentFrame = 0
      reset && reset()
      return
    }
    requestAnimationFrame(() => animate(ctx, particals, rows, reset))
  },
  clearCanvas: function(ctx) {
    let canvas = ctx.canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  },
  draw: function draw(img, ctx) {
    if (img.loaded) {
      ctx.drawImage(img, 0, 0, 500, 300)
    } else {
      setTimeout(() => draw(img, ctx), 1000)
    }
  },
  partition: function(ctx, layer) {
    let canvas = ctx.canvas
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let result = new Array(layer)
    for (let i = 0; i < layer; i++) {
      result[i] = new ImageData(canvas.width, canvas.height)
    }
    let data = imgData.data
    for (let i = 0; i < data.length; i += 4) {
      let copy = result[randomInt(0, layer)]
      copy.data.set(data.subarray(i, i + 4), i)
    }
    return result
  }
}

</script>

<canvas id="canvas" width="500" height="300" style="cursor:pointer;"></canvas>

<script data-inline-script="data-inline-script">

(function() {
  let canvas = document.getElementById('canvas'), context = canvas.getContext('2d')
  let $ = $$$infinityGauntlet$$$
  canvas.onclick = function() {
    let [particals, cols, rows] = $.particalize(context, 4, 4)
    $.animate(context, particals, rows, () => $.draw($.img, context))
  }
  $.draw($.img, context)
})()

</script>

从代码不难看出, 复杂度为 O(粒子数量)的线性关系, 粒子数量又为粒子宽度的平方, 所以这个方法的效率有显而易见的问题. 这里已经经过了几方面的优化:

- 使用了很大的粒子(4 \* 4)
- 剔除掉透明的粒子 (无需特别精确)
- 只调用一次`getImageData`, 然后手动剪切`Uint8ClampedArray`生成粒子的`ImageData`
- 不再写回超出边缘的粒子
- 不去设置粒子的 Alpha 通道, 可显著提升效率

不怕死的点下面粒子为 1\*1, 开 alpha 渐变的效果, ☠️

<canvas id="canvas2" width="500" height="300" style="cursor:pointer;"></canvas>

<script data-inline-script="data-inline-script">

(function() {
  let canvas = document.getElementById('canvas2'), context = canvas.getContext('2d')
  let $ = $$$infinityGauntlet$$$
  canvas.onclick = function() {
    let [particals, cols, rows] = $.particalize(context, 1, 1)
    $.animate(context, particals, rows, () => $.draw($.img, context), true)
  }
  $.draw($.img, context)
})()
</script>

### So...now what?

很明显, 这样的方案虽然能达到基本效果, 但是效率没法让人满意, 后续优化的空间也基本没有, 基本是个死胡同. 于是又仔细观察了一下 Google 的效果, 发现:

- 动画开始前有一个短暂但可见的卡顿, 目标边缘微小变化, 应该是目标的副本被绘制在了目标上层
- 粒子确实是最小单位的
- 动画是依次进行的, 这说明同时执行所有消失动画也有潜在的性能问题
- 飘散的效果遵循一些特殊的 pattern, 并且不受边界限制

于是猜想另一种实现: **把目标按像素打印在多张层叠的 canvas 上, 然后 css 控制 canvas 的动画**

![img](/assets/image/infinity-gauntlet-effect/partition.png)

### Code

代码中略去了一些不重要的细节.

```javascript
// get layered canvases
function partition(ctx, layer) {
  let canvas = ctx.canvas
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  let layers = new Array(layer)
  for (let i = 0; i < layer; i++) {
    layers[i] = new ImageData(canvas.width, canvas.height)
  }
  let data = imgData.data
  for (let i = 0; i < data.length; i += 4) {
    let copy = layers[randomInt(0, layer)]
    copy.data.set(data.subarray(i, i + 4), i)
  }
  return layers
}

// animation: append layers to dom, set css target state
function animate() {
  let layers = 20
  let overlays = getCanvasNodes(layers)
  canvas.parentNode.style = 'position:relative;'
  overlays.forEach(n => {
    canvas.parentNode.insertBefore(n, canvas.nextSibling)
  })
  setTimeout(() => {
    canvas.style = 'visibility:hidden;'
    // shared css props, set elsewhere..
    // position: absolute;
    // left: 0;
    // transition: all 2s;
    let style = () =>
      `user-select: none; pointer-events: none;transition: transform 1.5s ease-out 0s, opacity 1.5s ease-out; transform: rotate(${random() *
        10}deg) translate(${random() * 100}px, ${random() * 50}px) rotate(${random() * 5}deg); opacity: 0;`
    overlays.forEach(l => (l.style = style()))
  }, 500)
}
```

---

### Demo

Snap...

<canvas id="canvas3" width="500" height="300" style="cursor:pointer;"></canvas>

<style>
  canvas.dust {
    position: absolute;
    left: 0;
    top: 0;
    transition: all 2s;
  }
</style>
<script data-inline-script="data-inline-script">
(function() {
  let canvas = document.getElementById('canvas3'), context = canvas.getContext('2d')
  let $ = $$$infinityGauntlet$$$
  function getCanvasNodes(layers) {
    let imgs = $.partition(context, layers)
    return imgs.map(img => {
      let can =  document.createElement('canvas')
      can.className = "dust"
      can.width = canvas.width
      can.height = canvas.height
      can.getContext('2d').putImageData(img, 0, 0)
      return can
    })
  }
  canvas.onclick = function() {
    let layers = 30
    let overlays = getCanvasNodes(layers)
    canvas.parentNode.style = 'position:relative;'
    overlays.forEach(n => {
      canvas.parentNode.insertBefore(n, canvas.nextSibling);
    })
    function random() {
      return (Math.random() - 0.5) * 2
    }
    function restore() {
      canvas.style = ''
      $.draw($.img, context)
      overlays.forEach(l => {
        l.style = ''
        l.remove()
      })
    }
    setTimeout(() => {
      canvas.style = "visibility:hidden;"
      let style = () => `user-select: none; pointer-events: none;transition: transform 1.5s ease-out 0s, opacity 1.5s ease-out; transform: rotate(${random()* 10}deg) translate(${random() * 100}px, ${random() * 50}px) rotate(${random()*5}deg); opacity: 0;`
      overlays.forEach(l => l.style = style())
      setTimeout(restore, 3000)
    }, 500)
  }
  $.draw($.img, context)
})()
</script>

#### CSS 赛高!

很顺滑有没有. 经测, 分个百十来层都不会有卡顿问题, 分到 300 层有明显卡顿但也可接受, 远超上一个做法. 实际效果并不是层数越多越好, 而是应该有层次的飘散. 由于我采用了随机数分层所以再层数少的时候可能会有些点聚集的状况, 可以用均匀分配的方式来进一步减少层数. 不过, 比这些细节更重要的是, 对技术运用的`想象力`. 感谢 Google 工程师带来的启发!
