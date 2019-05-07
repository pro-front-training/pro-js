// 原型链
// 父类
function Employ() {
    this.salary = 2000
}
Employ.prototype.getSalary = function () {
    return this.salary
}

// 子类
function Manager() {
    this.bounus = 8000
}

Manager.prototype = new Employ() // 将父类的实例作为子类的prototype

Manager.prototype.getBounus = function () {
    return this.bounus
}

var manager1 = new Manager()
var message1 = manager1.getSalary() // 调用父类的方法, 访问父类的属性

// 调用manager1.getSalary时, 会沿着原型链搜索.
// 1. 先搜索实例manager1的方法
// 2. 没有的话, 再搜索Manager.prototype的方法
// 3. 没有的话, 再所属Employ.prototype的方法

// 原型链的问题: 引用类型的属性会被所有实例共享
// 父类
function Employ2() {
    this.skills = ["C", "C++"]
}

// 子类
function Manager2() {

}
Manager2.prototype = new Employ2()

var manager2 = new Manager2()
var manager3 = new Manager2()

manager2.skills.push("Java")
var message3 = manager3.skills // ["C", "C++", "Java"], 实例3的属性发生改变
console.log(message3)
