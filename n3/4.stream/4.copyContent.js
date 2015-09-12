var fs = require('fs');
var read = fs.createReadStream('./source.txt');
var write = fs.createWriteStream('./target.txt');
read.on('data', function (data) {
    write.write(data);
});

read.on('end', function (data) {
    write.end(data);
});