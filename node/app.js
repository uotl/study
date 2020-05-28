const http = require('http');

const server = http.createServer((req,res) => {
  res.writeHead(200,{
    "Content-type":"text/html;charset=UTF-8"
  })
  res.end('NODEJS')
})

server.listen(3000)
console.log('localhost:3000')