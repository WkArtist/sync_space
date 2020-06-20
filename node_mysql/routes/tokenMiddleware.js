const {getErr} = require("./getSendResult");
const {pathToRegexp} = require('path-to-regexp')
const cryptor = require('../util/crypt')
const needTokenApi = [
    {method: "POST", path: "/api/student/"},
    {method: "PUT", path: "/api/student/:id"}
]

//用于解析token
module.exports = (req, res, next) => {
    const apis = needTokenApi.filter((api) => {
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    })
    if (apis.length === 0) {
        next();
        return;
    }

    let token = req.cookies.token;
    if (!token) {
        // 从header的authorization中获取
        token = req.headers.authorization;
    }
    if (!token) {
        // 没有认证
        handleNoToken(req, res, next);
        console.log('认证没有通过')
        return;
    }
    const userId = cryptor.decrypt(token);
    console.log(userId)
    req.userId = userId;//将解密后的userId保存起来
    //验证token
    console.log('认证通过')
    next();
}

//处理没有认证的过程
function handleNoToken (req, res, next) {
    res.status(403).send(getErr("you dont have any token to access the api", 403))
}