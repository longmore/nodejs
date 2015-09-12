var fs = require('fs');
var count = 0;
var var1 = '';
var var2 = '';
fs.readFile('1.txt', 'utf-8', function(err, data){
    var1 = data;
    done();
});
fs.readFile('2.txt', 'utf-8', function(err, data){
    var2 = data;
    done();
});

function done() {
    count++;
    if (count == 2) {
        console.log(var1+var2);
    }
}
