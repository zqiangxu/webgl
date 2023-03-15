# 绘制多个点

**构成三维模型的基本单位是三角形**。不管它的模型多么复杂，其基本组成部分都是三角形，只不过复杂的模型由更多的三角形组成而已。

比如: [Babylon Demos 里面的透明酒瓶](https://playground.babylonjs.com/#P1RZV0)。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/sodaBottle.png?raw=true" width="200px"/>

## 前言

在 [attribute变量实战: 鼠标点击绘制点](../lesson6/) 中，我们通过 for 循环调用 `gl.vertexAttrib3f` 向着色器传入一个点，然后再调用 `gl.drawArrays` 的方式将这个点绘制出来。

```javascript
points.forEach((point) => {
    // 将顶点位置传递给 attribute 变量
    gl.vertexAttrib3f(a_Position, point.x, point.y, 0.0);

    // 绘制一个顶点
    gl.drawArrays(gl.POINTS, 0, 1);
});
```

**它每次只能绘制一个点**，而对于一些复杂的由多个顶点组成的图形，如三角形、立方体等等，则需要一次性将图形的顶点全部传入顶点着色器，然后才能绘制出来。

WebGL 提供了一种很方便的机制，即 `缓冲区对象 (Buffer Object)`。

## 缓冲区对象 (BO -> Buffer Object) 

它可以一次性地向着色器传入多个顶点的数据。它是 WebGL 系统中的一块内存区域。

## 使用缓冲区对象

缓冲区对象是 WebGL 系统中一块存储区，我们可以在缓冲区对象中保存想要绘制的所有顶点数据，如图所示，我们需要先创建一个缓冲区，然后向其中写入顶点数据，最后就可以一次性的向顶点着色器中传入多个顶点的 attribute 变量数据。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/use-buffer.png?raw=true" width="800px"/>

## 完整的流程

使用缓冲区对象向顶点着色器传入多个顶点的数据，需要遵循以下几个步骤：

1、创建缓冲区对象 (gl.createBuffer())。

2、绑定缓冲区对象 (gl.bindBuffer())。

3、将数据写入缓冲区对象 (gl.bufferData())。

4、将缓冲区对象分配给一个 attribute 变量 (gl.vertexAttribPosition())。

5、开启 attribute 变量 (gl.enableVertexAttribArray())。

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/steps.png?raw=true" width="800px"/>

### 1、创建缓冲区对象

执行 `gl.createBuffer()` 之后，WebGL 系统中就多出了一个新创建的缓冲区对象，如下图所示： 
```javascript
const vertexBuffer = gl.createBuffer();
```

创建前:

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/before-create.png?raw=true" width="800px"/>

创建后:

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/after-create.png?raw=true" width="800px"/>

创建后的缓冲区可以通过 `gl.deleteBuffer(buffer)` 删除掉。

### 2、绑定缓冲区

将缓冲区对象绑定到 WebGL 系统中已经存在的目标上，这个目标表示缓冲区的用途（在这里就是向顶点着色器提供传给 attribute 变量的数据），这样 WebGL 才能正确处理其中的数据。

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
```

完整 API 为: 
```javascript
gl.bindBuffer(target, buffer);
```
其中：`buffer` 支持 `gl.ARRAY_BUFFER`、`gl.ELEMENT_ARRAY_BUFFER` (WebGL1.0)。

| buffer | 说明 |
|  ----  | ---- |
| gl.ARRAY_BUFFER | 表示缓冲区对象中包含了顶点的数据 |
| gl.ELEMENT_ARRAY_BUFFER | 表示缓冲区对象中包含了顶点的索引值 |

执行完成后，WebGL 系统内部状态发生了改变。
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/bind-buffer.png?raw=true" width="800px"/>

### 3、向缓冲区中写入数据

我们不能直接向缓冲区中写入数据，只能向 `目标` 写入数据，所以要想向缓冲区写入数据，就必须先执行上一步的绑定操作。

```javascript
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
```
这个方法表示：将第二个参数的 vertices 中的数据写入了绑定到第一个参数 gl.ARRAY_BUFFER 上的缓冲区对象。

完整的 API 为:
```javascript
gl.bufferData(target, data, usage);
```

参数说明: 
| 参数 | 说明 |
|  ----  | ---- |
| target | gl.ARRAY_BUFFER 或 gl.ELEMENT_ARRAY_BUFFER  (WebGL1.0) |
| data | 表示需要写入缓冲区的数据 |
| usage | 表示程序将如何使用存储在缓冲区对象中的数据，该参数主要用于帮助 WebGL 进行内部优化 |

其中 `usage` 支持：
| 类型 | 说明 |
|  ----  | ---- |
| gl.STATIC_DRAW | 只会向缓冲区对象中写入一次数据，但需要绘制多次 |
| gl.STREAM_DRAW | 只会向缓冲区对象中写入一次数据，然后绘制多次 |
| gl.DYNAMIC_DRAW | 会向缓冲区对象中多次写入数据，并绘制很多次 |


写入完成后系统内部的状态变成了下图所示：
<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson8/buffer-data.png?raw=true" width="800px"/>


### 4、将缓冲区对象分配给一个 attribute 变量

使用 `gl.vertexAttrib[1234]f` 一次只能向 attribute 分配(传输) 一个值。而如果需要将数组中的所有值一次性分配给一个 attribute 变量，我们需要借助 `gl.vertexAttribPointer` 方法。

如:

```javascript
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
```

`gl.vertexAttribPointer` 的 API 如下：
```javascript
gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
```

参数说明: 
| 参数 | 说明 |
|  ----  | ---- |
| location | 指定待分配 attribute 变量的存储位置 |
| size | 指定缓冲区中的每个顶点的分量个数 (1->4)，对应 gl.vertexAttrib[1234]f |
| type | 数据格式 |
| normalized | 布尔值，表示是否将非浮点数的数据归一到 [0,1] 或 [-1, 1]区间 |
| stride | 指定两个相邻的顶点间的字节数，默认为 0 |
| offset | 指定缓冲区对象中的偏移量（以字节为单位），即 attribute 变量从缓冲区的何处开始存储，如果是起始位置则为 0 |

type 的详细说明:
| type | 说明 |
|  ----  | ---- |
| gl.UNSIGNED_BYTE | 无符号字节, Uint8Array |
| gl.SHORT | 短整型, Int16Array |
| gl.UNSIGNED_SHORT | 无符号短整型, Uint16Array |
| gl.INT | 整形, Int32Array |
| gl.UNSIGNED_INT | 无符号整形, Uint32Array |
| gl.FLOAT | 浮点型, Float32Array |

