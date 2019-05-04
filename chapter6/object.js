// 面向对象
// JS 的对象可以理解为散列表，也就是无序的键值对，值为函数或者数据
var person1 = {
    name: "Jiangyu", // 属性
    age: 24,
    info: function () { // 方法
        return "name: " + this.name + ", age: " + this.age
    }
}
// console.log(person1.info()) // 调用对象的方法


// 创建对象
// 1. 工厂模式
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        info: function () {
            return "name: " + this.name + ", age: " + this.age
        }
    }
}
var person2 = createPerson("Jiangyu", 25)
// console.log(person2.info())

// 2. 构造函数模式, 可以明确地知道创建的对象的类型
function Person(name, age) {
    this.name = name
    this.age = age
    this.info = function () {
        return "name: " + this.name + ", age: " + this.age
    }
}
var person3 = new Person("Jimmy", 26)
// console.log(person3.info())

// 3. 原型模式，每个函数都有一个 prototype 原型属性，该属性是一个指针，指向一个对象，
//      该对象存储了实例共享的属性和方法. 换句话说，prototype 就是原型对象，
//      构造函数通过 prototype 创建实例，因此可以直接将属性和方法扔到原型对象中
function Person2() {

}
Person2.prototype.name = "Jiangyu"
Person2.prototype.age = 27
Person2.prototype.info = function () {
    return "name: " + this.name + ", age: " + this.age
}

var person4 = new Person2()
//console.log(person4.info())

// 如果对实例的属性重新赋值，则会屏蔽掉原型对象的属性
person4.name = "James"
// console.log(person4.info())

// 如果删除掉实例的属性，依然会返回原型对象的属性
delete person4.name
// console.log(person4.info())

// 可以通过hasOwnProperty() 判断属性属于实例的，还是对原型对象的
var message1 = person4.hasOwnProperty("name") // false, 因为person4 实例没有该属性
// console.log(message1)

// 如果实例可以访问某个属性，in 就会返回true
var message2 = "name" in person4 // true， person4 可以通过原型对象访问
var message3 = "salary" in person4 // false, 实例和原型都没有salary 属性
console.log(message3)