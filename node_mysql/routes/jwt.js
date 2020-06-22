const jwt = require('jsonwebtoken');
const secrect = "wk"
const cookieKey = "token";

//颁发jwt
exports.publish = function (res, maxAge = 3600*24, info = {}) {
    const token = jwt.sign(
        info,
        secrect,
        {
            expiresIn: maxAge
        }
    )
    //添加到cookie
    res.cookie(cookieKey, token, {
        maxAge: maxAge*1000,
        path: "/"
    })
    //添加其他传输
    res.header("authorization", token)
}

exports.verify = function (req) {
    let token;
    //尝试从cookie中获取
    token = req.cookies[cookieKey];
    //cookie中没有
    if (!token) {
        //尝试从header中获取
        token = req.headers.authorization;
        if (!token) {
            //没有token
            return null;
        }
        // authorization: bearer token
        token = token.split(" ");
        token = token.length === 1 ? token[0] : token[1];
    }
    try{
        return jwt.verify(token, secrect);
    } catch {
        return null
    }
}