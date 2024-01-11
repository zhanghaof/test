/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2024-01-10 10:37:29
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2024-01-10 10:43:10
 * @FilePath: \learnNode\5Node.js Stream(流)\main3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var fs = require("fs")
var zlib = require("zlib")

// 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream("./input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("./input.txt.gz"))
// console.log("ok")

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream("./input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("./input.txt"))

console.log("ok")
