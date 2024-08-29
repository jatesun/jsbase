let conllection = ['foo', 'bar', 'baz']
//begin
for (let i = 0; i < conllection.length; i++) {
    // console.log(conllection[i]);
}
//second
// conllection.forEach((item) => console.log(item))

let num = 1;
let obj = {};
console.log(num[Symbol.iterator]);
let str = 'abc';
// let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
// let els = document.querySelectorAll('div');
// console.log(str[Symbol.iterator]);
let arr = ['foo', 'bar', 'baz'];
//迭代可使用next方法
// let iter = arr[Symbol.iterator];
let iter = arr[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next());

//生成器。生成器函数在调用时不会立即执行，而是返回一个生成器对象
// function* generatorFn() {
//     console.log('foobar');
// }
//
// let generatorObject = generatorFn();
// generatorObject.next()

function* generatorFn() {
    yield 'foo';
    yield 'bar';
    return 'baz';
}

