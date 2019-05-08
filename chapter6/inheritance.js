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

// 借用构造函数(constructor stealing)
// 父类
function Employ3() {
    this.skills = ["C", "C++"]
}

// 子类, 调用了父类的 call 方法, 因此在实例化子类的时候, 会为每个实例生成一个新的父类实例
// 从而避免了共享一个父类实例
function Manager3() {
    Employ3.call(this)
}

var manager4 = new Manager3()
var manager5 = new Manager3()
manager4.skills.push("Java") // 只会改变实例4的属性 skills


// 借用构造函数还可以向父类的构造函数传递参数
function Employ4(salary) {
    this.salary = salary
}

function Manager4(salary, bonus) {
    // 调用父类的构造函数
    Employ4.call(this, salary)
    this.bonus = bonus
}

var manager6 = new Manager4("Jiangyu", "2200")


// 组合继承(combine inheritance), 融合原型链和借用构造函数, 是最最常用的继承模式!!!
// 父类
function Employ5(salary) { // 使用构造函数定义属性
    this.salary = salary
    this.skills = ["C", "C++"]
}

Employ5.prototype.info = function () { // 使用原型对象定义方法
    return "salary: " + this.salary + ", skills: " + this.skills.join(', ') + "."
}

// 子类借用构造函数完成继承
function Manager5(salary, bonus) {
    Employ5.call(this, salary)
    this.bonus = bonus
}

Manager5.prototype = new Employ5()
Manager5.prototype.getBonus = function () { // 定义子类的方法
    return this.bounus
}

var manager7 = new Manager5(2000, 8000)
manager7.skills.push("Java")

var manager8 = new Manager5(2000, 9000)
manager8.skills.push("Java", "Python")

console.log(manager7)
console.log(manager8)

