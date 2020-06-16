const Class = require('../models/Class');

exports.addClass = async function (classObj) {
    const ins = await Class.create(classObj);
    return ins.toJSON();
}

exports.deleteClass = async function (classId) {
    await Class.destroy ({
        where: {
            id: classId
        }
    })
}

exports.updateClass = async function (classId, classObj) {
    Class.update(classObj, {
        where: {
            id: classId
        }
    })
}