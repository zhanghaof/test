/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2023-07-26 10:46:14
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2023-07-26 10:46:35
 * @FilePath: \learnNode\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})