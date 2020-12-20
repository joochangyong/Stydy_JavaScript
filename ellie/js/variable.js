// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable. rw(read/write) 읽고 쓰기가 가능
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'changyong';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move delaration from bottom to top)
// has no block scope
// var은 값을 할당후 선언해도 출력됨. 위험부담이 큼 그래서 let가 나옴.
console.log(age);
{
    age = 4;
    var age;
    console.log(age);
}
console.log(age);

// 3. Constant, r(read only) 읽기만 가능
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen object(i.e. object.frezze())
// Mutable data types: all object by default are mutable in JS
// favor immutable data type always for a few reasons:
// 값 변경이 불가능.
// - 보안상의 이유
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive(값 자체가 메모리에 저장), single item: number, string, boolean, null, undefiedn, symbol
// object(너무 커서 object를 가르키는 레퍼런스가 메모리에 저장), box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof gretting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object, real-life object, data structure
const changyong = { name: 'changyong', age: 25 };
// changyong.age = 26;
console.log(`name: ${changyong.name}, age: ${changyong.age}`);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); => error