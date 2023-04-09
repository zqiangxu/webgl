# WebGL中的纹理映射步骤

在 WebGL 中实现纹理映射需要遵循以下几个步骤：

1、准备好映射到几何图形上的纹理图像。

2、为几何图形配置纹理映射方式、

3、加载纹理图像，对其进行一下配置，以在 WebGL 中使用它。

4、在片元着色器中将相应的纹素从纹理中抽取出来，并将纹素的颜色赋给片元。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/chapter2/lesson02/sky.png" width="400px"/>