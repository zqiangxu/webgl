# WebGL 程序入门：清空绘图区

绘制一个矩形。
```html
<canvas id="canvas" width="400" height="400" />
<script type="text/javascript">
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl');

    gl.clearColor(1.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
</script>
```

### 一：获取 WebGL 绘图上下文


```javascript
const gl = canvas.getContext('webgl');
```

### 二：指定绘图区域的背景色。

`gl.clearColor(red, green, blue, alpha)` 可以以 RGBA 的格式设置背景色。

其中: `red`、`green`、`blue` 的范围为 (0.0 ~ 1.0)

```javascript
gl.clearColor(1.0, 0.0, 0.0, 1.0);
```

### 三、清空 Canvas 。
我们可以通过 `gl.clear(buffer)` 用上一步设置的背景色清空绘图区域。

其中: `buffer` 表示需要清空的颜色缓冲区。

清空绘图区域，实际上是在清空颜色缓冲区（color buffer），`gl.COLOR_BUFFER_BIT` 表示告诉 WebGL 清空颜色缓冲区。

除了颜色缓冲区，WebGL 还支持：

(1)、gl.DEPTH_BUFFER_BIT: 深度缓冲区。

(2)、gl.STENCIL_BUFFER_BIT: 模板缓冲区。

## 绘制结果

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/chapter1/lesson02/result.png?raw=true" width="400px"/>