const express = require('express')
const router = express.Router()
const adminServ = require('../../services/adminServices')
const {asyncHandler} = require('../getSendResult')
const cryptor = require("../../util/crypt")
const jwt = require("../jwt")
const { async } = require('validate.js')


router.post('/login', asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
        let value = result.id;
        // value = cryptor.encrypt(value.toString());
        //登录成功
        jwt.publish(res, undefined, {id: value});
        //使用session控制登录
        //req.session.loginUser = result;
        //使用cookie控制登录
        // res.cookie("token", value, {
        //     path: '/',
        //     domain: '127.0.0.1',
        //     maxAge: 7*24*3600*1000, //毫秒数
        // });
        // res.header("authorization", value);
        // // res.header("set-cookie", `token=${result.id};path=/; domain=127.0.0.1; max-age=3600;`)
    }
    return result;
}))

router.get("/whoami", asyncHandler(async (req, res) => {
    const result = await adminServ.getAdminById(req.userId)
    return result
}))

// router.post('/', asyncHandler(async (req, res) => {
//     const result = await adminServ.addAdmin({loginId:req.body.loginId, loginPwd:req.body.loginPwd})
//     return result
// }))
// router.get('/:id', asyncHandler(async (req, res) => {
//     // console.log(req.params.id)
//     const result = await adminServ.getAdminById(req.params.id)
//     return result
// }))

module.exports = router