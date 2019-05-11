var canvas1 = document.getElementById("canvas1")
var ctx = canvas1.getContext("2d")
// 绘制矩形
ctx.fillStyle = "#5bc0de"
//(x, y, width, height)
ctx.fillRect(0, 0, 100, 100)

// 绘制半透明矩形
ctx.fillStyle = "rgba(204, 255, 255, 0.5)"
ctx.fillRect(50, 50, 100, 100)

var canvas2 = document.getElementById("canvas2")
var ctx2 = canvas2.getContext("2d")
// 绘制矩形框
ctx2.strokeStyle = "#5bc0de"
ctx2.strokeRect(10, 10, 100, 100)

// 绘制半透明边的矩形
ctx2.strokeStyle = "rgba(204, 255, 255, 0.8)"
ctx2.lineWidth = 5
ctx2.strokeRect(50, 50, 100, 100)

// 清除一块区域
ctx2.clearRect(40, 40, 30, 30)

/**
 * 绘制路径
 * arc(x, y, radius, startAngle, endAngle, counterclockwise)
 * radius 表示半径, startAngle 表示起始角度, endAngle 表示结束角度, counterclockwise 为 true 表示逆时针计算角度, 为 false 表示顺时针计算角度
 *
 * arcTo(x1, y1, x2, y2, radius)
 * 以arc定的点开始, 绘制一条弧线, 按指定的半径穿过 (x1, y1), 到达 (x2, y2)
 *
 * lineTo(x, y)
 * 以arc定的点开始, 绘制一条直线, 到达(x, y)
 */
var canvas3 = document.getElementById("canvas3")
var ctx3 = canvas3.getContext("2d")
// 开始路径
ctx3.beginPath()

// 绘制外圆, 起始弧度为0, 结束弧度为2π
ctx3.arc(100, 100, 99, 0, 2 * Math.PI, false)

// 移动绘图游标, 在绘制内圆之前, 必需将游标移出外圆, 否则就会绘制出多余的线条
ctx3.moveTo(194, 100)

// 绘制内圆
ctx3.arc(100, 100, 94, 0, 2 * Math.PI, false)

// 绘制分针
ctx3.moveTo(100, 100)
ctx3.lineTo(100, 15)

// 绘制时针
ctx3.moveTo(100, 100)
ctx3.lineTo(25, 100)

// 描边路径
ctx3.stroke()

// 绘制文本
ctx3.font = "bold 14px Arial"
ctx3.textAlign = "center"
ctx3.textBaseline = "middle"
ctx3.fillText("12", 100, 20) // 字符串, x, y, 最大像素宽度(可选)

// 计算文本区域大小
var canvas4 = document.getElementById("canvas4")
var ctx4 = canvas4.getContext("2d")

ctx4.font = "bold 28px Consolas"
ctx4.textAlign = "left"
ctx4.textBaseline = "middle"

var message1 = "Hello, world!"
var textWidth1 = ctx4.measureText(message1).width
textWidth1 = parseInt(textWidth1)
ctx4.fillText(message1, 50, 30)
ctx4.fillText("text width: " + textWidth1 + "px", 20, 150)