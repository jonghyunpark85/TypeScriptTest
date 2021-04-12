// person.ts

class Person {
    // Class properties must be declared in advance
    name: string;

    constructor(name: string) {
        // Assign a value to the number of class properties
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

const person = new Person('Joseph');
person.walk(); // Joseph is walking
