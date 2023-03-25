# 彩色三角形

当我们把上一个例子中的 `gl.drawArrays(gl.POINTS, 0, 3);` 改成:

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

此时我们发现，渲染的结果从之前独立的三个点变成了一个颜色平滑过度的三角形，为什么呢？

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson19/triangles.png?raw=true" width="500px"/>