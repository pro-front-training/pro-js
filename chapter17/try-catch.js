// 错误处理
try {
    window.errorFunction()
} catch (e) {
    console.log(e.message)
}

// 如果查询字符串中包含http://等特殊字符, 要使用encodeURIComponent()