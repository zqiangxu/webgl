# gl.vertexAttribPointer() 的步进和偏移参数 

使用多个缓冲区对象向着色器传递多种数据，比较适合 *数据量不大* 的情况。

而当复杂的三维图形具有成千上万个顶点的时候，维护所有的顶点数据是困难的，因此 WebGL 允许我们把顶点的坐标和尺寸数据打包到同一个缓冲区对象中，然后通过某种机制分别访问缓冲区对象中不同种类的数据。

比如:
```javascript
var verticesSizes = new Float32Array([
    // 顶点的坐标和尺寸
     0.5,  0.5, 10.0, // 第一个点
    -0.5, -0.5, 20.0, // 第二个点
     0.5, -0.5, 30.0  // 第三个点
]);

```

## 获取每个元素所占的字节数
然后通过类型化数组的 `BYTES_PER_ELEMENT` 属性就可以获取数组中每个元素所占的字节数。获取到每个元素所占的字节数之后就可以开始分配给 attribute 变量了。

```javascript
const fSize = verticesSizes.BYTES_PER_ELEMENT;
```

## 步进参数和偏移参数

获取到每个元素所占的字节数之后，就需要把缓冲区对象分配给 attribute 变量了。方法和之前一样，只是 `gl.vertexAttribPointer` 所需要传递的参数有所差别。根据 [第八节: 绘制多个点](../lesson8/) 我们知道
```javascript
gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
```
其中的：

`stride` 表示的是在缓冲区对象中，单个顶点的所有数据（在这里就是顶点的坐标和大小）的字节数，也就是两个相邻的顶点之间的距离，即 **`步进参数`**。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson17/stride-offset.png?raw=true" width="600px"/>

`offset` 表示的是当前考虑的数据项距离首个元素的距离，即 **`偏移参数`**。

可以看到顶点的坐标数据是放在最前面的，所以 offset 为 0，因此我们调用 `gl.vertexAttribArray()` 函数时，需要按照以下方式传递：

```javascript
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, fSize * 3, 0);
``` 

而尺寸大小则因为前两个是顶点坐标，所以 offset 应该设置为 `fSize * 2`，因此最终的调用方式为：

```javascript
gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, fSize * 3, fSize * 2);
```

最后再调用 `gl.enableVertexAttributeArray` 去开启变量即可。

完整的流程如下：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson17/process.png?raw=true" width="900px"/>