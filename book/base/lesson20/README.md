# 彩色三角形2: 图形装配 与 光栅化

## 图形装配

图形装配的主要任务是将孤立的顶点坐标装配成几何图形，几何图形的类别由 `gl.drawArrays()` 函数的第一个参数决定。

## 光栅化

这一步的主要过程就是将装配好的图形转化为片元。

通过下面这张图，我们就会发现，gl_Position 实际上是 **几何图形装配 (geometric shape assembly)**。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson20/process1.png?raw=true" width="1000px"/>

注意：几何图形装配过程又被称为 **图元装配过程（primitive assembly process）**，因为被装配出的基本图形（点、线、面）又被称为 `图元 (primitives)`。

### 图形装配和光栅化的过程

因为我们设置的 `gl.drawArrays()` 执行的顶点数为 3 个，所以顶点着色器会被执行三次。

1、执行顶点着色器，缓冲区对象中的第一个坐标 （0.0, 0.5）会被传递给 a_Position，**一旦顶点坐标被赋值给 gl_Position，它就进入了图形装配区域，并暂时存在那里**。

需要注意的是：虽然只传入了 x 分量 和 y 分量，而 z 分量 和 w 分量赋值的是默认值，所以进入图形装配区域的坐标实际是 (0.0, 0.5, 0.0, 1.0)。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson20/process2.png?raw=true" width="1000px"/>

2、再次执行，将第二个坐标 (-0.5, -0.5, 0.0, 1.0) 传入图形装配区域并存储。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson20/process3.png?raw=true" width="1000px"/>

3、同样的步骤，将第三个坐标 (0.5, -0.5, 0.0, 1.0) 传入图形装配区域并存储。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson20/process4.png?raw=true" width="1000px"/>

4、开始装配图形，通过传入的顶点坐标，然后根据 `gl.drawArrays()` 传入的图形信息来决定如何装配。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson20/process5.png?raw=true" width="1000px"/>

5、显示在屏幕上的三角形是由片元（像素）组成，所以还得**将图形转化为片元，这个过程就被称为光栅化**。光栅化之后，我们就得到了组成这个三角形的所有片元。

需要注意的是，我这里只绘制了 10 个片元，但实际上应该是这个三角形最终在屏幕上所覆盖的像素数。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson20/process6.png?raw=true" width="1000px"/>