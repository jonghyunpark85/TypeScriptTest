// IPerson2.ts

interface IPerson {
    name: string;
}

function sayHello(person: IPerson): void {
    console.log(`Hello ${person.name}`);
}

const me = { name: 'Joseph', age: 18 };
sayHello(me); // Hello Joseph
