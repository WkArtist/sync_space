//1.定义USer Schema
const mongoose = require('mongoose')
const addressSchema = require("./addressSchema")
const userSchema = new mongoose.Schema({
    //Schema的配置
    loginId: {
        type: String, //类型是字符串
        required: true, //必填
        trim: true,
        minlength: 3,
        maxlength: 18,
        index: true, //将该字段设置为索引
        unique: true, //特殊索引，唯一索引
    },
    loginPwd: {
        type: String,
        required: true,
        trim: true,
        select: false, //默认情况下，查询用户时不会查询该字段
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 10,
    },
    age: {
        type: Number,
        default: 18
    },
    loves: {
        type: [String],//类型是一个字符串数组
        required: true,
        default: [], //默认为一个空数组
    },
    address: {
        type: addressSchema,
        required: true
    }
})

//2.通过User Schema定义模型，最终导出模型
module.exports = mongoose.model('User', userSchema)