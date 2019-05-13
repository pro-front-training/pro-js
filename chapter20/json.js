// json 语法
// 必须使用双引号, 属性名称必须使用双引号括起来
var message1 = {
    "name": "Jiangyu",
    "age": 22
}

// json可以嵌套
var message2 = {
    "name": "Jiangyu",
    "age": 22,
    "school": {
        "primary school": "Avenue School",
        "location": "Avenue Street 55th"
    }
}

// json 数组
var message3 = [
    {
        "title": "professional Javascript",
        "author": "Nicholas C"
    },
    {
        "title": "Professional Java",
        "author": "Dennis Hunt"
    }
]
// console.log(message3[0].title)

// 将 json 对象转换为字符串
var message4 = JSON.stringify(message3)

// 将 json 字符串转换为 json 对象
var message5 = JSON.parse(message4)
console.log(message5)