var path = require('path');
/*
 * 把非标准的路径转化为标准路径
 * 1. 解析 .  ..
 * 2. 多个/转成一个/
 * 3. window下/会转成\
 * 4. 如果以/结尾，则保存
 *
 */
console.log(path.normalize('.//a////b//d//..//c//e//..//')); //  a/b/c

// join
console.log(path.join(__dirname, 'a', 'b', '..', 'c'));

//path.basename('')