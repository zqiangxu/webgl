# 彩色三角形

当我们把上一个例子中的 `gl.drawArrays(gl.POINTS, 0, 3);` 改成:

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

此时我们发现，渲染的结果从之前独立的三个点变成了一个颜色平滑过度的三角形，为什么呢？

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson19/triangles.png?raw=true" width="500px"/>

## 几何形状的装配和光栅化

在讲解主要渲染管线的流程前，我们需要考虑以下几个问题：

1、程序向 gl_Position 传递了三个顶点的坐标，谁来确定这三个点就是三角形的三个顶点？

2、为了填充三角形内部，谁来确定哪些像素需要被着色？

3、谁来负责调用片元着色器，片元着色器又是怎么样处理每个片元的？

实际上，在顶点着色器和片元着色器中间有两个步骤：**图形装配** 和 **光栅化**。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson19/process.png?raw=true" width="1000px"/>
