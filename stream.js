/* Node.js Stream(流)
 * Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

 * Node.js，Stream 有四种流类型：

 * Readable - 可读操作。

 * Writable - 可写操作。

 * Duplex - 可读可写操作.

 * Transform - 操作被写入数据，然后读出结果。

 * 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

 * data - 当有数据可读时触发。

 * end - 没有更多的数据可读时触发。

 * error - 在接收和写入过程中发生错误时触发。

 * finish - 所有数据已被写入到底层系统时触发。 */
//1读取流
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
//设置编码为utf-8
readerStream.setEncoding('utf-8')
//处理事件流 data=>end=>error
//data只有在读取到数据的时候发生

readerStream.on('data',function(chunk){
	
	data+=chunk
})

readerStream.on('end',function(){
	console.log(data)
})

readerStream.on('error',function(err){
	console.log(err.stack)
})

console.log('事件执行完毕')
//2写入流
var writedata = '这是我写在output.txt中的文字'

var writeStream = fs.createWriteStream('output.txt')

writeStream.write(writedata,'utf-8')
//标记文件末尾
writeStream.end()
//写入完成
writeStream.on('finish',function(){
	console.log('写入完成')
})
writeStream.on('error',function(){
	console.log(err.stack)
})
console.log('文件写入完成，程序执行结束')


