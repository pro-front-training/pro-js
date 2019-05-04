// 函数，实际上是对象，每个函数都是 Function 的实例，具备属性和方法
// 函数名其实就是一个指针，不会与某个函数绑定.
function sum1(num1, num2) {
    return num1 + num2
}

// 等同于
var sum2 = function (num1, num2) {
    return num1 + num2
}

// 函数名本身就是变量，因此可以将函数名作为参数传递到别的函数中去
var sum3 = function (num1, num2, func) {
    return func(num1, num2)
}
var message1 = sum3(1, 2, sum2) // 3
// console.log(message1)

// 函数属性 this, arguments
// 计算阶乘
function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * arguments.callee(num - 1)
    }
}
var message2 = factorial(5) // 120
// 严格模式下, arguments.callee会报错

// 函数属性length表示函数接收的参数个数:
var message3 = factorial.length // 1

// 函数属性 prototype 是最重要的属性，函数的所有方法都保存在 prototype 属性下

// call 和 apply, bind 就不记录了
console.log(message3)