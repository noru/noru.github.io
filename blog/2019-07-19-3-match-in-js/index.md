---
date: '2019-07-19'
title: '3消游戏简易web实现'
category: 'Code'
tags: ['game', 'animation', 'web', 'js']
banner: '/assets/image/infinity-gauntlet-effect/banner.jpg'
---

**Talk is cheap, show me the** [![GitHub](https://img.shields.io/github/forks/noru/3-match.svg?label=Souce%20Code&style=social#nopreview)](https://github.com/noru/3-match)

<iframe src="https://blog.xiuz.hu/3-match/dist/index.html" frameBorder="0" width="100%" height="500" style="max-width:600px;margin-left:50%;transform:translateX(-50%);overflow:hidden;"></iframe>

想尝试这个玩意很久了. 早先听一个[独立游戏开发者讲自己心路历程](https://www.youtube.com/watch?v=JmwbYl6f11c), 提到了自己一直维护的消除类游戏并赚点小钱的故事. 就像一道上好的面试题一样, 切入起来很简单, `follow up`要多少有多少要多深有多深.

整个实现过程也没什么好说的, 都是可以预见情况. 设计和实现并无什么优劣之分, 毕竟只是最小实现, 500 行左右的代码. 倒是锻炼了在没有蓝图没有依赖库的情况下, 从头到尾自己`follow through`的意志力, 无他了.

几个早就知道的...

### Take away

- **Unit test 的重要性.** 三消是一个典型的业务逻辑简单的项目, 但内在实现如何兼顾健壮和效率并不简单. 保证核心功能的稳健前进, UT 是不可替代的. 回头看, 因为写了 UT, 后续功能可以放心推进; 因为 UT 测试用例不全, 犯了非对称棋盘时消除判定的低级错误, 直到最后才发现.
- **Typing 的重要性.** 同上. 没有类型 == 浪费生命.
- **FP 也不是都比 OO 强.** riot 的面试官问过这个两者比较的问题. 由于英语上表达的问题, 感觉当时我的答案就是 FP > OO. 其实, 即使有这方面倾向但我也知道对于游戏这类强交互重性能场景下, OO 还是无法替代的, 只是没有表达出来. 特定场景下的设计模式还是需要学习和积累经验, 比如游戏上的`Loop`和`Event Driven`框架.
