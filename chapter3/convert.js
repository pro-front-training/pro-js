// 数值转换
/**
 * Number 的转换规则
 * true 转换为1，false 转换为0
 * 数字原样返回
 * null 转换为 0
 * undefined 转换为 NaN
 * 如果字符串只包含数字(可含正负号)，则将其转换为十进制，如"123" 变成数字123; "011" 变成 11(忽略前导0)
 * 如果字符串包含有效浮点格式, 如"1.1", 则转换为1.1
 * 如果字符串包含有效十六进制格式，如"0xf", 则转换为相同大小的十六进制整数
 * 空字符串""会被转换为0
 * 其他任何字符串会转换成 NaN
 * 如果是对象，会先调用对象的valueOf()方法，再按照前面的规则转换；如果转换结果是NaN，调用对象的
 *      toString() 方法，再按照前面的规则进行转换
 */

var num1 = Number("hello!") // NaN
var num2 = Number("") // 0
var num3 = Number("011") // 11
var num4 = Number(true) // 1
var num5 = Number(false) // 0
var num6 = Number(null) // 0
// console.log(num6)

/**
 * 由于Number转换过于复杂且不够合理，转换数字通常使用 parseInt() 和 parseFloat()
 * parseInt会忽略字符串的空格，直到找到第一个非空格字符
 * 如果第一个字符不是数字或者负号，就会返回NaN, 所以空字符串也会返回NaN
 * parseInt会一直解析到非数字字符或者小数点为止
 * 字符串以"0x"开头且后跟数字字符，会当做十六进制
 * 字符串以"0"开头且后跟数字字符，会当做八进制
 *
 */
var num7 = parseInt("  1234hello") // 1234
var num8 = parseInt("hello") //NaN
var num9 = parseInt("") //NaN
var num10 = ("0xA") //十六进制0xA
var num11 = parseInt("070") // 八进制070
var num12 = parseInt("70") // 十进制70
// console.log(num11)

/**
 * parseInt的第二个参数用于指定解析字符串的进制，这样字符串可以省略前缀0 或者 0x
 */

var num13 = parseInt("0xA", 16) // 解析成十进制数10
var num14 = parseInt("A", 16) // 忽略前缀0x，效果一样
var num15 = parseInt("A") // 未指定进制，无法解析，返回NaN
// console.log(num15)

/**
 * 进制会影响返回的结果
 */

var num16 = parseInt("10", 2) // 二进制数10, 解析为十进制数2
var num17 = parseInt("10", 8); // 八进制数10, 解析为十进制数8
var num18 = parseInt("10", 16); // 十六进制10，解析为十进制16
// console.log(num18)

/**
 * parseFloat() 与 parseInt类似，但是字符串中第一个小数点是有效的，而第二个小数点是无效的
 * parseFloat 会忽略前导0
 * parseFloat 只能解析十进制数，十六进制会始终解析为0
 */
var num21 = parseFloat("123Hello") // 123
var num22 = parseFloat("0xA") // 0
var num23 = parseFloat("22.3") // 22.3
var num24 = parseFloat("22.3.4") // 22.3
var num25 = parseFloat("022.3"); //22.3
console.log(num25)
