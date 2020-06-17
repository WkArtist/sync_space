const Sequelize = require('sequelize');
const {sqlLogger} = require('../logger')
//方法1:单独传递参数
const sequelize = new Sequelize('myschooldb', 'root', '159292', {
  host: 'localhost',
  dialect: 'mysql',
  logging: (msg) => {
    sqlLogger.debug(msg)
  }
});

module.exports = sequelize;