var fs = require('fs');
var out = fs.createWriteStream('./write.txt');
for (var i = 0; i < 1024 * 10; i++) {
    var flag = out.write(i.toString()+'\n');
    //console.log(flag);
}

// 抽干
out.on('drain', function () {
    console.log('-------------cache');
});

var out2 = fs.createWriteStream('./write2.txt');
out2.on('error', function (err) {
    console.log('err')
});
out2.write('123');
out2.end('456');
//out2.write('123');