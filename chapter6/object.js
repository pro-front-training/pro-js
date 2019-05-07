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

// 可以通过hasOwnProperty() 判断属性属于实例的，还是原型对象的
var message1 = person4.hasOwnProperty("name") // false, 因为person4 实例没有该属性
// console.log(message1)

// 如果实例可以访问某个属性，in 就会返回true
var message2 = "name" in person4 // true， person4 可以通过原型对象访问
var message3 = "salary" in person4 // false, 实例和原型都没有salary 属性

// 获取原型对象的所有属性和方法
var message4 = Object.keys(Person2.prototype) // ["name", "age", "info"]

// 获取实例的所有属性和方法
var person5 = new Person2()
person5.name = "Jami"
var message5 = Object.keys(person5) // ["name"]

// 也可以通过getOwnPropertyNames() 获取对象的属性
var message6 = Object.getOwnPropertyNames(Person2.prototype) // ["constructor", "name", "age", "info"]

// 更简单的原型语法, 减少prototype的数量
function Person3() {

}
Person3.prototype = {
    name: "Jiangyu",
    age: 28,
    info: function () {
        return "name: " + this.name + ", age: " + this.age
    }
}

var person6 = new Person3()
// 虽然作用是一样的, 但这样的 Person3.prototype.constructor 会指向 Object
var message7 = person6.constructor == Object // true

//解决的办法就是手动指定 constructor 的值为构造函数
function Person4() {

}
Person4.prototype = {
    constructor: Person4,
    name: "Jiangyu",
    age: 28,
    info: function () {
        return "name: " + this.name + ", age: " + this.age
    }
}
var person7 = new Person4()
var message8 = person7.constructor == Person4 // true


// 原型的动态性. 每次调用实例的方法, 都会去原型中查找一遍. 也就是说, 改变原型对象, 也会影响已存在的实例
function Person5() {

}
Person5.prototype = {
    constructor: Person5,
    name: "Jiangyu",
    age: 20,
    info: function () {
        return "name: " + this.name + ", age: " + this.age
    }
}
var person8 = new Person5()
// console.log(person8.info())

Person5.prototype.info = function () { // 重写原型对象的方法
    return "name = " + this.name + ", age = " + this.age
}
// console.log(person8.info()) // 实例的方法已经改变了

// 原型模式的问题: 所有实例共享相同的属性, 对于引用类型的属性来说, 问题就很严重
function Person6() {

}
Person6.prototype = {
    constructor: Person6,
    name: "Jiangyu",
    age: 20,
    friends: ["Jimmy", "Solos"]
}
var person9 = new Person6()
var person10 = new Person6()

person9.friends.push("Van")
// console.log(person10.friends) // ["Jimmy", "Solos", "Van"], 改变 person9 的引用类型属性, 导致 person10 也跟着变化


// 组合使用构造函数模式和原型模式, 构造函数用于定义实例属性, 原型模式用于定义方法和共享属性, 是使用最广泛的方式
function Person7(name, age) {
    this.name = name
    this.age = age
    this.friends = ["Jimmy", "Solos"]
}
Person7.prototype = {
    constructor: Person7,
    info: function () {
        return "name: " + this.name + ", age: " + this.age
    }
}
var person11 = new Person7()
var person12 = new Person7()

person11.friends.push("Van") // 只会改变实例 person11 的属性
