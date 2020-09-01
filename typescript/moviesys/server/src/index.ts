import "reflect-metadata"
import { Movie } from "./entities/Movie"
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

const m: any = {};
m.name = 'wk';
m.types = ["戏剧"];
m.areas = ["中国大陆"];
m.isClassic = true;
m.timeLong = 2;

const movie = plainToClass(Movie, m as object);
console.log(movie)
// validate(m).then(errors => {
//     console.log(errors)
// })