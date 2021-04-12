//IDuck.ts

interface IDuck { // 1
    quack(): void;
}

class MallardDuck implements IDuck { // 3
    quack() {
        console.log('Quack!');
    }
}

class RedheadDuck { // 4
    quack() {
        console.log('q~uack!');
    }
}

function makeNoise(duck: IDuck): void { // 2
    duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
