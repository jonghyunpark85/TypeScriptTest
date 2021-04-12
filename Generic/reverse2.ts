//reverse2.ts

function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const arg = [1, 2, 3, 4, 5];
// The type parameter is determined by the argument.
const reversed = reverse(arg);
console.log(reversed); // [ 5, 4, 3, 2, 1 ]
