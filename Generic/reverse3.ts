//reverse3.ts

function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const arg = [{ name: 'Joseph' }, { name: 'Joe' }];
// The type parameter is determined by the argument.
const reversed = reverse(arg);
console.log(reversed);
