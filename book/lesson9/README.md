# 类型化数组

为了绘制三维图形，WebGL 通常需要处理大量相同的类型数据，为了优化性能，WebGL 为每种基本数据类型都引入了一种特殊的数组。

| 数组类型 | 每个元素所占字节数 | 描述(c 语言中的数据类型)|
| --- | --- | --- |
| Int8Array | 1 | 8位整数型 (signed char) |
| UInt8Array | 1 | 8位无符号整数型 (unsigned char) |
| Int16Array | 2 | 16位整数型 (signed short) |
| UInt16Array | 2 | 16位无符号整数型 (unsigned short) |
| Int32Array | 4 | 32位整数型 (signed int) |
| UInt32Array | 4 | 32位无符号整数型 (unsigned int) |
| Float32Array | 4 | 单精度32位浮点数 (float) |
| Float64Array | 8 | 双精度32位浮点数 (double) |

我们可以通过 ` new ` 来实例化类型化数组。

```javascript
var vertices = new Float32Array([
    0.5, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);
```