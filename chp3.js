console.log(`\u00A9`)
console.log(String.raw`\u00A9`)
// 3.4.7
//全局符号注册
let fooGlobalSymbol = Symbol.for('foo'); // 创建新符号
let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true
// 还可以使用 Symbol.keyFor()来查询全局注册表
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s)); // foo
// 创建普通符号
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2)); // undefined
class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }

    async* [Symbol.asyncIterator]() {
        while (this.asyncIdx < this.max) {
            yield new Promise((resolve) => resolve(this.asyncIdx++));
        }
    }
}

async function asyncCount() {
    let emitter = new Emitter(5);
    for await(const x of emitter) {
        console.log(x);
    }
}

// asyncCount();

function Foo() {
}

let f = new Foo();
console.log(f instanceof Foo); // true

let old = 2;
let cur = old >> 5;
console.log(cur)