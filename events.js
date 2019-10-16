//node.js的简单学习
//事件循环机制
var events = require('events')

var eventEmitter = new events.EventEmitter()

var fs = require('fs')

var connectHandler = function connected(data){
	console.log('连接成功')
	console.log(data)
	eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received',function(){
	console.log('数据接收成功')
})
eventEmitter.emit('connection','123456')


fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
//readFile是异步调用
console.log("程序执行完毕");

console.log('数据接受完成')