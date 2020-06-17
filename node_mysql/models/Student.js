const sequelize = require("./db")
const { DataTypes } = require('sequelize');
const moment = require('moment')

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        get() { //访问器
            return this.getDataValue("birthday").getTime()
        }
    },
    age: {
        type: DataTypes.VIRTUAL,
        get() {
            const now = moment.utc();
            const birth = moment.utc(this.birthday)
            return now.diff(birth, 'y');
        }
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
})

module.exports = Student;