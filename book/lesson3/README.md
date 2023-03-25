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

### 顶点着色器
**顶点着色器(Vertex shader)**：用来描述顶点特性（如位置、颜色等）的程序。顶点（vertex）是指二维或三维空间中的一个点，比如二维或三维图形的端点或交点。


### 片元着色器
**片元着色器(Fragment shader)**：进行逐片元处理过程如光照的程序。片元（fragment）是一个WebGL术语，你可以将其理解为像素（图像的单元）。

## 简化的流程

调用 WebGL 相关的方法，顶点着色器 和 片元着色器 就会执行，在颜色缓冲区中进行绘制，此时就清空了绘图区，最后，颜色缓冲区的内容会自动在浏览器中的 canvas 中进行展示。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson3/process.png?raw=true" width="900px"/>

可以看到如果需要在屏幕上绘制一个 10px 红色的点，它需要用到两种着色器：

1、顶点着色器指定了点的位置和大小。

```c
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 20.0;
}
```

2、片元着色器指定了点的颜色。
```c
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```

着色器使用类似 C 的 `OpenGL ES 着色器语言 (GLSL ES)` 来编写。

## 初始化着色器

在初始化着色器前，顶点着色器 和 片元着色器 都是空白的，我们需要将以字符串形式的着色器代码从 JavaScript 传给 WebGL，并建立着色器。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson3/init.png?raw=true" width="900px"/>

着色器建立好后，顶点着色器先执行，它先对 `gl_Position` 和 `gl_PointSize` 进行赋值，并将他们传给 片元着色器，然后片元着色器再执行。

需要注意的是：**片元着色器接收到的是经过光栅化处理后的片元值。**

## 顶点着色器的简单介绍

`gl_Position` 和 `gl_PointSize` 是 顶点着色器 的两个内置变量。

```C
vec4 gl_Position // 表示顶点的坐标，必须赋值
float gl_PointSize // 表示点的尺寸 (像素)，默认为 1.0
```

其中 `vec4(float x, float y, float z, float w)` 是由四个浮点数组成的矢量。

由四个分量组成的矢量被称为 `齐次坐标`，它能提高处理三维数据的效率。它等价于三维坐标 (x/w, y/w, z/w)。

### 片元着色器的简单介绍

顶点着色器控制点的位置和大小，片元着色器控制点的颜色，**片元就是显示在屏幕上的一个像素（严格来说，片元包括这个像素的位置、颜色和其他信息）。**

片元着色器的作用是处理片元，使其显示在屏幕上。

`gl_FragColor` 是片元着色器的内置变量，指的是片元的颜色 (RGBA 格式)。

## 绘制

建立着色器之后，我们首先需要清空绘制区域，然后使用 `gl.drawArray` 进行绘制，它可以用来绘制各种图形。

```C
gl.drawArray(mode, first, count) // 执行顶点着色器，按照 mode 参数指定的方式绘制图形
```

其中：`count` 表示需要绘制的顶点个数，WebGL 并不知道缓冲区有多少个顶点的数据（就算它知道也不知道是否需要全部绘制），所以这里需要显示的告诉它需要绘制多个少顶点。