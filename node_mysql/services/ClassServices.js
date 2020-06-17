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

exports.getClassById = async function (id) {
    const result = await Class.findByPk(id);
    if (result) {
      return result.toJSON();
    }
    return null;
  };
  
  exports.getClasses = async function () {
    const result = await Class.findAll();
    return JSON.parse(JSON.stringify(result));
  };