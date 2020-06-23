const log4js = require('log4js')
const path = require('path')

function getCommonAppender(pathSeg) {
    return {
        type: 'dateFile',
        filename: path.resolve(__dirname, "logs", pathSeg, "logging.log"),
        maxLogSize: 1024*1024,
        keepFileExt: true,
        daysToKeep: 3,
    }
}

log4js.configure({
    appenders: {
        sql: getCommonAppender('sql'),
        default: {
            type: 'stdout',
            filename: path.resolve(__dirname, "logs", "default", "logging.log")
        },
        api: getCommonAppender('api')
    },
    categories: {
        sql: {
            appenders: ["sql"],
            level: "all"
        },
        default: {
            appenders: ["default"],
            level: "all"
        },
        api: {
            appenders: ["api"],
            level: "all"
        }
    }
})

process.on('exit', () => {
    log4js.shutdown();
})

exports.logger = log4js.getLogger();
exports.sqlLogger = log4js.getLogger("sql");
exports.apiLogger = log4js.getLogger("api");
