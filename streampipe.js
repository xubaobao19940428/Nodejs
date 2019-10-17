//pipe管道
/* 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。


如上面的图片所示，我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。 */

var fs = require('fs')

var readerStream = fs.createReadStream('input.txt')

var writerStream = fs.createWriteStream('output.txt')
//但是会output文件中的文字覆盖
readerStream.pipe(writerStream)

console.log('执行完毕')
//文档的链式流

/* 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件 */
var zlib = require('zlib')
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))

console.log('文件压缩成功')