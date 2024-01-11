/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 10:18:37
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 10:31:43
 * @FilePath: \learnNode\5Node.js Stream(流)\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var fs = require("fs")
var data = ""

//创建可读流
var readerStream = fs.createReadStream("./input.txt")
//设置编码
readerStream.setEncoding("utf8")
//处理事件
readerStream.on("data", chunk => {
  // console.log(chunk)
  data += chunk
})
readerStream.on("end", () => {
  console.log(data)
})
readerStream.on("error", err => {
  console.log(err)
})

var message = "message1"

//创建一个写入流
var writerStream = fs.createWriteStream("./input.txt")
//编码
writerStream.write(message, "utf8")
//标记文件末尾
writerStream.end()
//处理事件
writerStream.on("finish", () => {
  console.log("ok")
})
writerStream.on("error", err => {
  console.log(err)
})
