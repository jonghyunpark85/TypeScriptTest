//extends.ts

interface Person {
    name: string;
    age?: number;
}

interface Student extends Person {
    grade: number;
}

const student: Student =  {
    name: 'Joseph',
    age: 20,
    grade: 3
}
