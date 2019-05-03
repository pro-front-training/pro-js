// 动态属性，可以先创建一个对象，再添加属性
var person = new Object()
person.name = "jiangyu"
person.age = 24
// console.log(person.name)


// 复制对象只能复制引用，也就是多个变量指向同一个对象
var person2 = person // 复制引用
person2.age = 23 // 改变对象的值, 所有引用都会跟着变化
// console.log(person.age) // 23

// 将对象传递到函数中，是按值传递的
function setAge(person, age) {
    person.age = age
}
setAge(person, 20)
// console.log(person.age) // 20

// 即使这个对象按值传递，内部的person 也会按引用访问同一个对象

function setName(person) {
    person.name = "James"
    person = new Object() // 函数内部重写 person 时，person引用的是一个局部变量，局部变量会在函数执行完成后销毁.
    person.name = "jiangyu"
}
var person3 = new Object()
setName(person3)
// console.log(person3.name) // James

// 类型检测 instanceof
var message1 = person instanceof Object // true
// console.log(message1)

