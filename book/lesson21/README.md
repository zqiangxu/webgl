# 彩色三角形3: 调用片元着色器 - 逐片元调用

一旦光栅化结束，程序就开始 *逐片元调用* 片元着色器。片元着色器每调用一次，就处理一个片元。**片元着色器计算出该片元的颜色，并写入颜色缓冲区，直到最后一个片元处理完成，浏览器就会显示最终的结果。**

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/process1.png?raw=true" width="1000px"/>

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/process2.png?raw=true" width="1000px"/>

<img src="https://github.com/zqiangxu/webgl/blob/main/assets/book/lesson21/process3.png?raw=true" width="1000px"/>