# attribute 变量 和 uniform 变量

`attribute 变量` 和 `uniform 变量` 是 GLSL ES 变量，被用来从外部（如 JavaScript 程序）向顶点着色器内传递数据，从而提供程序的可扩展性，只有在顶点着色器中才能使用。

## 区别

attribute 变量传输的是那些与顶点相关的数据。

uniform 变量传输给的是那些对于所有顶点都相同（或与顶点无关）的数据。

## 使用

1、在顶点着色器中声明 attribute 变量。

2、将 attribute 变量赋值给 gl_Position 变量。

3、向 attribute 变量传输数据。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson5/process.png?raw=true" width="900px"/>

## 示例

1、声明 attribute 变量并赋值。
```c++
attribute vec4 a_Position;
void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
}    
```

其中: 关键词 `attribute` 被称为 `存储限定符`，表示接下来的一个变量是 attribute 变量。

2、当我们建立好着色器之后，WebGL 就会对着色器进行解析，辨识出着色器具有的 attribute 变量，每个变量都具有一个存储地址，以便通过存储地址向变量传输数据。

```javascript
const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
```

3、接下来我们就可以通过 `gl.vertexAttrib3f()` 函数向着色器中传入值。
```javascript
gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
```

其它的同族函数：
```javascript
gl.vertexAttrib1f(location, v0);
gl.vertexAttrib2f(location, v0, v1);
gl.vertexAttrib3f(location, v0, v1, v2);
gl.vertexAttrib4f(location, v0, v1, v2, v3);
```

## OpenGL 函数命名规范
OpenGL 中的函数名由三部分组成，`<基础函数名><参数个数><参数类型>` 组成, WebGL 同样遵循同样的规范。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson5/func.png?raw=true" width="600px"/>