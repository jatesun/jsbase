// let person = new Object();
// person.name = "Nicholas";
// person.age = 29;
// person.job = "Software Engineer";
// person.sayName = function () {
//     console.log(this.name);
// };



// 第二种
let person = {
    name: "Nicholas",
    age: 30,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
}
person.sayName()