// 打开弹窗
var url1 = "https://www.codve.com"
// window.open(url1, "_blank") // _self在当前窗口打开; _blank 在新窗口打开, 但会被浏览器拦截

// 定时调用一次, 单位毫秒
function func1() {
    console.log(new Date())
}
// setTimeout(func1, 1000)

// 计时器, 调用10次
var num = 0
var max = 10
var timerId = null

function func2() {
    console.log(num)
    if (num === max) {
        clearInterval(timerId)
    }
    num++
}
// timerId = setInterval(func2, 1000)

// 最好使用超时调用来模拟间歇调用
function func3() {
    console.log(num)
    if (num < max) {
        setTimeout(func3, 1000)
    }
    num++
}
// setTimeout(func3, 1000)

// 跳转
// window.location = url1
// location.href = url1

