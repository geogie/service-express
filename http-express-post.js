var express = require('express');    
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));   

//处理POST请求  
//name和email是POST请求域中的参数名  
app.post('/hello', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.email);  
    res.send('Post Over');    
});  
  
post_mtd = function(req,res){  
  res.send('我是Wujintao');  
}  
//其中这两种形式中的function均可以定义在外部，然后引进方法名即可。其中方法post_mtd要在引用其前定义  
app.post("/wujintao",post_mtd);  
  
//除了app.get、app.post这种形式外，还可以采用：app.all在这里all表示get,post等任何一种请求方式，当然也可以指定为某种特定的请求方式。  
//或者app['get']('/path', function(req,res));这种形式。  
  
//现在可以绑定和监听端口了，调用app.listen()方法，接收同样的参数，比如：  
app.listen(8080);    
console.log('Listening on port 8080');
//测试：http://127.0.0.1:8080/hello 传递需要的参数name、email