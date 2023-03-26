# attribute变量实战: 鼠标点击绘制点

注意坐标转换即可。

```javascript
function pointConvertWebGLPoint(x, y) {
    return {
        x: (x - rect.width / 2 - rect.left) / (rect.width / 2),
        y: -(y - rect.height / 2 - rect.top) / (rect.height / 2)
    }
}
```