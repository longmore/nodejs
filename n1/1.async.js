var hello = function () {
    console.log('1');
}
setTimeout(hello, 2000);
console.log('2');

// https://nodejs.org/api
var fs = require('fs');
// 异步接收
fs.readFile('./test.txt', function(err, data) {
    console.log(arguments);
    console.log(data.toString());
    console.log(3);
    console.log('2');
});
// 同步接收
var content = fs.readFileSync('./test.txt');
console.log(content.toString());
console.log('4');