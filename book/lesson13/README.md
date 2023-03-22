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