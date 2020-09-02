import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";

interface IMovie extends Movie,Mongoose.Document {}

const movieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    areas: [String],
    types: [String],
    timeLong: Number,
    isHot: Boolean,
    isComing: Boolean,
    isClassic: Boolean,
    desription: String,
    poster: String
},{
    versionKey: false
})

export default Mongoose.model<IMovie>("Movie",movieSchema)