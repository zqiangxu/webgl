# 绘制一个三角形 

有了之前的学习，绘制一个三角形，只需要在 [绘制多个点](../lesson8/) 的基础上，将 `gl.drawArrays` 修改为：

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

即可。当然顶点着色器里面的 `gl_PointSize` 也可以删除，它只有在绘制单个点的时候才会起作用。

## gl.drawArrays 支持绘制的图形

gl.drawArrays 通过第一个参数就可以以不同的方式绘制图形。它支持的图形有：

| 图形 | 参数 mode | 描述 |
| --- | --- | --- |
| 点 | gl.POINTS | 一系列点 |
| 线段 | gl.LINES | 一系列单独的线段，绘制在 (v0, v1), (v2, v3), (v4, v5) 处，如果点的个数是奇数，最后一个点将被丢弃 |
| 线条 | gl.LINE_STRIP | 一系列连接的线段，绘制在 (v0, v1), (v1, v2), (v2, v3), ...(vn-1, vn)，相比较上一个这种方式的线段是连通的，但首尾不相连 |
| 回路 | gl.LINE_LOOP | 一系列连接的线段，绘制在 (v0, v1), (v1, v2), (v2, v3), ...(vn-1, vn), (vn, v0)，相比较上一个它的首尾是相连的 |
| 三角形 | gl.TRIANGLES | 一系列单独的三角形，绘制在 (v0, v1, v2), (v3, v4, v5) ...，如果点的个数不是3的整数倍，多余的会被忽略 |
| 三角带 | gl.TRIANGLE_STRIP | 一系列带状的三角形，绘制在 (v0, v1, v2), (v2, v1, v3), (v2, v3, v4) .... , **注意点的顺序**|
| 三角扇 | gl.TRIANGLE_FAN | 一系列三角形组成的类似扇形的图形，绘制在 (v0, v1, v2), (v0, v2, v3), (v0, v3, v4)... |

通过下面的图我们可以更容易理解：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson10/mode.png?raw=true" width="800px"/>