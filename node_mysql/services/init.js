//业务逻辑层的初始化操作
const validate = require('validate.js')
const moment = require('moment')
validate.extend(validate.validators.datetime, {
    /**
     * 该函数会自动用于日期格式转换
     * 他会在验证时自动触发，它需要将任何数据转换为时间戳返回
     * 如果无法转换，返回NaN
     * @param {*} value 传入要验证的值
     * @param {*} options 验证配置
     */
    parse: function(value, options) {
        let formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"];
        if (options.dateOnly) {
            formats = ["YYYY-MM-DD", "YYYY-M-D", "x"];
        }
        return +moment.utc(value, formats, true)
    },
    /**
     * 用户显示错误消息时，使用的显示字符串
     * @param {*} value 
     * @param {*} options 
     */
    format: function(value, options) {
        let format = "YYYY-MM-DD";
        if (!options.dateOnly) {
            format += "HH:mm:ss"
        }
        return moment.utc(value).format(format)
    }
})