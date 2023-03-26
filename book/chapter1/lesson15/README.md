# 变换矩阵: 缩放 

有了之前的经验，我们看下假设最初的点是 P，经过缩放操作之后变成了 P'。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/chapter1/lesson15/scale.png?raw=true" width="500px"/>

假设在三个方向 X轴、Y轴、Z轴的缩放因子为 Sx、Sy、Sz，那么我们很容易得出。

$x' = Sx * x$

$y' = Sy * y$

$z' = Sz * z$

而根据矩阵的乘法，缩放操作的变换矩阵为：

```math
\begin{pmatrix}
x' \\
y' \\
z' \\
1
\end{pmatrix}
=
\begin{pmatrix}
Sx & 0 & 0 & 0 \\
0 & Sy & 0 & 0 \\
0 & 0 & Sz & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
x \\
y \\
z \\
1
\end{pmatrix}
```

## 实现
实现可以参考 [上一节](../lesson14/)

```c++ 
attribute vec4 a_Position;
uniform mat4 u_Matrix;
void main() {
    gl_Position = a_Position * u_Matrix;
}
```

然后在 JavaScript 我们稍微改造即可。
```javascript
const u_Matrix = gl.getUniformLocation(gl.program, 'u_Matrix');

function getMatrix(Sx, Sy, Sz) {
    // 注意是按列主序
    return new Float32Array([
        Sx, 0, 0.0, 0.0,
        0, Sy, 0.0, 0.0,
        0.0, 0.0, Sz, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]);
}

// 其中 scale 为缩放值
gl.uniformMatrix4fv(u_Matrix, false, getMatrix(scale, scale, 1))
```
