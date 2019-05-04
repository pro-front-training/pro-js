// 全局方法
// encodeURI 与 decodeURI
var message1 = "http://www.codve.com/es?search=computer science"
var message2 = encodeURI(message1) // 只有空格被转换成了%20
var message3 = decodeURI(message2)

// encodeURIComponent 与 decodeURIComponent
var message4 = encodeURIComponent(message1)// 所有的非字母字符都会被转义
var message5 = decodeURIComponent(message4)

