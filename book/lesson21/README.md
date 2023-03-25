# 彩色三角形3: 调用片元着色器 - 逐片元调用

一旦光栅化结束，程序就开始 *逐片元调用* 片元着色器。片元着色器每调用一次，就处理一个片元。**片元着色器计算出该片元的颜色，并写入颜色缓冲区，直到最后一个片元处理完成，浏览器就会显示最终的结果。**

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/process1.png?raw=true" width="1000px"/>

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/process2.png?raw=true" width="1000px"/>

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/process3.png?raw=true" width="1000px"/>

## 证明片元着色器是逐片元调用

为了证明片元着色器对于每个片元都执行了一次，我们可以尝试通过根据片元的位置确定片元的颜色，**光栅化的过程中生成的片元都是带有坐标信息**的，调用片元着色器的时候坐标信息也随着片元传了进去。

我们可以通过 `vec4 gl_FragCoord` 的第 1 个分量和第 2 个分量表示片元在 <canvas \/> 坐标系统（窗口坐标系统）中的坐标值。

```c++
precision mediump float;

void main() {
    gl_FragColor = vec4(gl_FragCoord.x / 600.0, 0.0,  gl_FragCoord.y / 400.0, 1.0); 
}  
```

最终呈现效果如下：

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/draw.png?raw=true" width="400px"/>

