// 处理错误的中间件
const sendMsg = require('./getSendResult')


module.exports = (err, req, res, next) => {
    if (err) {
        const errObj = {
            msg: err instanceof Error ? err.message:err,
            code: 500,
        }
        //发生了错误
        res.status(500).send(sendMsg.getErr(...Object.values(errObj)));
    } else {
        next();
    }
}