"use strict";
//greeting.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
/*
class Greeting {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return "Hello, " + this.name;
    }
}

const greeting = new Greeting('Joseph');

console.log(greeting.sayHello());
*/
class Greeting {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
exports.Greeting = Greeting;
