# 顶点着色器 到 片元着色器 之间的数据传递： varying 变量

从之前的章节我们知道，片元着色器可以处理颜色之类的属性。我们在 [uniform变量实战: 改变颜色](../lesson7/) 中讲到过可以使用 `uniform` 变量将颜色信息传入片元着色器。**但是因为 uniform 变量是不可变的**，因此我们无法为每个顶点都准备一个值，那这时程序中的所有顶点都只能是同一个颜色。

为了解决以上的问题，GLSL 提供了一种新的变量： `varying 变量` 向片元着色器中传入数据。

## varying 变量

varying 变量的实际作用是：**从顶点着色器向片元着色器传递数据。**

### 在 顶点着色器 中声明 varying 变量

在顶点着色器中，我们声明了 attribute 变量 a_Color 用来接收颜色数据，然后声明了新的 varying 变量 v_Color，该变量负责将颜色值传递给片元着色器。

```c++
attribute vec4 a_Position;

// 接收颜色数据
attribute vec4 a_Color;

// 声明 varying 变量
varying vec4 v_Color;

void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;

    // 将颜色数据传递给片元着色器
    v_Color = a_Color;
}
```

## 从 顶点着色器 中接收数据
那么在片元着色器中该如何接收这个变量呢？

只需要在片元着色器中也声明一个（与顶点着色器中声明的 varying 变量同名的）varying 变量即可。

```c++
varying vec4 v_Color;
```

然后把 `v_Color` 赋值给 `gl_FragColor` 即可，**这样每个顶点的颜色都将被修改**。
```c++
gl_FragColor = v_Color;
```

其余的传递参数就跟之前的一样，具体参考 [上一节](../lesson17/)。


<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson18/process.png?raw=true" width="1000px"/>