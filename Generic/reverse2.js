//reverse2.ts
function reverse(items) {
    return items.reverse();
}
var arg = [1, 2, 3, 4, 5];
// The type parameter is determined by the argument.
var reversed = reverse(arg);
console.log(reversed); // [ 5, 4, 3, 2, 1 ]
