
/**
 * 初始化着色器
 * @see {@link http://www.xiaobaigis.com/Home/WebArticle?ID=63}
 * @param {*} gl 
 * @param {*} vShader 
 * @param {*} fShader 
 * @returns 
 */
function initShaders(gl, vShader, fShader) {
    let program = createProgram(gl, vShader, fShader);
    if (!program) {
        console.log('无法创建程序对象');
        return false;
    }

    // 7、使用程序对象
    gl.useProgram(program);
    gl.program = program;

    /**
     * 创建程序对象
     * @param {*} gl
     * @param {*} vShader 
     * @param {*} fShader 
     */
    function createProgram(gl, vShader, fShader) {
        var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vShader);
        var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fShader);
        if (!vertexShader || !fragmentShader) {
            return null;
        }

        // 4、创建程序对象
        let program = gl.createProgram();
        if (!program) {
            return null;
        }

        // 5、为程序对象分配顶点着色器和片元着色器
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        // 6、连接着色器
        gl.linkProgram(program);

        // 检查连接
        var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
            var error = gl.getProgramInfoLog(program);
            console.log('无法连接程序对象: ' + error);
            gl.deleteProgram(program);
            gl.deleteShader(fragmentShader);
            gl.deleteShader(vertexShader);
            return null;
        }
        return program;
    }

    /**
     * 创建着色器对象
     * @param {} gl
     * @param {*} type
     * @param {*} source
     */
    function loadShader(gl, type, source) {
        // 1、创建着色器对象
        var shader = gl.createShader(type);
        if (shader == null) {
            console.log('无法创建着色器');
            return null;
        }
        // 2、设置着色器源代码
        gl.shaderSource(shader, source);

        ///3、编译着色器
        gl.compileShader(shader);

        // 检查着色器的编译状态
        var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            var error = gl.getShaderInfoLog(shader);
            console.log('编译shader失败: ' + error);
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    return true;
}