//1.定义USer Schema
const mongoose = require('mongoose')
const addressSchema = require("./addressSchema")
const operationTypes = require("./operationTypes")
const operationSchema = new mongoose.Schema({
    operation: {
        type: String,
        required: true,
        enum: operationTypes
    },
    time: {
        type: Date,
        default: Date.now
    },
    userid: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    extraInfo: {
        type: mongoose.Schema.Types.Mixed, //任意类型
    },
    address: {
        type: addressSchema,
        required: true
    }
})

//2.通过User Schema定义模型，最终导出模型
module.exports = mongoose.model('Operation', operationSchema)