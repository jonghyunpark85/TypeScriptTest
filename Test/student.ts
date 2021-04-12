// student.ts

import {Greeting} from './greeting';

class Student extends Greeting {
    study(): string {
        return `${this.name} is studying.`;
    }
}

const student = new Student('Joseph');

console.log(student.sayHello());
console.log(student.study());

