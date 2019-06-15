---
date: '2019-04-03'
title: '小事儿: stackoverflow愚人节特效'
category: 'Code'
tags: ['css', 'stackoverflow', 'animation', '小事儿']
banner: '/assets/image/stackoverflow-aprilfools-theme.png'
---

4 月 1 号打开了 StackOverflow, 看见满屏幕中二元素还以为自己走错了板块. 后来才想到愚人节的事情. 除了独角兽和超 gay 配色, 还有个鼠标下雪的效果还行, 就想着做做看.

### 思路

- 目标区域监听`mousemove`事件, 获取鼠标位置.
- 图形: canvas 还是 DOM? 仔细看原实现, 雪花其实就是\*号. 这样 DOM 会方便一些, 但 canvas 也不是不行.
- 动画: 动画部分由`fade out`, 和 x, y 轴两个方向的移动组成, 原实现并没有太复杂的诸如抖动, 动画曲线之类效果, 也没太大必要. 这一部分 css 可以实现, 问题是要不要利用`transition`, 用的话代码上简单一点, 不用的话可以精细控制做点其他效果.

### 搞

---

#### DOM

找一个区域, 盛放雪花元素. 再放一个雪花的模板, 克隆用.

```html
<div id="playground" style="width: 500px; height: 500px; background: lightgrey;"></div>
<span id="snowflake-template" class="snowflake">*</span>
```

一些默认的 css 属性, 主要是控制雪花 sprite.

```html
<style>
  .snowflake {
    display: none;
    position: fixed;
    z-index: 861112;
    transition: all 2s;
    opacity: 1;
    pointer-events: none;
  }
  #playground .snowflake {
    display: block;
  }
</style>
```

---

#### JS

准备工作

```javascript
let COLORS = [...]
let playground = document.getElementById('playground')
let template = document.getElementById('snowflake-template')

function onMouseMove() {
  // todo
}

playground.addEventListener('mousemove', onMouseMove)
```

然后实现`onMouseMove`, 要做的事情就是, 1, 从模板复制一个雪花出来, 塞到容器里 2, 添加相关 css 属性. 3, 一定时间后摘除雪花元素. 考虑性能这个方法可做`throttle`, 这里略过.

```javascript
function onMouseMove(evt) {
  let color = COLORS[(Math.random() * 3) | 0];
  let snowflake = template.cloneNode(true);
  snowflake.removeAttribute('id');
  playground.appendChild(snowflake);
  snowflake.style.cssText = `
    top: ${evt.clientY}px;
    left:${evt.clientX}px;
    color: ${color};
  `;
  setTimeout(() => {
    snowflake.style.opacity = 0;
    snowflake.style.transform = `scale(.4) translate3d(${(0.5 - Math.random()) * 200}px, ${Math.random() * 280}px, 0)`;
  });
  setTimeout(() => {
    snowflake.remove();
  }, 2000);
}
```

值得注意的是, `opacity`和`transform`是通过`setTimeout`另外加到元素上, 这样可以使`transition`生效. 这里也可以用`setInterval`或`requestAnimationFrame`来控制, 各个数值亦可以根据效果调整.

### Demo

<div id="playground">
  hover me!
</div>

<style>

  #playground {
    width: 500px;
    height: 500px;
    background: lightgrey;
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 200px;
  }
  .snowflake {
    display: none;
    position: fixed;
    z-index: 861112;
    transition: all 2s;
    opacity: 1;
    pointer-events: none;
  }
  #playground .snowflake {
    display: block;
  }
</style>

<span id="snowflake-template" class="snowflake">\*</span>

<script data-inline-script="data-inline-script">

  let COLORS = ["#D61C59", "#E7D84B", "#1B8798"]
  let playground = document.getElementById('playground')
  let template = document.getElementById('snowflake-template')

  function onMouseMove(evt) {
    let color = COLORS[(Math.random() * 3) | 0]
    let snowflake = template.cloneNode(true)
    snowflake.removeAttribute('id')
    playground.appendChild(snowflake)
    snowflake.style.cssText = `
      top: ${evt.clientY}px;
      left:${evt.clientX}px;
      color: ${color};
    `
    setTimeout(() => {
      snowflake.style.opacity = 0
      snowflake.style.transform = `scale(.4) translate3d(${(.5 - Math.random()) * 200}px, ${Math.random() * 280}px, 0)`
    })
    setTimeout(() => {
      snowflake.remove()
    }, 2000)
  }

  playground.addEventListener('mousemove', onMouseMove)

</script>

### 跟原实现的对比

上面的 demo, 颜色是借用的, 其他都是按照效果实现. 原实现其实已经[公布在了 StackOverflow 上](https://stackapps.com/questions/8287/2019-april-fools-day-retro-theme). 对比下来主要区别是, 原实现没用`transition`而是上面提到的`requestAnimationFrame`方案, 效果上确实没有 demo 中的卡顿(原因应该是是 demo 中的第一个`setTimeout`的频繁 DOM 操作).
