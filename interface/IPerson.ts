//IPerson.ts

interface IPerson {
    name: string;
    sayHello(): void;
}

/*
The class implementing the interface must implement the properties and abstract methods defined in the interface.
*/
class Person implements IPerson {
    // Implementation of the properties defined in the interface
    constructor(public name: string) {}

    // Implementation of abstract method defined in interface
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

function greeter(person: IPerson): void {
    person.sayHello();
}

const me = new Person('Joseph');
greeter(me); // Hello Joseph
