/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-09 16:13:53
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-09 16:18:49
 * @FilePath: \learnNode\Node.js 回调函数\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 阻塞代码实例
// var fs = require("fs")

// var data = fs.readFileSync("input.txt")

// console.log(data)
// console.log(data.toString())
// console.log("程序执行结束!")

// 非阻塞代码实例
var fs = require("fs")
fs.readFile("input.txt", function (err, data) {
  if (err) return console.error(err)
  console.log(data.toString())
})

console.log("程序执行结束!")
