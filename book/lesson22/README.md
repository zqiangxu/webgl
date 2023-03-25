# 彩色三角形4：varying 变量的作用和内插过程

我们在最开始 [彩色三角形1：示例](../lesson19/) 中，我们把顶点的颜色赋值给了顶点着色器的 varying 变量 v_Color，它的值被传给片元着色器中的 `同名、同类型` 的变量 v_Color。

但是实际上准确的说，顶点着色器中的 v_Color 变量在传入片元着色器之间经过了 **内插** 的过程，所以片元着色器中的 v_Color 中的变量实际上和顶点着色器中的 v_Color 变量实际并不是同一回事，这也是将这种变量称为 `varying`（变化的）变量的原因。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson22/process.png?raw=true" width="1000px"/>

更准确的说，[彩色三角形1：示例](../lesson19/) 中的三角形三个顶点指定了三种不同的颜色，其中**三角形表面上这些片元颜色值都是  
 WebGL 系统用这三种顶点颜色内插出来的。**

## 内插

我们以一个简单的例子来看下内插的过程。

考虑一条两端颜色不一样的线段，一端为红色，一端为蓝色，我们在顶点着色器中赋值给 v_Color 这两种颜色，那么 WebGL 就会自动的计算出线段上所有点（片元）的颜色，并赋值给片元着色器中的 varying 变量 v_Color。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson22/varying.png?raw=true" width="800px"/>

