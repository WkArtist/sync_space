import Mongoose from "mongoose"
import Movie from "./MovieSchema"
Mongoose.connect("mongoodb://localhost:27017/moviedb", {
    useNewUrlParser: true
}).then(() => {
    console.log("连接数据库成功")
})

export {Movie as MovieModel};