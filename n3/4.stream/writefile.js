var fs = require('fs');
fs.writeFile('text.txt', new Buffer(129*1024));