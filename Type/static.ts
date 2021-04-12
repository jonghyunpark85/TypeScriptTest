// static.ts

var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = "Hi there";
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean

let hoo: string,
    bar: number,
    baz: boolean;

hoo = 'Hello';
bar = 123;
//baz = 'true'; -> error: Type '"true"' is not assignable to type 'boolean'.

function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10, 10)); // 20
//console.log(add('10', '10')); -> error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'.
