const Admin = require('../models/Admin');
const md5 = require('md5')
exports.addAdmin = async function (adminObj) {
    // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
    adminObj.loginPwd = md5(adminObj.loginPwd)
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}

exports.deleteAdmin = async function (adminId) {
    //方式1
    //1. 得到实例
    //const ins = await Admin.findByPk(adminId);
    //2. 删除实例
    //if (ins) await ins.destroy();
    
    //方式2
    await Admin.destroy({
        where: {
            id: adminId
        }
    })
}

exports.updateAdmin = async function (adminId, adminObj) {
    //方式1
    // const ins = await Admin.findByPk(adminId);
    // ins.loginId = adminObj.loginId;
    // ins.save();
    //方式2
    if (adminObj.loginPwd) {
        adminObj.loginPwd = md5(adminObj.loginPwd)
    }
    Admin.update(adminObj, {
        where: {
            id: adminId
        }
    })
}

exports.login = async function (loginId, loginPwd) {
    loginPwd = md5(loginPwd)
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd,
        }
    })
    if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
        return result.toJSON();
    }
    return null;
}

exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null
}

exports.getAdmins = async function () {
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result));
  };
  