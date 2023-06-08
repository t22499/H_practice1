//1.引入Express
const express = require("express");
//引入fs
const fs = require("fs");

//2.创建应用对象
const app = express();

app.get('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //path路径
    var path = "./data/test_data.json";
    var jsonData = [];
    //读取JSON
    fs.readFile(path,"utf-8",(err, data) => {
        if (err) {
            console.error(err);
            response.status(500).send("服务器错误");
          } else {
            // 解析 JSON 数据
            jsonData = JSON.parse(data);
            // 将 JSON 数据作为响应发送给客户端
            response.json(jsonData);
            // response.send(JSON.stringify(jsonData));
        }
    })




    //设置响应
});

//4.监听窗口启动服务
app.listen(8000, () => {
    console.log("服务器已经启动,8000监听中...");
});
