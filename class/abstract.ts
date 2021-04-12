//abstract.ts
abstract class Animal {
    // abstract method
    abstract makeSound(): void;
    // normal method
    move(): void {
        console.log('roaming the earth...');
    }
}

// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.

class Dog extends Animal {
    // A class that inherits an abstract class must implement the abstract method of the abstract class.
    makeSound() {
        console.log('bowwow~~');
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
