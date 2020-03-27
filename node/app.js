const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
  let path,get,post
  if(req.method == 'GET'){
    let {pathname, query} = url.parse(req.url,true)
    path = pathname;
    get = query;
    
  }else if(req.method == 'POST'){

  }
}).listen(8080)