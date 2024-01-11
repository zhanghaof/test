/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-09 16:05:59
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-09 16:09:41
 * @FilePath: \learnNode\two\first.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var http = require("http")

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Hello World")
  })
  .listen(8888)

console.log("Server running at http://127.0.0.1:8888/")
