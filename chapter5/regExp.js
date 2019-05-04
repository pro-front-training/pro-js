// 正则表达式
// 标志: g 全局; i 不区分大小写; m 多行

// 1. 用字面量定义正则表达式
// 查找字符串中的所有"at"实例
var pattern1 = /at/g

// 查找第一个"bat" 或者"cat", 不区分大小写
var pattern2 = /[bc]at/i

// 查找所有以"at"结尾的3个字符的实例，不区分大小写
var pattern3 = /.at/gi

// 2. 使用RegExp构造函数创建正则表达式, 第一个参数是模式，第二个参数是标志
var pattern4 = new RegExp("[bc]at", "i")

/**
 * 需要转义的字符串: { }, [ ], (), \, ^, $, |, *, ?, +, .
 * 在使用字面量定义时，用1个\ 转义, 如: \{, \}
 * 在使用构造函数时，使用2个\\ 转义, 如: \\{, \\}, 也就是双重转义
 */

var text1 = "There is a cat";
var pattern5 = /cat/g
var pattern6 = /cat/

var message1 = pattern5.test(text1) // 匹配成功，返回true
// console.log(message1)

/**
 * 正则表达式的exec() 用于捕获符合模式的字符串
 * 匹配成功，输出为对象
 * input: 应用正则表达式的字符串
 * index: 匹配项在原始字符串中的位置
 * 0: 与整个模式匹配的字符串
 * 1 开始为可选项，表示捕获的字符串
 * 如果匹配失败，则返回null
 */
var text2 = "here is a cat, there is a hat"
var pattern7 = /cat/gi // 匹配cat字符串，全局，不区分大小写
var result1 = pattern7.exec(text2)
/**
 * result1数组:
 * input: "here is a cat, there is a hat"
 * index: 10 , 从索引10开始匹配成功
 * 0: cat
 */

var pattern8 = /(cat)/gi // 捕获cat
var result2 = pattern8.exec(text2)
/**
 * result2数组:
 * input: "here is a cat, there is a hat"
 * index: 10 , 从索引10开始匹配成功
 * 0: cat
 * 1：cat , 捕获到cat
 */

var pattern9 = /c(at)/gi // 匹配cat，捕获at
var result3 = pattern9.exec(text2)
/**
 * result3数组:
 * input: "here is a cat, there is a hat"
 * index: 10 , 从索引10开始匹配成功
 * 0: cat
 * 1：at , 捕获到at
 */

console.log(result3)
