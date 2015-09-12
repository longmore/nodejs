var fs = require('fs');
fs.mkdir('mkdir', function (err) {
    if (err) {
        console.log('err')
    } else {
        console.log('success')
    }
})
// 级联创建目录
//function makeP (6.path) {
//    var paths = 6.path.split('/');
//    for (var i = 0; i < paths.length; i++) {
//    	var p = paths.slice(0, i).join('/');
//    	var exits = fs.existsSync(p);
//    	if (exits) {
//    		contiute;
//    	} else {
//    		fs.mkdirSync(p);
//    	}
//    }
//}
//makeP('t1/t2/t3');
//fs.stat('1.txt', function (err, stat) {
//	console.log(stat)
//});
//fs.exists('1.txt', function (e) {
//    console.log(e)
//})

//删除空文件夹
//fs.rmdirSync('');

//删除文件
//fs.unlinkSync('');

fs.realpath('./1.txt', function (err ,path) {
    console.log(path)
});