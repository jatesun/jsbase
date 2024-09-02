let num = function (num1, num2) {
    return num1 + num2;
}

let num1 = (num1, num2) => {
    return num1 + num2;
}

console.log(num1(1, 2));

let ints = [1, 2, 3]
console.log(ints.map(function (x) {
    return x + 1;
}));
console.log(ints.map((i) => {
        return i + 1
    }
))

//js没有重载，因为函数的参数是包括0或多个参数
let values = [1, 2, 3, 4]

function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}

console.log(getSum(...values));

//10.7
function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

function add10(num) {
    return num + 10;
}

let result1 = callSomeFunction(add10, 10);
console.log(result1); // 20