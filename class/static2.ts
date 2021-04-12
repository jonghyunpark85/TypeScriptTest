//static2.ts

class Foo {
    // Number of instances created
    static instanceCounter = 0;
    constructor() {
        // Each time the constructor is called, it increments the counter by 1.
        Foo.instanceCounter++;
    }
}

var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);  // 2
//console.log(foo2.instanceCounter); -> error TS2339: Property 'instanceCounter' does not exist on type 'Foo'.
