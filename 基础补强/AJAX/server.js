//1.引入Express
const express = require("express");

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");

    //设置响应
    response.send("hello");
});

app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");

    //设置响应
    response.send("hello,post");
});

app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");

    //响应数据
    const data = {
        name:'atguigu'
    };

    //对对象进行字符串转换
    let str = JSON.stringify(data);

    //设置响应
    response.send("hello,AJAX-2");
});

//延时响应
app.post('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() =>{
        //设置响应
        response.send("延时响应");
    },3000)
    
});

//jquery-server
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");

        const data = {name:'尚硅谷'}
        //设置响应
        // response.send("hello jquery AJAX");
        response.send(JSON.stringify(data));
    
});


app.all('/jquery-jsonp-server', (request, response) => {
    // response.setHeader("Access-Control-Allow-Origin", "*");
        const data = {
            name:'尚硅谷',
            city:['北京','上海','深圳']
        };
        //将数据转换成字符串
        let str = JSON.stringify(data);
        //接收callback参数
        let cb = request.query.callback;
        response.end(`${cb}(${str})`);
    
});



//4.监听窗口启动服务
app.listen(8000,() => {
    console.log("服务器已经启动,8000监听中...");
});

