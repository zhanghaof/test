/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 10:48:20
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 10:49:10
 * @FilePath: \learnNode\6Node.js模块系统\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var Hello = require("./hello")
var hello = new Hello()
hello.setName("BYVoid")
hello.sayHello()
