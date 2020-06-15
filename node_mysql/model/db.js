const Sequelize = require('sequelize');

//方法1:单独传递参数
const sequelize = new Sequelize('myschooldb', 'root', '159292', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;