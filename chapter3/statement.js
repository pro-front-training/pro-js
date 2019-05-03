// ECMAScript没有块级作用域，因此循环内部定义的变量可以在外部访问到:
for (var i = 0; i < 10; i ++) {
    // console.log(i)
}
// console.log(i)

// for in
for (var property in window) {
    // console.log(property)
}

// switch case 会使用 === 比较数值

// ECMAScript 的函数没有形参的概念. 即便定义函数时指定了2个参数，实际调用时也可以传0个或者多个参数
function add() {
    return arguments[0] + arguments[1]
}
console.log(add()) // NaN
console.log(add(1)) // NaN
console.log(add(1, 2)) // 3
