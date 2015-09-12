/**
 * 1. readFile writeFile 将文件作为一个整体
 *
 *
 */
var fs = require('fs');
var file = fs.createReadStream('./1.txt', {
    start: 0,
    end: 100
});
file.on('open', function () {
   console.log('open')
});
file.on('data', function (data) {
    console.log(data)
    console.log(data.toString())
});
file.on('end', function () {
    console.log('end')
});
file.on('close', function () {
    console.log('close')
});
file.on('error', function () {
    console.log('error')
});