console.log("first function------------------------------------");
function sayHello(name, age) {
    // console.log("Hello!", name, "you have", age, "years of age");
    // console.log(`hello! ${name} you have ${age} years of age`);
    return (`hello! ${name} you have ${age} years of age`);
}

// sayHello("changyong", 25);
const greetChangyong = sayHello("changyong", 25)

console.log(greetChangyong)

console.log("calculator------------------------------------");
const calculator = {
    plus: function(a, b) {
        return a + b;
    },

    minus: function(a ,b) {
        return a- b;
    },

    mul: function(a, b) {
        return a * b;
    },

    div: function(a, b) {
        return a / b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);

const minus = calculator.minus(5, 5);
console.log(minus);

const mul = calculator.mul(5, 5);
console.log(mul);

const div = calculator.div(5, 5);
console.log(div);