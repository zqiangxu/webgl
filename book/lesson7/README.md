# uniform变量实战: 改变颜色

uniform 用来从 JavaScript 程序向顶点着色器和片元着色器传输 `一致的(不变的)` 数据。

## 使用

1、声明 uniform 变量并赋值。
```c++
precision mediump float;
uniform vec4 u_FragColor;
```

其中: 关键词 `uniform` 被称为 `存储限定符`，表示接下来的一个变量是 uniform 变量。

精度限定词：用来指定变量的范围（最大值与最小值）和精度，这里表示为 `中等精度`。
```c++
precision mediump float;
```

2、获取 Uniform 变量的存储地址。
```javascript
const u_FlagColor = gl.getUniformLocation(gl.program, 'u_FragColor');
```

3、向 Uniform 变量赋值。
```javascript
gl.uniform4f(u_FlagColor, 0.0, 1.0, 0.0, 1.0);
```

其它的同族函数：
```javascript
gl.uniform1f(location, v0);
gl.uniform2f(location, v0, v1);
gl.uniform3f(location, v0, v1, v2);
gl.uniform4f(location, v0, v1, v2, v3);
```