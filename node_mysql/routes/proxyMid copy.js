// /data/api/xxxx  ---> http://java:5000/api/xxxx
const http = require("http");
const { response } = require("express");

module.exports = (req, res, next) => {
    const context = "/data";
    if (!req.path.startsWith(context)) {
        //不需要代理
        next();
        return;
    }
    //需要代理
    const path = req.path.substr(context.length)
    //创建代理请求对象 request
    const request = http.request({
        host: "yuanjin.tech",
        port: 5100,
        path: path,
        method: req.method,
        headers: req.headers
    }, response => {
        //代理响应对象 response
        res.status(response.statusCode);
        for (const key in response.headers) {
            res.setHeader(key, response.headers[key]);
        }
        response.pipe(res)
    });
    //把请求体写入到代理请求对象的请求体中
    req.pipe(request);
}