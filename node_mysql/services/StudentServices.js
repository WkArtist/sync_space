const Student = require('../models/Student');
const {Op} = require('sequelize');
const Class = require('../models/Class');
const validate = require('validate.js')
const moment = require('moment')
const {pick} = require('../util/propertyHelper')

exports.addStudent = async function (studentObj) {
    //只保留所需的数据
    studentObj = pick(studentObj, "name","birthday","sex","mobile","ClassId")
    //自定义验证规则
    validate.validators.classExits = async function (value) {
        const c = await Class.findByPk(value)
        if (c) {
            return;
        }
        return "is not exist"
    }
    //验证规则配置
    const rule = {
        name: {
            presence: {
                allowEmpty: false
            },
            type: 'string',
            length: {
                minimum: 1,
                maximun: 10
            }
        },
        birthday: {
            presence: {
                allowEmpty: false
            },
            datetime: {
                dateOnly: true,
                earliest: +moment.utc().subtract(100, 'y'),
                latest: +moment.utc().subtract(5, 'y')
            }
        },
        sex: {
            presence: true,
            type: "boolean"
        },
        mobile: {
            presence: {
                allowEmpty: false
            },
            format: /1\d{10}/
        },
        ClassId: {
            presence: true,
            numericality: {
                onlyInteger: true,
                strict: false,
            },
            classExits: true,
        }
    }
    await validate.async(studentObj, rule)
    const ins = await Student.create(studentObj);
    return ins.toJSON();
}

exports.deleteStudent = async function (studentId) {
    await Student.destroy ({
        where: {
            id: studentId
        }
    })
}

exports.updateStudent = async function (studentId, studentObj) {
    Student.update(studentObj, {
        where: {
            id: studentId
        }
    })
}

exports.getStudentById = async function (id) {
    const result = await Student.findByPk(id);
    if (result) {
        return result.toJSON();
    } else {
        return null;
    }
}

exports.getStudents = async function (page = 1,limit = 10,sex=-1,name) {
    const condition = {}
    if (sex !== -1) {
        condition.sex = !!sex;
    }
    if (name) {
        condition.name = {
            [Op.like]: `%${name}%`
        }
    }
    // const results = await Student.findAll({
    //     offset: (page - 1) * limit,
    //     limit: +limit
    // })
    // const total = await Student.count()
    // const datas = JSON.parse(JSON.stringify(results))
    // return {
    //     total,
    //     datas
    // }
    const result = await Student.findAndCountAll({
        attributes: ["id", "name", "sex", "birthday", "age"],
        where: condition,
        include: [Class],
        offset: (page - 1) * limit,
        limit: +limit
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    };
}