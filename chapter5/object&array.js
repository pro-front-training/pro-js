// 创建对象
// 1. 使用new
var person1 = new Object()
person1.name = "Jiangyu"
person1age = 24

// 2. 使用对象字面量
var person2 = {
    name: "Jiangyu", // 等同于 "name": "jiangyu"
    age: 24
}

// 创建数组的3种方法
var persons3 = new Array() // 创建一个数组

var persons4 = new Array(20) // 创建一个数组，并设置数组的length = 20

var persons5 = new Array("Jiangyu", "Scott", "Jupiter")

// 使用 Array 创建数组时可以省略 new 关键字
var persons6 = Array(3)

var persons7 = Array("Jiangyu")

// 也可以使用 [] 创建数组
var persons8 = [] // 创建一个空数组

var persons9 = ["Jiangyu", "Scott", "Jupiter"]

var message1 = persons9[0] // 根据索引读取数组元素
var message2 = persons9[4] // 访问一个未定义的元素，会返回undefined, 而不是抛出索引越界的错误

// 检测数组
var message3 = persons9 instanceof Array // true
// console.log(message3)

// 也可以使用Array.isArray() 判断
var message4 = Array.isArray(persons9) // true
// console.log(message4)

// push()，可以接收任意数量的参数, 将它们逐个添加到数组末尾，并返回修改后的数组长度
var message5 = persons9.push("James", "Williams")


// pop(), 从数组末尾移除最后一项, 减少数组的length值, 然后返回移除的项
var message6 = persons9.pop()

// shift(), 移除数组的第一项, 减少数组的length值, 然后返回移除的项
var message7 = persons9.shift()

// unshift(), 在数组的前端依次添加任意项，返回修改后的数组长度
var message9 = persons9.unshift("Jenny", "David") // Jenny 会排在 David 前面

// reverse() 用于翻转数组
var numbers1 = [1, 3, 5, 7, 9]
numbers1.reverse() // 9, 7, 5, 3, 1

// sort() 用于排序数组，默认升序排序. sort() 会调用每个元素的toString()方法，根据字符串的编码值排序
var numbers2 = [1, 5, 10, 15, 20]
numbers2.sort() // 1, 10, 15, 20, 5

// sort() 可以指定一个排序函数, 如果第一个参数应该位于第二个参数之前，则返回负数;
//      如果两个参数相等则返回0； 如果第一个参数应该位于第二个参数之后，则返回正数
function comp(num1, num2) {
    if (num1 < num2) {
        return -1
    } else if (num1 > num2) {
        return 1
    } else {
        return 0
    }
}

// 升序函数可以简写为:
function simpleAscComp(num1, num2) {
    return num1 - num2
}

numbers2.sort(simpleAscComp) // 1, 5, 10, 15, 20

// 降序排序函数
function descComp(num1, num2) {
    if (num1 > num2) {
        return -1
    } else if (num1 < num2) {
        return 1
    } else {
        return 0
    }
}

// 降序函数可以简写为:
function simpleDescComp(num1, num2) {
    return num2 - num1
}

numbers2.sort(simpleDescComp) // 20, 15, 10, 5, 1
// console.log(numbers2)

// concat() 用于连接数组，返回新生成的数组，不会修改原始数组
var persons10 = ["Anny", "Brand"]
var persons11 = ["Charles", "David"]
var persons12 = persons10.concat(persons11) // Anny, Brand, Charles, David
// console.log(persons12)

// slice() 用于切割数组，返回指定区间的元素组成的新数组
var persons13 = ["Anny", "Brand", "Charles", "David"]
var persons14 = persons13.slice(1, 3) // 返回[1, 3) 之间的元素
var persons15 = persons13.slice(1) // 如果不指定结束位置，默认包含原始数组最后一个元素

// splice() 可以用来删除、插入、替换数组元素, 会改变原始数组
// splice() 总会返回一个数组，包含了被删除的元素. 如果没有元素被删除，则返回空数组

// 执行删除功能，第1个参数是要删除的起始位置，第2个参数是要删除的个数, 下面从第2个位置开始，删除1个元素
var persons16 = ["Anny", "Brand", "Charles", "David"]
var persons17 = persons16.splice(1, 1) // persons17 = ["Brand"], persons16 = ["Anny", "Charles", "David"]

// 执行插入功能，第1个参数是起始位置，第2个参数是0(无删除项), 第3个及其后面的参数是要插入的项
// 下面从第2个位置开始，插入2个元素
var persons18 = ["Anny", "Brand", "Charles", "David"]
var persons19 = persons18.splice(1, 0, "Ali", "Allen") // persons19 = []
// persons[18] = ["Anny", "Ali", "Allen", "Brand", "Charles", "David"]

// 执行替换功能，第1个参数是要替换的起始位置，第2个参数是要替换的个数，第3个及其后面的参数是要替换的项
// 要删除的和要插入的项数量不需要一样
var persons20 = ["Anny", "Brand", "Charles", "David"]
var persons21 = persons20.splice(1, 2, "Brown", "Cate", "Catherina") //persons21 = ["Brand", "Charles"]
// persons20 = ["Anny", "Brown", "Cate", "Catherina", "David"]


// indexOf() 用于查找指定元素在数组中的索引，可以指定2个参数，要查找的项和起始位置
// lastIndexOf() 则从数组末尾开始查找
// 查找都使用 === 做比较, 如果找到元素，返回元素所在位置；如果没找到，返回-1
var numbers3 = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var message10 = numbers3.indexOf(3) // 返回元素3所在的位置，2
var message11 = numbers3.indexOf(3, 3) // 从第4个索引开始，查找元素3所在的位置, 6

var message12 = numbers3.lastIndexOf(3) // 从尾部开始查找元素3的位置, 6
var message13 = numbers3.lastIndexOf(3, 3) // 从尾部倒数3个索引开始，查找元素3所在的位置，2


// 迭代数组, 下面的方法都不会改变原始数组
// every(): 将数组中的每个元素传递给函数，如果每一项都返回true，则返回true
// filter(): 将数组中的每个元素传递给函数，函数返回结果为true的元素组成的数组
// forEach(): 将数组中的每个元素传递给函数，没有返回值
// map(): 将数组中的每个元素传递给函数, 返回每次调用函数的结果组成的数组
// some(): 将数组中的每个元素传递给函数, 如果有一次函数返回true，则结果为true
// 函数接收3个参数，元素项，索引位置，数组本身

var numbers4 = [1, 2, 3, 4, 5, 4, 3, 2, 1]

// 如果数组的每一项都大于2，则返回true
var message14 = numbers4.every(function (item, index, array) {
    return (item > 2)
}) // false

// 如果数组有一项大于2，则返回true
var message15 = numbers4.some(function (item, index, array) {
    return (item > 2)
}) // true

// 返回数组中元素大于2组成的数组
var numbers5 = numbers4.filter(function (item, index, array) {
    return (item > 2)
}) // [3, 4, 5, 4, 3]

// 返回数组中所有元素平方的新数组
var numbers6 = numbers4.map(function (item, index, array) {
    return item * item
}) // [1, 4, 9, 16, 25, 16, 9, 4, 1]

// 遍历数组元素
numbers4.forEach(function (item, index, array) {
    // console.log(item)
})

// 使用reduce() 对数组求和, 函数有4个参数: 前一个值，当前值, 索引，数组对象
// 函数会将任何返回的值作为第一个参数传递给下下一项
var message16 = numbers4.reduce(function (prev, cur, index, array) {
    return prev + cur
}) // 25

// reduceRight() 的作用相同，只是从右边开始遍历
var message17 = numbers4.reduceRight(function (prev, cur, index, array) {
    return prev + cur
})
console.log(message17)