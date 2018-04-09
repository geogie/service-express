//http是内置模块、直接引入  
var http = require('http');  
   
http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});  
  res.end('Hello World\n');  
}).listen(8080);  
   
console.log('Server running on port 8080.'); 

// 测试：http://localhost:8080