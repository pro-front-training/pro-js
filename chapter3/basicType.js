"use strict"

// 基本数据类型
var message1
console.log(typeof message1) // undefined

var message2 = true
console.log(typeof message2) // boolean

var message3 = "hello"
console.log(typeof message3) // string

var message4 = 10
console.log(typeof message4) // number

var message5 = {
    "name": "jiangyu",
    'age': 22
}
console.log(typeof message5) // object

var message6 = function(a, b) {
    return a + b
}
console.log(typeof message6) // function

// 注意，null也是object
var message7 = null
console.log(typeof message7) // object