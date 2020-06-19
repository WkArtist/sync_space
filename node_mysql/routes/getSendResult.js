exports.getErr = function (err = "server internal error", errCode = 500) {
    return {
        code: errCode,
        msg: err
    }
}

exports.getResult = function (result) {
    return {
        code: 0,
        msg: "",
        data: result
    }
}

//处理异步错误
exports.asyncHandler = (handler) => {
    return async (req, res, next) => {
        try{
            const result = await handler(req, res, next);
            res.send(exports.getResult(result));
        } catch (err) {
            next(err)
        }
    }
}