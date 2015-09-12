var fs = require('fs');
function exec (cur, previous) {
    if (Date.parse(previous.ctime) == 0) {
        console.log('创建');
    } else if (Date.parse(cur.ctime) == 0) {
        console.log('删除');
    } else {
        console.log('修改');
    }
}
fs.watchFile('2.txt', {interval: 0}, exec);