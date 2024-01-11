/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 10:45:40
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 10:48:07
 * @FilePath: \learnNode\6Node.js模块系统\hello.js
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
module.exports = Hello
