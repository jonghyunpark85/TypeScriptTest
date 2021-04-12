// casting.ts

const $input = document.querySelector('input["type="text"]');
// => $input: Element | null

const val = $input.value;
// TS2339: Property 'value' does not exist on type 'Element'.

const $input = document.querySelector('input["type="text"]') as HTMLInputElement;
const val = $input.value;

const $input = <HTMLInputElement>document.querySelector('input["type="text"]');
const val = $input.value;
