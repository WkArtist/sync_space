const express = require('express')
const cors = require("cors");
// const session = require('express-session');
const app = express();
const path = require('path');
const staticRoot = path.resolve(__dirname, "../public");

// app.use(session({
//     secret: "wk",
//     name: 'sessionId'
// }));

//下面这段代码的作用：
//请求时，会根据请求路径（req.path），从指定的目录中寻找是否存在该文件，
//如果存在，直接响应文件，而不再移交给后面的中间件
//如果不存在文件，则直接移交给后续的中间件处理
app.use("/static",express.static(staticRoot))

//处理跨域
const whiteList = ["null"];
app.use(
    cors({
        // origin: "*",
        origin(origin, callback) {
            if (!origin) {
                callback(null, "*");
                return
            }
            // if (whiteList.includes(origin)) {
                callback(null, origin);
            // } else {
            //     callback(new Error("not allowed"))
            // }  
        },
        credentials: true
    })
)
// app.use(require('./corsMiddleware'))

// 加入cookie-parser中间件
// 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入之后，会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 应用token中间件
app.use(require('./tokenMiddleware'))

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
