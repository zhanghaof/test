/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 11:06:50
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 11:07:01
 * @FilePath: \learnNode\8Node.js 路由\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var server = require("./server")
var router = require("./router")

server.start(router.route)
