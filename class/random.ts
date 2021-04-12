//random.ts

class Foo {
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;

    constructor() {
        this.MSG = 'hello';
    }

    log() {
        // Properties declared readonly are prohibited from reassignment.
        this.MAX_LEN = 10; // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        this.MSG = 'Hi'; // Cannot assign to 'MSG' because it is a constant or a read-only property.

        console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
        console.log(`MSG: ${this.MSG}`); // MSG: hello
    }
}

new Foo().log();
