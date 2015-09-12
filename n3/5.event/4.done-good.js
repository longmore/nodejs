var fs = require('fs');
var EventEmitter = require('events');
var e = new EventEmitter();
var count = 0;
var var1 = '';
var var2 = '';
e.on('1', done);
e.on('2', done);
fs.readFile('1.txt', 'utf-8', function(err, data){
    var1 = data;
    e.emit('1');
});
fs.readFile('2.txt', 'utf-8', function(err, data){
    var2 = data;
    e.emit('1');
});

function done() {
    count++;
    if (count == 2) {
        console.log(var1+var2);
    }
}
