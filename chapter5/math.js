// Math 对象
// 求最大值
var message1 = Math.max(1, 3, 9, 6, 5)

// 查找数组的最大值
var numbers1 = [1, 3, 9, 5, 5]
var message2 = Math.max.apply(Math, numbers1)

// 求最小值
var message3 = Math.min(1, 3, 9, 6, 5)

// 求数组最小值
var message4 = Math.min.apply(Math, numbers1)


// Math.ceil() 向上取整
// Math.floor() 向下取整
// Math.round() 四舍五入

// Math.random() 返回 (0, 1) 之间的随机数
// Math.floor(Math.random() * 可能的总数 + 第一个可能的值)
// 返回 [1, 10] 之间的随机整数
var message5 = Math.floor(Math.random() * 10 + 1)
