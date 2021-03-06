// 原型式继承
function object(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

var Employ1 = {
    salary: 2000,
    skills: ["C", "C++"]
}

var employ1 = object(Employ1)
employ1.salary = 2200
employ1.skills.push("Java")


var employ2 = object(Employ1)
employ2.salary = 2300
employ2.skills.push("Python")
// Employ1, employ1, employ2 共享引用属性 skills
// console.log(Employ1.skills) // ["C", "C++", "Java", "Python"]

//ECMAScript 新增Object.create() 用于规范化原型式继承, 所以可以用下面的写法替代上面
var Employ2 = {
    salary: 2000,
    skills: ["C", "C++"]
}
var employ3 = Object.create(Employ2)
employ3.salary = 2200
employ3.skills.push("Java")

var employ4 = Object.create(Employ2)
employ4.salary = 2300
employ4.skills.push("Python")
// console.log(Employ2.skills) // ["C", "C++", "Java", "Python"]

// 再进一步, Object.create()可以指定第二个参数, 用于初始化参数
var employ5 = Object.create(Employ2, {
    salary: {
        value: 2400
    }
})
// console.log(employ5.salary) // 2400

// 寄生组合式继承, 组合式继承最大的问题是会调用2次父类的构造函数
// 第1次: Manager5.prototype = new Employ5()
// 第2次: Employ5.call(this, salary)

// 寄生组合式继承, 使用构造函数来继承属性, 通过原型链来继承方法
// sup 是父类构造函数, sub是子类构造函数
function inherit(sup, sub) {
    var prototype = Object.create(sup) // 创建对象
    prototype.constructor = sub // 增强对象
    sub.prototype = prototype // 指定对象
}

function Employ3(salary) {
    this.salary = salary
}

Employ3.prototype.info = function () {
    return this.name
}

function Manager3(salary, bonus) {
    Employ3.call(this, salary)
    this.bonus = bonus
}

inherit(Employ3, Manager3)

Manager3.prototype.getBonus = function () {
    return this.bonus
}
