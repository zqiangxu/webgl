# UBO

在 `WebGL 1.0` 中，任意种类的统一值一次只能设定一个，如果一帧内 uniform 有较多更新，对于 WebGL 这个状态机来说不是什么好事，会带来额外的 CPU 至 GPU 端的传递开销。

在 `WebGL 2.0`，允许一次发送一堆 uniform，这一堆 uniform 的聚合体，就叫做 UniformBuffer，

**`UBO (Uniform Buffer Object)`**：Uniform 缓冲区对象。它和普通的 uniform 作用一样，只不过可以一次性管理一个或者多个 uniform 数据。它替代了 gl.uniform 的的方式传递数据，也就不会再占用 shaderProgram 自身的 uniform 存储空间，可以存储更多的 uniform 变量。

它将众多的 Uniform 类型的变量集中在一起进行统一的管理，对于需要大量 Uniform 类型变量的程序可以显著地提高性能。

## UBO 与 Uniform
相比传统设置单个uniform类型变量的方式，具有如下几个特点：

1、可以存储更多的 uniform 类型变量。

2、可以简化大量 uniform 变量设置的流程。

3、可以通过切换不同的 UBO 绑定，在单一着色语言程序中迅速更新程序中的 uniform 类型变量的值。

4、可以在不同的着色语言程序中通过更新 UBO 中的数据实现所有 uniform 类型变量的更新。

## 参考文章：
1、[Uniform Buffer Object](https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object)

2、[事半功倍！巧用 WebGL 抓帧工具提高渲染效率](https://jishuin.proginn.com/p/763bfbd6a548)

3、[WebGL 与 WebGPU比对[4] – Uniform](https://www.dianjilingqu.com/64108.html)