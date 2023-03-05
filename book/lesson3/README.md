# 绘制一个点

使用 WebGL 绘制一个位于原点 (0.0, 0.0, 0.0) 处 20px 大小红色的点。

之前在 2D canvas 中绘制一个矩形采用的方式是，[第一个示例](../lesson1/canvas.html)：

```javascript
context.fillStyle = 'rgba(255, 0, 0, 1)';
context.fillRect(100, 10, 150, 150);
```

可能你会认为 `WebGL` 也差不多，例如:

```javascript
gl.drawColor(1.0, 0.0, 0.0, 1.0);
gl.drawPoint(0.0, 0.0, 0.0, 10);
```

然而事情并没有这么简单，WebGL 依赖一种新的方法称为 `着色器（Shader）` 的绘制机制。

## 着色器

WebGL 需要两种着色器: `顶点着色器` 和 `片元着色器`。

## 顶点着色器
**顶点着色器(Vertex shader)**：用来描述顶点特性（如位置、颜色等）的程序。顶点（vertex）是指二维或三维空间中的一个点，比如二维或三维图形的端点或交点。


## 片元着色器
**片元着色器(Fragment shader)**：进行逐片元处理过程如光照的程序。片元（fragment）是一个WebGL术语，你可以将其理解为像素（图像的单元）。

简化的流程如下：

调用 WebGL 相关的方法，顶点着色器 和 片元着色器 就会执行，在颜色缓冲区中进行绘制，此时就清空了绘图区，最后，颜色缓冲区的内容会自动在浏览器中的 canvas 中进行展示。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson3/process.png?raw=true" width="800px"/>