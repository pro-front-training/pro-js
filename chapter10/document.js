// 根据id获取元素
var message1 = document.getElementById("id")
// 获取属性
message1.getAttribute("css")

// 设置属性
message1.setAttribute("css", "font-size: 12")

// 移除属性
message1.removeAttribute("css")

// 根据标签获取元素
var message2 = document.getElementsByTagName("input")
// message2 是一个包含了所有的 input 标签的集合
var message4 = message2.length // 获取元素个数
var message5 = message2[0].value // 获取元素的 value 属性

// 创建元素
var message7 = document.createElement("div")
message7.id = "new-div"

// 插入新元素
document.body.appendChild(message7)
// 一旦元素插入到文档树中, 浏览器会立刻发送改变


