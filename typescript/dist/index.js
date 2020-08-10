class User {
    constructor(name, age) {
        this.gender = "男";
        this.publishNumber = 3;
        this.id = Math.random();
        this.name = name;
        this.age = age;
    }
}
const u = new User("aa", 2);
u.gender = "女";
console.log(u.id);
