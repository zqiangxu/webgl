# WebGL
WebGL 学习，偏向0基础，本书大部分知识来源于 《WebGL 编程指南》，有兴趣的同学建议购买学习。

## WebGL 起源
在计算机上使用最广泛的两种三维图形的渲染技术是 `Direct3D` 和 `OpenGL`。

`OpenGL` 最初是由 SGI(`Silicon Graphics Inc`)开发，并在 1992 年发布为开源标准。

`WebGL` 实际上是 OpenGL 的一个特殊的版本 `OpenGL ES` 中派生出来的，OpenGL ES 于 2003 - 2004 年被首次提出，并在 2007 年 (ES 2.0) 和 2012 年 (ES 3.0) 进行了两次升级。WebGL 是基于 ES 2.0 的。 

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/relations.png?raw=true" />

从 OpenGL 2.0 开始，支持了一项非常重要的特性，可编程的着色器方法 (programmable shader functions)，该特性被 OpenGL ES2.0 继承，并成为 WebGL 1.0 标准的核心部分。

## 着色器

着色器方法又被成为 `着色器`，使用一种类似 C 的编程语言实现精美的视觉效果。

编写着色器的语言又被称为 `着色器语言`。OpenGL ES 2.0 基于 OpenGL 着色器语言 (`GLSL`)。WebGL 基于 OpenGL ES 2.0，所以也是采用 GLSL ES 来编写着色器。

## 章节目录

---

### 第一章：WebGL 入门
01、[使用 Canvas 绘制一个矩形](./book/chapter1/lesson01/)

02、[WebGL 程序入门：清空绘图区](./book/chapter1/lesson02/)

03、[绘制一个点](./book/chapter1/lesson03/)

04、[WebGL坐标系统](./book/chapter1/lesson04/)

05、[attribute变量 和 uniform变量](./book/chapter1/lesson05/)

06、[attribute变量实战: 鼠标点击绘制点](./book/chapter1/lesson06/)

07、[uniform变量实战: 改变颜色](./book/chapter1/lesson07/)

08、[绘制多个点](./book/chapter1/lesson08/)

09、[类型化数组](./book/chapter1/lesson09/)

10、[绘制一个三角形](./book/chapter1/lesson10/)

11、[平移](./book/chapter1/lesson11/)

12、[旋转](./book/chapter1/lesson12/)

13、[变换矩阵: 旋转](./book/chapter1/lesson13/)

14、[变换矩阵: 平移](./book/chapter1/lesson14/)

15、[变换矩阵: 缩放](./book/chapter1/lesson15/)

16、[将非坐标数据传入顶点着色器](./book/chapter1/lesson16/)

17、[gl.vertexAttribPointer() 的步进和偏移参数](./book/chapter1/lesson17/)

18、[顶点着色器 到 片元着色器 之间的数据传递: varying 变量](./book/chapter1/lesson18/)

19、[彩色三角形1：示例](./book/chapter1/lesson19/)

20、[彩色三角形2：图形装配 与 光栅化](./book/chapter1/lesson20/)

21、[彩色三角形3：调用片元着色器 - 逐片元调用](./book/chapter1/lesson21/)

22、[彩色三角形4：varying 变量的作用和内插过程](./book/chapter1/lesson22/)

23、[渲染管线 (译)](./book/chapter1/lesson23/)

---
### 第二章：纹理与贴图

01、[纹理和纹素](./book/chapter2/lesson01/)

02、[WebGL中的纹理映射步骤](./book/chapter2/lesson02/)

## 附录

临时目录，后续再迁移到正文。

1、[UBO](./book/chapter1/appendix/ubo/)

2、[WebGL Report](./book/chapter1/appendix/report)

3、[WebGL 与 离屏Canvas 结合](./book/chapter1/appendix/offscreencanvas/)

## 学习资料

1、[LearnOpenGL-CN](https://learnopengl-cn.readthedocs.io/zh/latest/)

2、[浅墨的游戏编程](https://www.zhihu.com/column/game-programming)

3、[Learning Modern 3D Graphics Programming](https://nicolbolas.github.io/oldtut/index.html)

4、[opengl-tutorial](http://www.opengl-tutorial.org/)

5、[Open.gl/introduction](https://open.gl/transformations)

6、[OpenGL Programming Guide](http://www.glprogramming.com/red/)

7、[An intro to modern OpenGL. Table of Contents](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents)