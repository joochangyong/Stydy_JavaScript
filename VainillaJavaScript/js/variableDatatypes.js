// let : 변수를 초기화 하거나 생성할때 사용, 값을 바꿀 수 있음
console.log("let------------------------------------");
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
console.log('b =' +  b, 'a =' + a);
console.log(`b = ${b} a = ${a}`);


//const : let와 마찬가지로 변수를 초기화 하거나 생성할때 사용, 단 값을 바꿀 수 없음!
console.log("const------------------------------------");
const c = 221;
const d = c - 5;
console.log(`d = ${d} c = ${c}`);


// String
console.log("String------------------------------------");
const String = "changyong";
console.log(String);


// Boolean
console.log("Boolean------------------------------------");
const Boolean = false;
console.log(Boolean);

// Number
console.log("Number------------------------------------");
const Number = 6666;
console.log(Number);

// float
console.log("float------------------------------------");
const float = 55.1;
console.log(float);

// Array
console.log("Array------------------------------------");
const something = "something"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, something];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);


// Object
console.log("Object------------------------------------");
const userInfo = {
    name: "changyong",
    age: 25,
    gender: "Male",
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name: "Kimchi", fatty: false
        }, 
        {
            name: "Cheese buger", fatty: true
        }
        ]
    };

console.log(userInfo);
console.log(userInfo.age);
userInfo.age=26;
console.log(userInfo.age);
console.log(userInfo.name +" is "+ userInfo.age);
