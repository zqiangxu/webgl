# 绘制一个三角形 

有了之前的学习，绘制一个三角形，只需要在 [绘制多个点](../lesson8/) 的基础上，将 `gl.drawArrays` 修改为：

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

即可。当然顶点着色器里面的 `gl_PointSize` 也可以删除，它只有在绘制单个点的时候才会起作用。

