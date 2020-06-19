const express = require('express')
const router = express.Router()
const adminServ = require('../../services/adminServices')
const {asyncHandler} = require('../getSendResult')

router.post('/login', asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
        //登录成功
        res.header("set-cookie", `token=${result.id};path=/; domain=127.0.0.1; max-age=3600;`)
    }
    return result;
}))
router.post('/', asyncHandler(async (req, res) => {
    const result = await adminServ.addAdmin({loginId:req.body.loginId, loginPwd:req.body.loginPwd})
    return result
}))
router.get('/:id', asyncHandler(async (req, res) => {
    // console.log(req.params.id)
    const result = await adminServ.getAdminById(req.params.id)
    return result
}))

module.exports = router