class Greeting {
    private name: string

    constructor(name: string) {
        this.name = name;
    }

    sayHello(){
        return "Hello, " + this.name;
    }
}

const greeting = new Greeting('Joseph');

console.log(greeting.sayHello());
