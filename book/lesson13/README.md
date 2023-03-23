# 变换矩阵: 旋转 

根据[上一节](../lesson12/) 我们得出旋转的公式为：

$x'=xcos\beta-ysin\beta$

$y'=xsin\beta+ycos\beta$

z' = z。

而根据矩阵的乘法：

```math
\begin{pmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{pmatrix}
\begin{pmatrix}
x_{1}\\
\vdots\\
x_{n}
\end{pmatrix}
=
\begin{pmatrix}
a_{11}x_1 + \cdots + a_{1n}x_n \\
\vdots\\
a_{m1}x_1 + \cdots a_{mn}x_n
\end{pmatrix}
```

我们很容易把旋转采用矩阵的方式实现：

```math
\begin{pmatrix}
x' \\
y' \\
z'
\end{pmatrix}
=
\begin{pmatrix}
cos\beta & -sin\beta & 0 \\
sin\beta & cos\beta & 0\\
0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}
```

## 实现
由于变换矩阵是 4 x 4 的，所以 GLSL 需要知道每个变量的类型，所以在着色器中我们可以通过 `mat4` 来声明一个 4 x 4 的矩阵。

```c++ 
attribute vec4 a_Position;
uniform mat4 u_Matrix;
void main() {
    gl_Position = a_Position * u_Matrix;
}
```

然后在 JavaScript 中，我们可以通过 `gl.uniformMatrix4fv` 来传递一个矩阵。


## 按列主序 和 按行主序

与 GLSL ES 不同的是，JavaScript 并没有专门表示矩阵的类型，我们需要使用类型化数组 `Float32Array` 。

我们知道数组是一维的，而矩阵是二维的，这里我们可以采用两种方式存储矩阵元素：**按行主序** 和 **按列主序**。

### 按行主序
$$
\left(
    \begin{matrix}
             a&b&c&d\\
      \hline e&f&g&h\\
      \hline i&j&k&l\\
      \hline m&n&o&p
    \end{matrix}
\right)
$$

### 按列主序
$$
\left(
    \begin{array}{c|c|c|c}
      a&b&c&d\\
      e&f&g&h\\
      i&j&k&l\\
      m&n&o&p
    \end{array}
\right)
$$

而 WebGL 和 OpenGL 一样，矩阵元素是 [**按列主序**] 存储在数据中的，也就是在数组中的表现应该是 [a, e, i, m, b, f, j, n, c, g, k, o, d, h, l, p]。

```javascript
const u_Matrix = gl.getUniformLocation(gl.program, 'u_Matrix');

function getMatrix(cosB, sinB) {
    return new Float32Array([
        cosB, sinB, 0.0, 0.0,
        -sinB, cosB, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]);
}

// 需要转化为弧度制，其中 angle 为角度
const radian = Math.PI * angle / 180.0;
const cosB = Math.cos(radian);
const sinB = Math.sin(radian);

gl.uniformMatrix4fv(u_Matrix, false, getMatrix(cosB, sinB));
```
