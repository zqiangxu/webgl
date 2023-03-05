# 绘制一个点

使用 WebGL 绘制一个位于原点 (0.0, 0.0, 0.0) 处 20px 大小红色的点。

之前在 2D canvas 中绘制一个矩形采用的方式是，[第一个示例](../lesson1/canvas.html)：

```javascript
context.fillStyle = 'rgba(255, 0, 0, 1)';
context.fillRect(100, 10, 150, 150);
```

可能你会认为 `WebGL` 也差不多，例如:

```javascript
gl.drawColor(1.0, 0.0, 0.0, 1.0);
gl.drawPoint(0.0, 0.0, 0.0, 10);
```

然而事情并没有这么简单，WebGL 依赖一种新的方法称为 `着色器（Shader）` 的绘制机制。

## 着色器

着色器分为: `顶点着色器` 和 `片元着色器`。

## 顶点着色器

## 片元着色器