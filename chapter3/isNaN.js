//isNaN会先将变量转换为数字，如果不能转换，则返回true

console.log(isNaN(10)) // 10是数字，返回false

var message1 = "10"
console.log(isNaN(message1)) // 字符串10 可以转换成数字10，返回false

var message2 = true
console.log(isNaN(message2)) // boolean值true能转换成1，返回false

var message3 = false
console.log(isNaN(message3)) // boolean值false能转换成0, 返回false

console.log(isNaN(NaN)) //true

var message4 = "blue"
console.log(isNaN(message4)) // 字符串 blue 不能转换成数字，返回true
