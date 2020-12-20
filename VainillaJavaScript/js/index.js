// let : 변수를 초기화 하거나 생성할때 사용, 값을 바꿀 수 있음
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
console.log('b =' +  b, 'a =' + a);
console.log(`b = ${b} a = ${a}`);

// const : let와 마찬가지로 변수를 초기화 하거나 생성할때 사용, 단 값을 바꿀 수 없음!
const c = 221;
const d = c - 5;

console.log(`d = ${d} c = ${c}`);