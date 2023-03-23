# 变换矩阵: 旋转 

根据在 [平移](../lesson12/) 我们得出平移的公式为：

$x'= x + Tx$

$y'= y + Ty$

$z' = z + Tz$

而根据矩阵的乘法，我们很容易利用矩阵实现这个能力：

$$
\begin{pmatrix}
x' \\
y' \\
z' \\
1
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & Tx \\
0 & 1 & 0 & Ty \\
0 & 0 & 1 & Tz \\
0 & 0 & 0 & 0
\end{pmatrix}
\begin{pmatrix}
x \\
y \\
z \\
1
\end{pmatrix}
$$

## 实现
实现可以参考 [上一节](../lesson13/)

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

function getMatrix(cosB, sinB) {
    // 注意是按列主序
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
