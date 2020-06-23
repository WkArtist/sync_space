// 处理错误的中间件
const sendMsg = require('./getSendResult')
const multer = require("multer")

module.exports = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(200).send(sendMsg.getErr(err.message));
            return;
        }
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