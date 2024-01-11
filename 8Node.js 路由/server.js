/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 11:00:18
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 11:15:30
 * @FilePath: \learnNode\8Node.js 路由\serve.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var http = require("http")
var url = require("url")

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname
    console.log("Request for " + pathname + " received.")
    route(pathname)
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write("Hello World")
    response.end()
  }
  http.createServer(onRequest).listen(8888)
  console.log("Server has started.")
}

exports.start = start
