/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-09 15:56:13
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-09 15:58:09
 * @FilePath: \learnNode\hello.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Hello() {
  var name
  this.setName = function (thyName) {
    name = thyName
  }
  this.sayHello = function () {
    console.log("Hello" + name)
  }
}
module.export = Hello
