//Person.ts

class Person {
    constructor(public name: string, public age: number) {}
}

interface Developer extends Person {
    skills: string[];
}

const developer: Developer =  {
    name: 'Joseph',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
}
