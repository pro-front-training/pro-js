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

// 逻辑值为true的值: 对象, 非空字符串, 非0数值(包括Infinity)
// 逻辑值为false的值: 空字符串, 0, null, undefined, NaN

/**
 * 逻辑与 && 操作在两个操作数都是布尔值时, 返回布尔值. 如果有一个不是布尔值, 则遵循如下规则
 * 下面定义第一个操作数为A，第二个操作数为B
 * 如果A是对象，则返回B
 * 如果B是对象，则只有在A的结果为 true 时，返回B
 * 如果A，B都是对象, 则返回B
 * 如果有一个操作数是 null, 则返回 null
 * 如果有一个操作数是 NaN, 则返回NaN
 * 如果有一个操作数是 undefined, 则返回 undefined
 */