# 绘制多个点

**构成三维模型的基本单位是三角形**。不管它的模型多么复杂，其基本组成部分都是三角形，只不过复杂的模型由更多的三角形组成而已。

比如: [Babylon Demos 里面的透明酒瓶](https://playground.babylonjs.com/#P1RZV0)。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/sodaBottle.png?raw=true" width="200px"/>

## 前言

在 [attribute变量实战: 鼠标点击绘制点](../lesson6/) 中，我们通过 for 循环调用 `gl.vertexAttrib3f` 向着色器传入一个点，然后再调用 `gl.drawArrays` 的方式将这个点绘制出来。

```javascript
points.forEach((point) => {
    // 将顶点位置传递给 attribute 变量
    gl.vertexAttrib3f(a_Position, point.x, point.y, 0.0);

    // 绘制一个顶点
    gl.drawArrays(gl.POINTS, 0, 1);
});
```

**它每次只能绘制一个点**，而对于一些复杂的由多个顶点组成的图形，如三角形、立方体等等，则需要一次性将图形的顶点全部传入顶点着色器，然后才能绘制出来。

WebGL 提供了一种很方便的机制，即 `缓冲区对象 (Buffer Object)`。

## 缓冲区对象 (BO -> Buffer Object) 

它可以一次性地向着色器传入多个顶点的数据。它是 WebGL 系统中的一块内存区域。

## 使用缓冲区对象

缓冲区对象是 WebGL 系统中一块存储区，我们可以在缓冲区对象中保存想要绘制的所有顶点数据，如图所示，我们需要先创建一个缓冲区，然后向其中写入顶点数据，最后就可以一次性的向顶点着色器中传入多个顶点的 attribute 变量数据。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/use-buffer.png?raw=true" width="800px"/>
