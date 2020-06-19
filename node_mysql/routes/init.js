const express = require('express')
const app = express();
const path = require('path');
const staticRoot = path.resolve(__dirname, "../public");

//下面这段代码的作用：
//请求时，会根据请求路径（req.path），从指定的目录中寻找是否存在该文件，
//如果存在，直接响应文件，而不再移交给后面的中间件
//如果不存在文件，则直接移交给后续的中间件处理
app.use("/static",express.static(staticRoot))

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({extended: true}))

//解析 application/json格式的请求体
app.use("*", express.json())

// 处理api的请求
app.use("/api/student", require('./api/student'));

app.use("/api/admin", require('./api/admin'))

// 处理错误的中间件
app.use("*", require("./errorMiddleware"))

app.listen(9529, () => {
    console.log('server listen on 9529')
})
