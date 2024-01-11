/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-09 16:40:54
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 09:42:23
 * @FilePath: \learnNode\2Node.js 事件循环\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入 events 模块
var events = require("events")
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()

// 创建事件处理程序
var connectHandler = function connected() {
  console.log("连接成功。")

  // 触发 data_received 事件
  eventEmitter.emit("data_received")
}

// 绑定 connection 事件处理程序
eventEmitter.on("connection", connectHandler)

// 使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received", function () {
  console.log("数据接收成功。")
})

// 触发 connection 事件
eventEmitter.emit("connection")

console.log("程序执行完毕。")

// var fs = require("fs")

// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     console.log(err.stack)
//     return
//   }
//   console.log(data.toString())
// })
// console.log("程序执行完毕")
