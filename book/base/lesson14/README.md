# 变换矩阵: 旋转 

根据在 [平移](../lesson12/) 我们得出平移的公式为：

$x'= x + Tx$

$y'= y + Ty$

$z' = z + Tz$

而根据矩阵的乘法，平移操作的变换矩阵为：

```math
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
```

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

function getMatrix(tx, ty, tz) {
    // 注意是按列主序
    function getMatrix(tx, ty, tz) {
        return new Float32Array([
            1.0, 0.0, 0.0, tx,
            0.0, 1.0, 0.0, ty,
            0.0, 0.0, 1.0, tz,
            0.0, 0.0, 0.0, 1.0,
        ]);
    }
}

// 其中 distanceX 为 X轴方向平移的距离
gl.uniformMatrix4fv(u_Matrix, false, getMatrix(distanceX, 0, 0));
```
