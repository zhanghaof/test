/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2023-07-26 11:01:42
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-09 16:00:13
 * @FilePath: \learnNode\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// var fs = require("fs")
// var data = fs.readFileSync("./input.txt")
// console.log(data.toString())
// console.log("程序执行结束")

// var events = require("events")
// var eventEmitter = new events.EventEmitter()
// var connectHandler = function connected() {
//   console.log("链接成功")
//   eventEmitter.emit("data_received")
// }
// eventEmitter.on("connection", connectHandler)
// eventEmitter.on("data_received", function () {
//   console.log("数据接收成功。")
// })
// eventEmitter.emit("connection")
// console.log("ok")

var fs = require("fs")
// var data = ""
var data = "菜鸟教程官网地址：www.runoob.com"
var readerStream = fs.createReadStream("input.txt")

readerStream.on("data", function (chunk) {
  data += chunk
})

readerStream.on("end", function () {
  console.log(data)
})

readerStream.on("error", function (err) {
  console.log(err.stack)
})

console.log("123")

var writerStream = fs.createWriteStream("output.txt")

writerStream.write(data, "UTF8")

writerStream.end()

writerStream.on("finish", function () {
  console.log("finish")
})

writerStream.on("error", function (err) {
  console.log(err.stack)
})
console.log("321")

var Hello = require("./hello")
hello = new Hello()
hello.setName("BYVoid")
hello.sayHello()
