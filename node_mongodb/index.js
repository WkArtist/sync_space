const {User} = require('./models');
const userSchema = require('./models/addressSchema');
const Operation = require('./models/Operation');

async function test() {
    // const result = await User.findById('5ed093872e3da2b654983476', {
    //     name: 1,
    //     age: 1
    // });
    // const result = await User.findOne({
    //     age: {
    //         $gt: 20
    //     }
    // })
    // const result = await User.find({
    //     age: {
    //         $gt: 30
    //     }
    // },{name: 1,age: 1}).skip(4*10).limit(10).sort({
    //     age: 1
    // }).countDocuments()
    // const result = await Operation.find().limit(1).populate("userid","age")

    // console.log(result)
}
test(); 