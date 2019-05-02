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
console.log(message7);
