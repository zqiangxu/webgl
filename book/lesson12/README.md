# 旋转

一个完整的旋转需要指明：

1、旋转轴 （图形将围绕哪个旋转轴进行旋转）

2、旋转方向 （顺时针 或 逆时针）

3、旋转角度 （图形经过旋转的角度）。

我们以三角形旋转为例：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson12/rotate.png?raw=true" width="500px"/>

根据上图我们可以得到，假设旋转的半径为 r，那么:
```
x = r * cosα;
y = r * sinα;
```

而经过旋转后
``
x' = r * cos(α + β)
y' = r * sin(α + β)
```