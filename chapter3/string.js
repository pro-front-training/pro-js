// 字符串
var text = "he's a pirate";
// console.log(text.length)

// 任何值都可以调用 toString() 转换为字符串, null 和 undefined 没有 toString() 方法
var message1 = 11
var message2 = message1.toString() // 字符串"11"

var message3 = true
var message4 = message3.toString() // 字符串 "true"

// 数字在调用toString()时，还可以传入一个参数，表示要转换的进制
var message5 = 10
var message6 = message5.toString() // "10"
var message7 = message5.toString(2) // "1010"
var message8 = message5.toString(8) // "12"
var message9 = message5.toString(16) // a

// 如果字符串的值为 null 或者 undefined, 则调用 toString() 方法会抛出错误

/**
 * 在不知道值是不是null 或者 undefined 的情况下，可以使用String转换
 * 如果该值有 toString() 方法，则调用 toString()
 * 如果该值为 undefined, 则返回 "undefined"
 * 如果该值为 null, 则返回 "null"
 */

var message10
var message11 = String(message10) // "undefined"

message10 = null
message11 = String(message10) // "null"

// console.log(message11)