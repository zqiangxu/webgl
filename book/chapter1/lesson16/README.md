# 将非坐标数据传入顶点着色器

在 [绘制多个点](../lesson08/) 中，绘制的点的大小是写死的 `gl_PointSize = 10.0;` ，如果每个顶点的 gl_PointSize 都不相同，应该怎么处理呢？

## 创建多个缓冲区对象

同样的，我们可以通过缓冲区对象来向顶点着色器中传递多个尺寸的数据。

首先，我们通过在 `顶点着色器` 中声明一个 `a_PointSize` 变量。

```c++
attribute vec4 a_Position;
attribute float a_PointSize;
void main() {
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
}
```

在 JavaScript 同样的我们可以通过 类型化数组 Float32Array 向缓冲区中写入数据，完整的流程我们可以参考：[绘制多个点](../lesson08/)。
```javascript
const a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
const points = new Float32Array([
    10.0, 20.0, 30.0
]);        

// 创建缓冲区对象
const sizeBuffer = gl.createBuffer();

// 将缓冲区对象绑定到目标
gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);

// 向缓冲区中写入数据
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

// 将缓冲区对象分配给 a_PointSize 变量
gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, 0, 0);

// 连接 a_PointSize 变量与分配给它的缓冲区对象
gl.enableVertexAttribArray(a_PointSize);
```

使用两个缓冲区对象向顶点着色器中传输数据的流程如下：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/chapter1/lesson16/process.png?raw=true" width="1000px"/>