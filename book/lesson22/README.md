# 彩色三角形4：varying 变量的作用和内插过程

我们在最开始 [彩色三角形1：示例](../lesson19/) 中，我们把顶点的颜色赋值给了顶点着色器的 varying 变量 v_Color，它的值被传给片元着色器中的 `同名、同类型` 的变量 v_Color。

但是实际上更准确的说，顶点着色器中的 v_Color 变量在传入片元着色器之间经过了 **内插** 的过程，所以片元着色器中的 v_Color 中的变量实际上和顶点着色器中的 v_Color 变量实际并不是同一回事，这也是将这种变量称为 `varying`（变化的）变量的原因。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson22/process.png?raw=true" width="1000px"/>