var http = require('http');
var fs = require('fs')

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
	var data1 = fs.readFile('input.txt',function(err,data){
		if(err){
			console.log('error')
		}else{
			console.log(data)
			return data.toString()
		}
	})
    // 发送响应数据 "Hello World"
    response.end(`${data1}\n`);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');