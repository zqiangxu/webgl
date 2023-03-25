# 平移

如果我们需要平移一个三角形，需要对它的每一个顶点进行怎么样的操作？

以其中一个点 P(x, y, z) 平移到 P'(x', y', z') 为例。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson11/move.png?raw=true" width="500px"/>

假设我们在 X 轴、Y 轴、Z 轴 三个方向平移的具体分别为 Tx, Ty, Tz，那么我们很容易想到下面的等式。

```
x' = x + Tx
y' = y + Ty
z' = z + Tz
```

所以我们只需要在着色器中为每个顶点坐标的每个分量加上一个常量就可以实现上面的等式，而且比较明显的是这是一个 `逐顶点操作` 而非逐片元的操作，所以这个操作应该发生在顶点着色器，而不是片元着色器。

## 具体实现

因为 Tx，Ty, Tz 是对所有顶点来说都是固定的，所以我们使用 uniform 变量来表示三角形平移的距离。

```c++
attribute vec4 a_Position;

uniform vec4 u_Translation;
void main() {
    gl_Position = a_Position + u_Translation;
}
```

因为 a_Position 和 u_Translation 都是 vec4 类型的，所以可以直接使用 + 进行相加，此时两个矢量的对应的分量会被同时相加。

