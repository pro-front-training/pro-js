// 字符串操作方法
// 提取子字符串slice(), substr(), substring()都不会改变原始字符串
var message1 = "hello, world!"

var message2 = message1.slice(7) // 从索引7开始，至字符串结束, world!
var message3 = message1.slice(7, 12) // 取索引[7, 12)之间的子字符串, world

var message4 = message1.substr(7) // 从索引7开始，至字符串结束，world!
var message5 = message1.substr(7, 5) // 从索引7开始，取5个字符, world

// substring() 的用法与 slice() 一致
var message6 = message1.substring(7) // 从索引7开始，至字符串结束，world!
var message7 = message1.substring(7, 12) // 取索引[7, 12)之间的子字符串, world
// console.log(message7)

// 查找子字符串在父字符串中的位置
// indexOf 返回子字符串在父字符串中第一次出现的位置，没找到就返回-1
var message8 = message1.indexOf("o") // 4

// lastIndexOf 从字符串的末尾开始向前查找
var message9 = message1.lastIndexOf("o") // 8
// console.log(message9)

// indexOf 和 lastIndexOf 还可以传递第2个参数，表示从哪个位置开始向后(或者向前)查找

// trim() 用于删除字符串两边的空格, 返回删除空格后的字符串，不改变原始字符串
var message10 = " hello   "
var message11 = message10.trim()

// match(), 相当于正则的RegExp.exec, 传入的参数可以是正则字面量或者 RegExp 对象
var text1 = "here is cat, there is a hat"
var pattern1 = /.at/
var result1 = text1.match(pattern1) // 返回结果与pattern1.exec(text1) 相同

// search(), 查找正则表达式或 RegExp 对象在原始字符串中第一次出现的位置，找不到返回-1
var message12 = text1.search(/at/)

// replace(a, b) 将字符串中的a替换为b. 返回替换后的字符串，不改变原始字符串
// 如果a是一个字符串，则只会替换一次
// 如果a是一个正则表达式，并设置/g，则可以将所有a替换为b
var message13 = text1.replace("at", "ar") // 将第一个 at 替换为 ar
var message14 = text1.replace(/at/g, "ar") // 将所有 at 替换为 ar

// split() 按指定的分隔符，将字符串拆分为数组. 第一个参数可以是字符串或者正则表达式，第二个参数表示数组的最大项数
var text2 = "Bunny,Cate,David,Edward,Frank"
var message15 = text2.split(',')

