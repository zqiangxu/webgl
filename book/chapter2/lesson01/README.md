# 纹理与纹素

如果我们需要创建一堵逼真的墙，如果试图创建多个三角形，指定他们的颜色和位置来模拟墙面，那么就会陷入繁琐和无意义的工作中。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/chapter2/lesson01/wall.png" width="400px"/>


## 纹理映射

为了解决这个问题，在三维图形学中，引入了 `纹理映射 (texture mapping)`。

**纹理映射** 理解其实比较简单，就是将一张图（就像一张贴纸）映射（贴）到一个几何图形的表面上。

## 纹理

假如将一张真实世界的图片贴到一个由两个三角形组成的矩形上面，这样矩形的表面看上去就是这张图片，这个时候这张图片又可以称为 `纹理图片 (texture image)` 或者 **`纹理 (texture)`。**

## 纹素

纹理映射的作用就是根据纹理的图像，为之前光栅化后的每个片元图上合适的颜色，组成纹理图像的像素又被称为 `纹素 (texels, texture elements)`。每一个纹素的颜色都是使用 RGB 或 RGBA 格式编码。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/chapter2/lesson01/texels.png" width="600px"/>