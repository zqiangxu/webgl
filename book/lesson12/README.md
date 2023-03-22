# 旋转

一个完整的旋转需要指明：

1、旋转轴 （图形将围绕哪个旋转轴进行旋转）

2、旋转方向 （顺时针 或 逆时针）

3、旋转角度 （图形经过旋转的角度）。

我们以三角形旋转为例：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson12/rotate.png?raw=true" width="500px"/>

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

