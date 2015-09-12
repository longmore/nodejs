/**
 * readFile readFileSync
 *
 */

var fs = require('fs');

fs.writeFile('write.txt', '我是数据<br>', {encoding: 'utf-8'}, function (err) {
    console.log('写入完毕');
});

fs.writeFile('write.txt', new Buffer('第二行文字'), {encoding: 'utf-8', flag: 'a'}, function (err) {
    console.log('写入完毕');
});