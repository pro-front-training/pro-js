// 数字
// 严格模式下使用八进制数会导致引擎抛出异常，

var message1 = 55; // 整数

// 八进制数使用0开头
var message2 = 070; // 八进制070
console.log(message2) // 输出为十进制56

// 无效的八进制会自动忽略掉前导0, 编程十进制
var message3 = 078 // 直接解析为十进制数78
console.log(message3)

// 十六进制以0x开头，ABCDE不区分大小写
var message4 = 0xA0
console.log(message4) // 输出为十进制160

// 在进行数值计算时，八进制和十六进制都会转换为十进制

// js可以保存+0 和 -0，且 -0 等于 + 0
var message7 = +0
var message8 = -0
console.log(message7 === message8)

// 浮点数
var message9 = 10.01

// 科学计数法的E不区分大小写
var message10 = 3.14e10 // 表示 3.14 * 10的10次方
console.log(message10)

var message11 = 3.14e-10 // 表示 3.14 * 10 的 -10 次方
console.log(message11)

// 浮点数的最高精度为17位小数，但在进行数值计算时，精度会大幅降低
var message12 = 0.1 + 0.2
console.log(message12) // 输出为0.30000000000000004

//数值范围
console.log(Number.MIN_VALUE) // 最小值，输出为5e-324
console.log(Number.MAX_VALUE) // 最大值，输出为1.7976931348623157e+308

// 如果数值处于最大最小值之间，则isFinite返回true
var message13 = 1
console.log(isFinite(message13))

// 如果某次计算超出了数值范围，就会得到-Infinity(负无穷) 或者 Infinity(正无穷)
var message14 = 10 / 0 // Infinity
console.log(message14)

var message15 = -10 / 0 // -Infinity
console.log(message15)

// Infinity + -Infinity 得到 NaN
var message16 = message14 + message15
console.log(message16)

// NaN 与任何数值做任何计算都会得到NaN
console.log(message16 + 1)

// NaN 不等于任何数值，甚至 NaN 不等于 NaN
console.log(message16 === message16)





