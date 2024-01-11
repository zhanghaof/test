/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2023-12-07 12:00:08
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2023-12-07 13:34:18
 * @FilePath: \learnNode\event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// var events = require('event')
// var eventEmitter = new events.eventEmitter();

var EventEmitter = require("event").EventEmitter
var event = new EventEmitter()
event.on("some_event", function () {
  console.log("some_event 事件触发")
})
setTimeout(function () {
  event.emit("some_event"), 1000
})
