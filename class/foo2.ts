//foo2.ts
class Foo {
    /*
    The constructor parameter x in which the access modifier is declared is declared as a class property and initialized automatically.
    Since public is declared, x can be referenced outside the class.
    */
    constructor(public x: string) { }
}

const foo = new Foo('Hello');
console.log(foo);   // Foo { x: 'Hello' }
console.log(foo.x); // Hello

class Bar {
    /*
    The constructor parameter x in which the access modifier is declared is declared as a member variable and automatically initialized.
    Since private is declared, x can only be referenced inside the class.
    */
    constructor(private x: string) { }
}

const bar = new Bar('Hello');

console.log(bar); // Bar { x: 'Hello' }

// bar.x declared private can only be referenced inside the class
// console.log(bar.x); -> Property 'x' is private and only accessible within class 'Bar'.
