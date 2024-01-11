/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 09:46:23
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 09:59:35
 * @FilePath: \learnNode\3Node.js EventEmitter\event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var event = require("events")
var EventEmitter = new event.EventEmitter()

EventEmitter.on("some_event", function () {
  console.log("some_event")
})
// setTimeout(function () {
//   EventEmitter.emit("some_event")
// }, 1000)

EventEmitter.once("once", function () {
  console.log("once")
})
// setInterval(() => {
//   EventEmitter.emit("once")
// }, 1000)
// setInterval(() => {
//   EventEmitter.emit("some_event")
// }, 1000)

EventEmitter.removeListener("some_event", function () {
  console.log("移除some_event")
})
