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
 * (x, y) 表示圆心坐标radius 表示半径, startAngle 表示起始角度, endAngle 表示结束角度
 * counterclockwise 为 true 表示逆时针计算角度, 为 false 表示顺时针计算角度
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

// 设置阴影
var canvas5 = document.getElementById("canvas5")
var ctx5 = canvas5.getContext("2d")

// 设置阴影属性
ctx5.shadowOffsetX = 10
ctx5.shadowOffsetY = 10
ctx5.shadowBlur = 5
ctx5.shadowColor = "rgba(153, 204, 255, 0.5)"

ctx5.fillStyle = "rgba(255, 204, 204, 1)"
ctx5.fillRect(50, 30, 100, 100)

// 设置渐变
var canvas6 = document.getElementById("canvas6")
var ctx6 = canvas6.getContext("2d")

var gradient = ctx6.createLinearGradient(10, 10, 150, 150) // (x1, y1) 渐变起始位置, (x2, y2) 渐变结束位置
gradient.addColorStop(0, "#CCFF99") // 设置色标, 0 表示开始的颜色, 1表示结束的位置
gradient.addColorStop(1, "#66CCFF")

ctx6.fillStyle = gradient
ctx6.fillRect(10, 10, 150, 150)

// 创建放射渐变
var canvas7 = document.getElementById("canvas7")
var ctx7 = canvas7.getContext("2d")

// 创建放射渐变的两个圆, (x1, y1, r1, x2, y2, r2) 其中(x1, y1, r1)表示第1个圆, (x2, y2, r2) 表示第2个圆
var gradient2 = ctx7.createRadialGradient(150, 150, 50, 150, 150, 150)
gradient2.addColorStop(0, "#FF99CC")
gradient2.addColorStop(1, "#CCFFFF")

ctx7.fillStyle = gradient2
ctx7.beginPath();
ctx7.arc(150, 150, 150, 0, 2 * Math.PI, false);
ctx7.fill();//画实心圆
ctx7.closePath();

// 修改全局透明度
var canvas8 = document.getElementById("canvas8")
var ctx8 = canvas8.getContext("2d")

ctx8.fillStyle = "#FF99CC"
ctx8.fillRect(30, 30, 100, 100)

// 修改全局透明度
ctx8.globalAlpha = 0.5

ctx8.fillStyle = "rgba(204, 255, 255, 1)"
ctx8.fillRect(80, 80, 100, 100)

// 重置全局透明度
ctx8.globalAlpha = 0

// 图像合成
var canvas9 = document.getElementById("canvas9")
var ctx9 = canvas9.getContext("2d")

ctx9.fillStyle = "#FF99CC"
ctx9.fillRect(30, 30, 100, 100)

ctx9.globalCompositeOperation = "destination-over"

ctx9.fillStyle = "rgba(204, 255, 255, 1)"
ctx9.fillRect(80, 80, 100, 100)