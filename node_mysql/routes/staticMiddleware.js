module.exports = (req, res, next) => {
    if (req.path.startsWith("/api")) {
        //说明请求的是api接口
        next();
    } else {
        //说明请求的是静态资源
        if ('静态资源存在') {
            res.send('静态资源')
        } else{
            next()
        }
    }
}