//foo3.ts

class Foo {
    // x is a local variable that is only valid inside the constructor.
    constructor(x: string) {
        console.log(x);
    }
}

const foo = new Foo('Hello');
console.log(foo); // Foo {}
