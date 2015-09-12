//创建buffer的几种方式：

// 1. 创建对象，传入长度，此时的内容为随机的
var buf1 = new Buffer(12);
// console.log(buf1);

// 2. 传入一个数组
var buf2 = new Buffer([1,2,3]);
//console.log(buf2);

// 3. 直接通过字符串来创建
var buf3 = new Buffer('我是一丁');
//console.log(buf3);

buf1.fill(0, 1, 3);
// console.log(buf1);

// buffer长度变化
var str = '为谁父asd';
var buf4 = new Buffer(str);
// console.log(str.length);
// console.log(buf4.length);

// buffer可被修改
str[0] = '我';
buf4[0] = 0xff;
// console.log(str, buf4);

// slice，可以截取出小buff
var sBuff = buf4.slice(1, 2);
sBuff[0] = 0x9;
// console.log(sBuff, buf4);

// buffer 转为字符串
var buf5 = new Buffer('我是一丁');
// console.log(buf5);
// console.log(buf5.toString()); // 默认utf－8, 一个字，三字节
// console.log(buf5.toString('utf-8'));
// console.log(buf5.toString('ascii'));
// console.log(buf5.toString('utf-8', 3, 9)); // start， end

var buf6 = new Buffer(12);
buf6.write('我是', 0, 3);
buf6.write('一丁', 3, 3);
// console.log(buf6.toString());

var buff1 = new Buffer('我是');
var buff2 = new Buffer('一丁');
var buff3 = Buffer.concat([buff1, buff2], 13);
// console.log(buff3.toString());

var buff4 = new Buffer(8);
console.log(buff4)
buff2.copy(buff4, 0, 0, 4);
console.log(buff4)
 console.log(buff4.toString())


// console.log(Buffer.isBuffer(buff2));

//console.log(Buffer.byteLength('水电费水电费'));

//console.log(Buffer.isEncoding('utf-8'));
