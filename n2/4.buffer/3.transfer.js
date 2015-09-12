//js可以直接使用16进制；
var s = 0xff; // 255

// 将任何进制转换位十进制;
console.log(parseInt('11', 2));
console.log(parseInt('77', 8));
console.log(parseInt('af', 16));

// 将十进制转换为任何进制;
console.log((154).toString(2));
console.log((154).toString(8));
console.log((154).toString(16));