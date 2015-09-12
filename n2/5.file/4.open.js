var fs = require('fs');

fs.open('./1.txt', 'r', 438, function (er, fd) {
    // fd, buffer, offset, length, position, callback
    var size = fs.fstatSync(fd).size;
    var buffer = new Buffer(size);
    fs.read(fd, buffer, 0, size, 0, function (err, bytelength, data) {
        console.log(buffer.toString());
    });
});

//process.stdin.on('data', function (data) {
//    console.log(data.toString())
//})