const express = require('express')
// const http = require('http');
const app = express();
// const server = http.createServer(app);

app.use('*',require('./staticMiddleware'));

app.get(
  '/abc', 
  (req, res, next) => {
    // req和res是被express封装后的对象
    // res.send("<h1>abc</h1>")
    // res.status(302).header("location","https://www.baidu.com").end()
    // res.status(302).location("https://www.baidu.com").end()
    // res.redirect(302, "https://www.taobao.com")
    // res.status(200)
    console.log('handler1')
    // res.end()
    // next()
    throw new Error("abc")//相当于next(new Error("abc"))
  },
//   require("./errorMiddleware"),
  (req, res, next) => {
    console.log('33333')
  }
);

//错误处理的中间件需要4个参数，使用星号所有的中间件报错都会执行这个错误处理的中间件
app.use("*", require("./errorMiddleware"))
//use可以匹配以第一个参数路径作为父路径的所有路径 /error /error/one
// app.use("/error", require("./errorMiddleware"))

app.listen(9528, () => {
    console.log('server listen on 9528')
})



// function listen(port, callback) {
//     const http = require("http")
//     http.createServer(this).listen(port, callback)
// }