//Person.ts

interface Person {
    name: string,
    age?: number
}

// Assign an empty object to the Person type
const person = {} as Person;
person.name = 'Joseph';
person.age = 20;
//person.address = 'Seoul'; -> Error
