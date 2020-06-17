

require('./init')
// const adminServ = require('./services/adminServices');
// const moment = require('moment')
const studentServ = require('./services/StudentServices');
// require('./models/relation');
studentServ.getStudents().then((r) => {
    console.log(r)
})
// studentServ.addStudent({
//     name: 'wk',
//     birthday: '2010-3-5',
//     sex: true,
//     mobile: '18734343434',
//     ClassId: 12,
// })
// adminServ.addAdmin({
//     loginId: 'dfsdfdsaf',
//     loginPwd: '123456',
//     name: 'dfsdsfd'
// });

// adminServ.updateAdmin(6,{
//     loginPwd: '12345',
// })
// adminServ.login('df','12345').then((res) => {
//     console.log(res)
// })
// console.log(moment.utc(1592379694955))


// adminServ.deleteAdmin(2)
// adminServ.updateAdmin(3, {
//     loginId: 'wwwwwwwww'
// })
// require('./models/sync');
// require('./models/relation');
// require('./mock/mockStudent');
// require('./mock/mockClass');

// adminServ.login("abc", "abc").then((r) => {
//     console.log(r);
// })

// adminServ.getAdminById(3).then((r) => {
//     console.log(r)
// })

// studentServ.getStudents(1,10,true,'魏霞').then((r) => {
//     console.log(r)
// })