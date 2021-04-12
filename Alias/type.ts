//type.ts

type Person = {
    name: string,
    age?: number
}

const person = {} as Person;
person.name = 'Joseph';
person.age = 20;

type Str = 'Joseph';
type Union = string | null;
type Name = 'Joseph' | 'Park';
type Num = 1 | 2 | 3 | 4 | 5;
type Obj = {a: 1} | {b: 2};
type Func = (() => string) | (() => void);
type Shape = Square | Rectangle | Circle;
type Tuple = [string, boolean];
