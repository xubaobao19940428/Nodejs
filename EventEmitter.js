// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

// EventEmitter 类
// events 模块只提供了一个对象： /* events.EventEmitter。EventEmitter */ 的核心就是事件触发与事件监听器功能的封装。

// 你可以通过require("events");来访问该模块

var eventsEmitter = require('events').EventEmitter

var events = new eventsEmitter.EventEmitter()

	events.on('some_event', function() { 
		console.log('some_event 事件触发'); 
	});
	 //一秒后触发
	setTimeout(function() { 
		events.emit('some_event'); 
	}, 1000); 

	/* EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
	当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递 */
	
	var listener1 = function listener1(){
		console.log('listenr1事件')
	}
	var listener2 = function listener2(){
		console.log('listener2事件')
	}
	events.addListener('connection',listener1)
	
	events.on('connection',listener2)
	
	var eventListeners = events.listenerCount('connection');
	//测试connection事件共有几个监听事件
	console.log(eventListeners + " 个监听器监听连接事件。");
	
	events.emit('connection')
	
	events.removeListener('connection',listener1)
	console.log('listener1已经移除')
	var eventlisten1 = events.listenerCount('connection')
	
	console.log(eventlisten1 + '个监听事件')
	console.log('事件执行完成')
	