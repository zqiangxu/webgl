# 旋转

一个完整的旋转需要指明：

1、旋转轴 （图形将围绕哪个旋转轴进行旋转）

2、旋转方向 （顺时针 或 逆时针）

3、旋转角度 （图形经过旋转的角度）。

我们以三角形旋转为例：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/base/lesson12/rotate.png?raw=true" width="500px"/>

根据上图我们可以得到，假设旋转的半径为 r，那么:

$x = r * cos\alpha$

$y = r * sin\alpha$

而经过旋转 $\beta$ 后：

$x' = r * cos(\alpha + \beta)$

$y' = r * sin(\alpha + \beta)$


而根据 [三角函数的两角和差公式](https://baike.baidu.com/item/%E4%B8%A4%E8%A7%92%E5%92%8C%E5%85%AC%E5%BC%8F/10201637?fr=aladdin)，

$sin(\alpha+\beta)=sin\alpha cos\beta+cos\alpha sin\beta$

$cos(\alpha+\beta)=cos\alpha cos\beta-sin\alpha sin\beta$

所以:

$x'=r(cos\alpha cos\beta-sin\alpha sin\beta)$

$y'=r(sin\alpha cos\beta+cos\alpha sin\beta)$

因此我们可以推导出：

$x'=xcos\beta-ysin\beta$

$y'=xsin\beta+ycos\beta$

而 z' = z。

## 实现

这里的实现就比较简单了，着色器的改动：

```c++
uniform float u_CosB;
uniform float u_SinB;

void main() {
    gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;
    gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;
    gl_Position.z = a_Position.z;
    gl_Position.w = 1.0;
}
```

然后在 JavaScript 传递参数的时候，如果只是传递一个浮点数，可以通过 `gl.uniform1f` 进行传递。

```javascript
// 其中 angle 为旋转的角度，需要调整为弧度制。
const radian = Math.PI * angle / 180.0;
const cosB = Math.cos(radian);
const sinB = Math.sin(radian);

gl.uniform1f(u_CosB, cosB);
gl.uniform1f(u_SinB, sinB);
```