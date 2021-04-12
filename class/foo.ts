// foo.ts
class Foo {
    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
        // All public, protected, and private access modifiers can be referenced inside the class.
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const foo = new Foo('x', 'y', 'z');

// The public access modifier can be referenced from outside the class through the class instance.
console.log(foo.x);

// The protected access modifier cannot be referenced outside the class through a class instance.
// console.log(foo.y); -> error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

// The private access modifier cannot be referenced outside the class through the class instance.
// console.log(foo.z); -> error TS2341: Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
    constructor(x: string, y: string, z: string) {
        super(x, y, z);

        //The public access limiter can be referenced inside the child class.
        console.log(this.x);

        //The protected access limiter can be referenced inside the child class.
        console.log(this.y);

        //Private access modifiers cannot be referenced inside child classes.
        //console.log(this.z); ->error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
}
