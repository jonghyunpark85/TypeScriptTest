// casting.ts
var $input = document.querySelector('input["type="text"]');
// => $input: Element | null
var val = $input.value;
// TS2339: Property 'value' does not exist on type 'Element'.
var $input = document.querySelector('input["type="text"]');
var val = $input.value;
var $input = document.querySelector('input["type="text"]');
var val = $input.value;
