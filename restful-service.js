var express = require('express');
var app = express();
var fs = require("fs");

//获取用户列表 URI:listUsers  HTTP:GET  发送内容：null  结果：显示所有用户列表
app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "json/users.json", 'utf8', function (err, data) {
        console.log("listUsers")
        console.log( data );
        res.end( data );
    });
})

//添加用户列表
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
// URI:addUser  HTTP:POST  发送内容:JSON字符串  结果：添加新用户
app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "json/users.json", 'utf8', function (err, data) {
        console.log("addUser")
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

//显示用户详情 URI:detailUser/:id  HTTP:GET  发送内容:null 结果：显示用户详细信息
app.get('/detailUser/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "json/users.json", 'utf8', function (err, data) {
        console.log(":id")
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

// 删除用户
app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "json/users.json", 'utf8', function (err, data) {
        console.log("deleteUser")
        data = JSON.parse( data );
        delete data["user" + 2];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})