// ajax, Asynchronous JavaScript + XML
// ajax 的核心是 XMLHttpRequest, 简称 XHR
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
xhr.open("get", "https://freegeoip.app/json", true) // true 表示使用异步, false 表示不使用异步
xhr.setRequestHeader("Accept", "Application/json") // 发送头, 有的浏览器不允许重写头部信息
xhr.send(null) // 发送数据

var message1 = xhr.getAllResponseHeaders() // 获取所有响应头
console.log(message1)

// jsonp
// 回调函数
var func1 = function (data) {
    console.log(data)
}

// comet 服务器推送技术, 只需要一个连接, 服务端可以定时向浏览器推送消息

// cookie
var date = new Date()
date.setTime(date.getTime() + 2 * 3600 * 1000)
var name = "jiangyu"
var expire = date.toUTCString()
console.log(expire)
var path = "/"
var domain = "localhost"
var message2 = "user=" + name + "; expires=" + expire + "; path=" + path + "; domain=" + domain + "; "
document.cookie = message2