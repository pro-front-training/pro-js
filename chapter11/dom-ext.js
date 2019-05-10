// DOM 扩展

// 选择符API
// 获取body元素
var body = document.querySelector("body")

// 获取id为 "login" 的元素
var loginDiv = document.querySelector("#login")

// 获取class为 "login" 的元素
var selected = document.querySelector(".login")

// 如果querySelector 找不到结果, 会返回null

// querySelectorAll() 使用方法一样, 但会查找所有符合条件的对象. 返回结果类型为NodeList


// html5 扩展
// getElementsByClassName(), 传入类名, 返回所有包含该类的元素
var selected2 = document.getElementsByClassName("login")

// 使用innerHTML设置内容
loginDiv.innerHTML = "<p> Login </p>"