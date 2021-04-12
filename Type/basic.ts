//basic.ts

//let foo: string = 'hello';
//let bar: number = true; -> error TS2322: Type 'true' is not assignable to type 'number'.

// function declare
function multiply1(x: number, y: number): number {
    return x * y;
}

// function expression
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));

//console.log(multiply1(true, 1)); -> error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.

// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';
let myName: string = `Joseph`;
let greeting: string = `Hello, my name is ${ myName }.`;

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

// tuple
let tuple: [string, number];
tuple = ['hello', 10]; // OK
//tuple = [10, 'hello']; -> Error
//tuple = ['hello', 10, 'world', 100]; -> Error
//tuple.push(true); -> Error

// enum
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3); // 4

/*
any: Used for variables that cannot be type inference or do not need type check.
Like variables declared with the var keyword, any type of value can be assigned.
*/
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// void
function warnUser(): void {
    console.log("This is my warning message");
}

// never
function infiniteLoop(): never {
    while (true) {}
}

function error(message: string): never {
    throw new Error(message);
}

// string
let primiteveStr: string;
primiteveStr = 'hello'; // OK
//primiteveStr = new String('hello'); -> Error

/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/
let objectStr: String;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK

// Date
const today: Date = new Date();

// HTMLElement
const elem: HTMLElement = document.getElementById('myId');

class Person { }
const person: Person = new Person();
