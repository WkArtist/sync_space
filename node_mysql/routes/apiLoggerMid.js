const {apiLogger} = require("../logger");
const log4js = require("log4js")

//手动写
// module.exports = (req, res, next) => {
//     next()
//     apiLogger.debug(`${req.method} ${req.path} ${req.ip}`)
// }

//log4js为express提供的中间件
module.exports = log4js.connectLogger(apiLogger, {
    level: 'auto'
})