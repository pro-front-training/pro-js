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
 * startAngle 表示起始角度, endAngle 表示结束角度, counterclockwise 为 true 表示逆时针计算角度
 *
 * arcTo(x1, y1, x2, y2, radius)
 * 以arc定的点开始, 绘制一条弧线, 按指定的半径穿过 (x1, y1), 到达 (x2, y2)
 *
 * lineTo(x, y)
 * 以arc定
 */
// var canvas3 = document.getElementById("canvas3")
// var ctx3 =