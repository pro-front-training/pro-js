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
console.log(message5) // -19

var message6 = -18
console.log(~message6) // 17
