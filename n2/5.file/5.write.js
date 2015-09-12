var fs = require('fs');
var buffer = new Buffer(1);
fs.open('write.txt', 'r+', 438, function (er, fd) {
    fs.write(fd, '发发', 0, 6, 1, function () {
        fs.read(fd, buffer, 0, 1, 1, function(err,bytesRead,data){
            console.log(buffer.toString());
        });
    });
});