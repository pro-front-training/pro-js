// boolean 类型只有true 和false， 其余True, False 都不是

// 任何变量都可以强制转换为boolean值
var message = "hello, world!"
console.log(Boolean(message)) // 非空字符串为true

var message2 = ""
console.log(Boolean(message2)) // 空字符串为false

var message3 = 1
console.log(Boolean(message3)) // 任何非0数字(包括无穷大)为true

var message4 = 0
console.log(Boolean(message4)) // 0 和NaN是false

var message5 = NaN
console.log(Boolean(message5)) // false

var message6 = {
    "name": "jiangyu",
    "age": 24
}
console.log(Boolean(message6)) // object 为true

var message7 = null
console.log(Boolean(message7)) // null 为false

var message9 = undefined
console.log(Boolean(message9)) // undefined 为 false

// if 操作符会自动进行转换
if (message6) {
    console.log(message6.name)
}
