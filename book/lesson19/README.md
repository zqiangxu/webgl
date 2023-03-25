# 彩色三角形

当我们把上一个例子中的 `gl.drawArrays(gl.POINTS, 0, 3);` 改成:

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

此时我们发现，渲染的结果从之前独立的三个点变成了一个颜色平滑过度的三角形，为什么呢？

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/triangles.png?raw=true" width="500px"/>

## 几何形状的装配和光栅化

在讲解主要渲染管线的流程前，我们需要考虑以下几个问题：

1、程序向 gl_Position 传递了三个顶点的坐标，谁来确定这三个点就是三角形的三个顶点？

2、为了填充三角形内部，谁来确定哪些像素需要被着色？

3、谁来负责调用片元着色器，片元着色器又是怎么样处理每个片元的？

实际上，在顶点着色器和片元着色器中间有两个步骤：**图形装配** 和 **光栅化**。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process.png?raw=true" width="1000px"/>

### 图形装配

图形装配的主要任务是将孤立的顶点坐标装配成几何图形，几何图形的类别由 `gl.drawArrays()` 函数的第一个参数决定。

### 光栅化

这一步的主要过程就是将装配好的图形转化为片元。

通过下面这张图，我们就会发现，gl_Position 实际上是 **几何图形装配 (geometric shape assembly)**。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process1.png?raw=true" width="1000px"/>

注意：几何图形装配过程又被称为 **图元装配过程（primitive assembly process）**，因为被装配出的基本图形（点、线、面）又被称为 `图元 (primitives)`。

### 图形装配和光栅化的过程

因为我们设置的 `gl.drawArrays()` 执行的顶点数为 3 个，所以顶点着色器会被执行三次。

1、执行顶点着色器，缓冲区对象中的第一个坐标 （0.0, 0.5）会被传递给 a_Position，**一旦顶点坐标被赋值给 gl_Position，它就进入了图形装配区域，并暂时存在那里**。

需要注意的是：虽然只传入了 x 分量 和 y 分量，而 z 分量 和 w 分量赋值的是默认值，所以进入图形装配区域的坐标实际是 (0.0, 0.5, 0.0, 1.0)。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process2.png?raw=true" width="1000px"/>

2、再次执行，将第二个坐标 (-0.5, -0.5, 0.0, 1.0) 传入图形装配区域并存储。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process3.png?raw=true" width="1000px"/>

3、同样的步骤，将第三个坐标 (0.5, -0.5, 0.0, 1.0) 传入图形装配区域并存储。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process4.png?raw=true" width="1000px"/>

4、开始装配图形，通过传入的顶点坐标，然后根据 `gl.drawArrays()` 传入的图形信息来决定如何装配。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process5.png?raw=true" width="1000px"/>

5、显示在屏幕上的三角形是由片元（像素）组成，所以还得**将图形转化为片元，这个过程就被称为光栅化**。光栅化之后，我们就得到了组成这个三角形的所有片元。

需要注意的是，我这里只绘制了 10 个片元，但实际上应该是这个三角形最终在屏幕上所覆盖的像素数。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/process6.png?raw=true" width="1000px"/>