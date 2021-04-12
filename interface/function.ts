// function.ts

interface SquareFunc {
    (num: number): number;
}

// Functions implementing the function interface must comply with the interface.
const squareFunc: SquareFunc = function (num: number) {
    return num * num;
}

console.log(squareFunc(10)); // 100
