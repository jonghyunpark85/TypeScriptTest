"use strict";
// student.ts
Object.defineProperty(exports, "__esModule", { value: true });
const greeting_1 = require("./greeting");
class Student extends greeting_1.Greeting {
    study() {
        return `${this.name} is studying.`;
    }
}
const student = new Student('Joseph');
console.log(student.sayHello());
console.log(student.study());
