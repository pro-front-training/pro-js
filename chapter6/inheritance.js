// 原型链
function SuperType() {
    this.property = true
}

SuperType.prototype.getSuperValue = function () {
    return this.property
}

function SubType() {
    this.subProperty = false
}

// 继承了SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
    return this.subProperty
}

var instance = new SubType()
console.log(instance.getSuperValue())
