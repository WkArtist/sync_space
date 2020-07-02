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

    const user1 = await User.findById("5ed093872e3da2b654983478");
    const user2 = await User.findById("5ed093872e3da2b654983478");
    user1.name = "wk3";
    user1.loginId ="wk3";
    await user1.save();

    user2.name = "wk4";
    user2.loginId = "wk4";
    await user2.save();

    console.log(user1, user2)
}
test(); 