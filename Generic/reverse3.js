//reverse3.ts
function reverse(items) {
    return items.reverse();
}
var arg = [{ name: 'Joseph' }, { name: 'Joe' }];
// The type parameter is determined by the argument.
var reversed = reverse(arg);
console.log(reversed);
