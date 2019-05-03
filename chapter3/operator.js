// 操作符
// ++, -- 不仅适用于数值，也使用其他值
/**
 * 如果一个字符串包含有效数字，则先转换为数字，再做自增计算, 最后返回数值变量
 * 如果字符串不包含有效数字，则会返回NaN，不做自增计算
 * 布尔值 false 会先转换为0, true 会先转换为1，再执行自增计算
 * 对象会先调用 valueOf() 方法，如果是NaN，再调用toString() 方法，再进行自增计算
 */
var message1 = "z";
message1 ++; // NaN

var message3 = {
    valueOf: function(){
        return -1
    }
}
message3 ++; // 0
// console.log(message3)

// 整数用32位存储，最高位表示符号位，0 表示正数， 1表示负数
// 正数用原码存储，负数用补码存储(原码 -> 反码 -> 补码)

// 按位非 ~ 的结果是取负 - 1
var message4 = 18
var message5 = ~ message4
// console.log(message5) // -19

var message6 = -18
// console.log(~message6) // 17

// 逻辑值为true的值: 对象, 非空字符串, 非0数值(包括Infinity)
// 逻辑值为false的值: 空字符串, 0, null, undefined, NaN

/**
 * 逻辑与 && 操作在两个操作数都是布尔值时, 返回布尔值. 如果有一个不是布尔值, 则返回结果遵循如下规则
 * 下面定义第一个操作数为A，第二个操作数为B
 * 如果A是对象，则返回B
 * 如果B是对象，则只有在A的结果为 true 时，返回B
 * 如果A，B都是对象, 则返回B
 * 如果有一个操作数是 null, 则返回 null
 * 如果有一个操作数是 NaN, 则返回NaN
 * 如果有一个操作数是 undefined, 则返回 undefined
 */

/**
 * 逻辑或 || 与逻辑与类似，如果有一个操作数不是布尔值，返回结果也不一定是布尔值
 * 如果A是对象，则返回A
 * 如果A的结果是 false，则返回B
 * 如果A，B都是对象，则返回A
 * 如果A，B都是 null，则返回 null
 * 如果A，B都是 undefined, 则返回 undefined
 * 如果A，B都是 NaN, 则返回 NaN
 */

/**
 * 乘法操作的特殊情况:
 * 有一个操作数是NaN, 则结果是NaN
 * Infinity * 0 = NaN
 * Infinity * 正数 = Infinity, Infinity * 负数 = -Infinity
 * Infinity * Infinity = Infinity
 * 如果有一个操作数不是数值，会先调用 Number() 将其转换成数值, 再应用上面的规则
 */

var message7 = NaN + 1 // NaN
var message8 = 10 / 0 // Infinity
message7 = message8 * 0 // NaN
message7 = message8 * 1 // Infinity
message7 = message8 * (-1) // -Infinity
message7 = message8 * message8 // Infinity
// console.log(message7);

/**
 * 除法操作的特殊情况:
 * 一正一负，结果为负
 * 有一个操作数为 NaN, 结果为NaN
 * Infinity / Infinity = NaN
 * 0 / 0 = NaN
 * 正数 / 0 = Infinity, 负数 / 0 = -Infinity
 * Infinity / 正数 = Infinity, Infinity / 负数 = -Infinity
 * 不是数值的操作数，会先调用Number(), 再参与计算
 */

var message9 = 0 / 0 // NaN
var message10 = 1 / 0 // Infinity
var message11 = -1 / 0 // -Infinity
var message12 = message10 / message10 // NaN
var message13 = message10 / 10 // Infinity
var message14 = message10 / (-10) // -Infinity
// console.log(message14)

/*
 * 求模计算的特殊情况:
 * 无穷大 % 有限大 = NaN
 * 有限大 % 0 = NaN
 * 有限大 % Infinity = 被除数
 * Infinity % Infinity = NaN
 * 0 % 任何数 = 0
 * 不是数值的操作数，会先调用Number(), 再参与计算
 */

var message15 = 1 / 0 // Infinity
var message16 = message15 % 10 // NaN
var message17 = 1 % 0 // NaN
var message18 = 1 % message15 // 1
var message19 = message15 / message15 // NaN
var message20 = 0 % 1 // 0
// console.log(message20)

/**
 * 加法操作符的特殊情况:
 * 有一个操作符是NaN, 则结果是NaN
 * Infinity + Infinity = Infinity
 * -Infinity + (-Infinity) = -Infinity
 * Infinity + (-Infinity) = NaN
 * +0 + (+0) = +0
 * -0 + (-0) = -0
 * +0 + (-0) = +0
 * 如果A, B 都是字符串，则进行拼接操作
 * 如果有一个是字符串，则将另一个转换成字符串，进行拼接操作
 * 如果有一个是对象、数值或者布尔值，则调用toString()方法转换成字符串，在应用前面的规则
 * undefined 和 null 会调用 String() 转换为"undefined", "null"
 */
var message21 = 5 + "5" // 字符串"55"
var message22 = 1 / 0 // Infinity
var message23 = message22 + message22 // Infinity
var message24 = -1 / 0 // -Infinity
var message25 = message24 + message24 // -Infinity
var message26 = message22 + message24 // NaN
var message27 = +0 + (+0) // 0
var message28 = -0 + (-0) // -0
var message29 = +0 + (-0) // 0
// console.log(message29)

/**
 * 减法操作的特殊情况:
 * 如果一个操作数是NaN, 则结果是NaN
 * Infinity - Infinity = NaN
 * -Infinity - (-Infinity) = NaN
 * Infinity - (-Infinity) = Infinity
 * -Infinity - Infinity = -Infinity
 * +0 - (+0) = +0
 * +0 - (-0) = +0
 * -0 - (-0) = +0
 * 如果一个操作数是字符串、布尔值、null 或undefined, 则先调用 Number() 将其转换为数值，在应用前面的规则，
 *      如果转换的结果为NaN，则减法的结果为NaN
 * 如果一个操作数是对象，则调用对象的 valueOf() 转换为数值，如果得到的是NaN，则减法的结果为NaN. 如果对象没有
 *      valueOf() 方法，则调用toString()方法.
 */

var message31 = message22 - message22 // NaN
var message32 = message24 - message24 // NaN
var message33 = message22 - message24 // Infinity
var message34 = message24 - message22 // -Infinity
var message35 = +0 - (+0) // +0
var message36 = +0 - (-0) // +0
var message37 = -0 - (-0) // +0

var message39 = NaN - 1 // NaN
var message38 = 5 - true // 4
var message40 = 5 - "" // 5
var message41 = 5 - null // 5
// console.log(message41)


/**
 * 比较运算符的特殊情况
 * 如果两个操作数是数值，则执行数值比较
 * 如果两个操作数是字符串，则按编码值比较
 * 如果有一个是数值，则将另一个转换成数值，进行数值比较
 * 如果一个是对象，先调用 valueOf()转换成数值，再参考前面的规则；
 *      如果没有 valueOf() 方法，则调用 toString() 方法.
 * 如果一个是布尔值，则先转换为数值，再参考前面的规则
 */

var message42 = "23" < "3" // true
var message43 = "23" < 3 // false
var message44 = "a" < 3 // false, a 转换成了NaN

var message45 = NaN < 3 // false, NaN 与任何数值比较都是false
// console.log(message45)


/**
 * 相等和不相等的特殊情况:
 * == 与 != 会先转换操作数
 * 如果有一个是布尔值，则先将其转换为数值
 * 如果A是字符串，B是数值，则先将字符串转换为数值
 * 如果A是对象，B不是，则先调用A的 valueOf(), 转换成数值再比较
 * null 和 undefined 相等
 * NaN 不等于任何数
 * 如果A，B都是对象，则比较它们是不是同一个对象，如果A，B都指向同一个对象，则返回true
 */

var message46 = null == undefined // true
var message47 = NaN != NaN // true
var message48 = true == 1 // true
var message49 = true == 2 // false
var message50 = undefined == 0 // false
var message51 = null == 0 // false
// console.log(message51)

var message52 = undefined === null // false
// console.log(message52)

// 逗号操作符综合返回表达式中的最后一项
var message53 = (1, 2, 3, 4, 5) // message53 的值为5
// console.log(message53)