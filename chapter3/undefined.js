//声明后未初始化的变量，值为undefined
var message
console.log(message) // undefined

// undefined 可以做相等比较

console.log(message === undefined) // true


// 对未经声明的变量，只可以使用 typeof 操作
console.log(typeof message2)

// undefined 派生自null
console.log(undefined == null) // true

console.log(undefined === null) // false, 类型不相等