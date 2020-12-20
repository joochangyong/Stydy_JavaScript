// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("2---------------------");
// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

console.log("3---------------------");
// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// // counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

console.log("4---------------------");
// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

console.log("5---------------------");
// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

console.log("6---------------------");
// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somthing
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting itme
        console.log('으악');
    }
    return true;
}

// !(not)
console.log(!value1);

console.log("7---------------------");
// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion, 타입을 신경안씀 둘다 숫자 5로 받아들임.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion, 타입을 신경씀
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const changyong1 = { neme: 'changyong'};
const changyong2 = { neme: 'changyong'};
const changyong3 = changyong1;
console.log(changyong1 == changyong2);
console.log(changyong1 === changyong2);
console.log(changyong1 === changyong3);

// equality - puzzler
console.log(0 == false); // 
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log("8---------------------");
// 8. Conditional operators: if
// if, else if, else
const name = 'changyong';
if (name === 'changyong') {
  console.log('Welcome, changyong!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

console.log("9---------------------");
// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'changyong' ? 'yes' : 'no');

console.log("10--------------------");
// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

console.log("11--------------------");
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
console.log("while-----------------");
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
console.log("do-while--------------");
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

console.log("for-------------------");
// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

console.log("quiz------------------");
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i < 11; i++) {
    if(i % 2 != 0) {
        continue;
        // console.log(`q1.`, i); 여기 들어가도 됨.
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}