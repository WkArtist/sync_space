const Admin = require('../models/Admin');
exports.addAdmin = async function (adminObj) {
    // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
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
    Admin.update(adminObj, {
        where: {
            id: adminId
        }
    })
}