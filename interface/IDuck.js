//IDuck.ts
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log('Quack!');
    };
    return MallardDuck;
}());
var RedheadDuck = /** @class */ (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.quack = function () {
        console.log('q~uack!');
    };
    return RedheadDuck;
}());
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
