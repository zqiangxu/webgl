# attribute 变量 和 uniform 变量

`attribute 变量` 和 `uniform 变量` 是 GLSL ES 变量，被用来从外部（如 JavaScript 程序）向顶点着色器内传递数据，从而提供程序的可扩展性，只有在顶点着色器中才能使用。

## 区别

attribute 变量传输的是那些与顶点相关的数据。

uniform 变量传输给的是那些对于所有顶点都相同（或与顶点无关）的数据。

## 使用

1、在顶点着色器中声明 attribute 变量。

2、将 attribute 变量赋值给 gl_Position 变量。

3、向 attribute 变量传输数据。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson5/process.png?raw=true" width="800px"/>