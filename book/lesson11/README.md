# 平移

如果我们需要平移一个三角形，需要对它的每一个顶点进行怎么样的操作？

以其中一个点 P(x, y, z) 平移到 P'(x', y', z') 为例。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson11/move.png?raw=true" width="500px"/>

假设我们在 X 轴、Y 轴、Z 轴 三个方向平移的具体分别为 Tx, Ty, Tz，那么我们很容易想到下面的等式。

```
x' = x + Tx
y' = y + Ty
z' = z + Tz
```

所以我们只需要在着色器中为每个顶点坐标的每个分量加上一个常量就可以实现上面的等式，而且比较明显的是这是一个 `逐顶点操作` 而非逐片元的操作，所以这个操作应该发生在顶点着色器，而不是片元着色器。