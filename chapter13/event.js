// DOM 0级事件
var btn1 = document.getElementById("btn1")
btn1.onclick = function () {
    console.log(this.id)
}

// DOM 2级事件, 最后的false表示冒泡阶段, true表示捕获阶段
var btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function () {
    console.log(this.id)
}, false)

// 移除DOM 2级事件
var handler1 = function () {
    console.log(this.id)
}

var btn3 = document.getElementById("btn3")
btn3.addEventListener("click", handler1, false) // 添加事件
btn3.removeEventListener("click", handler1, false)

// 事件对象
var handler2 = function (event) {
    console.log(event.type)
}
var btn4 = document.getElementById("btn4")
btn4.addEventListener("click", handler2, false)

/**
 * focus 获取焦点时触发
 * blur 失去焦点时触发
 *
 * click 鼠标点击时触发
 * mouseenter 鼠标进入时触发
 * mouseleave 鼠标移开时触发
 * mouseover 鼠标悬浮在元素上时触发
 * mouseout 鼠标离开时触发
 *
 * keydown 按下任意键触发
 * keypress 松开字符键触发
 * keyup 松开键盘时触发
 *
 * textInput 在编辑区域输入字符时触发
 */

var handler3 = function (event) {
    console.log(event.data)
}
var textInput1 = document.getElementById("input1")
textInput1.addEventListener("textInput", handler3, false)

