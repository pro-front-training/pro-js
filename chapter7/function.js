// 函数表达式
// 严格模式下无法使用callee, 但可以使用函数表达式
var factorial = (function func(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * func(num - 1)
    }
})

var message1 = factorial(5) // 120

// 函数每次调用时, 会创建一个执行环境(execution context) 以及作用域链,
// 并把作用域链赋值给一个特殊的内部属性[[Scope]]
// 作用域链有一个副作用, 就是闭包中只能取得任何变量的最后一个值, 下面举个栗子:
function func1() {
    var result = new Array()
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i
        }
    }
    return result
}
//

var message2 = func1()

// for (var i = 0; i < message2.length; i++) {
//     console.log(message2[i]())
// }
// func1会创建一个数组, 每个元素是一个匿名函数, 函数会返回数组的索引 i
// 然而实际上, 函数只会返回10, 因为在闭包函数中, 作用域链的最后一个 i 会覆盖前面的所有值, 导致每个函数返回的都是10

// 可以按如下方式改写, 定义一个匿名函数, 并立即执行该匿名函数, 将结果返回给数组
function func2() {
    var result = new Array()

    for (var i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                return num
            }
        }(i)
    }
    return result
}
var message3 = func2()

// for (var i = 0; i < message3.length; i++) {
//     console.log(message3[i]())
// }

// 注意 this 的特殊情况
var name = "Window Object"
var object1 = {
    name: "object1",
    getName: function () {
        return function () {
            return this.name
        }
    }
}

var message4 = object1.getName()() // Window Object
// getName() 会返回一个匿名函数, 该匿名函数会返回 this.name,  结果返回的就是全局(windows)的 name

// 解决办法, 把外部作用域中的this变量保存在一个闭包能够访问到的变量里.
var object2 = {
    name: "object2",
    getName: function () {
        var self = this // 把 this 保存到一个变量中
        return function () {
            return self.name
        }
    }
}
var message5 = object2.getName()() // object2

// JavaScript没有块级作用域, 在语句中定义的变量, 实际上会一直存在于函数的在for循环中定义的计数器,