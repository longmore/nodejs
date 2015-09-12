var fs = require('fs');
var BufferSize = '1024';
function copy(src, dest) {
    var fdSrc, fdDest;
    var readSofar = 0; //读到的位置
    var buff = new Buffer(BufferSize);
    fdSrc = fs.openSync(src, 'r');
    fdDest = fs.openSync(dest, 'w');
    var read = 0; //本次读到的字节数
    do {
        read = fs.readSync(fdSrc, buff, 0, BufferSize, readSofar);
        fs.writeSync(fdDest, buff, 0, read);
        readSofar += read;
    } while (read == readSofar);
    fs.close(fdSrc);
    fs.close(fdDest);
}
copy('1.txt', '2.txt');