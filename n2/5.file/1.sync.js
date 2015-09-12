var fs = require('fs');

var data = fs.readFileSync('./1.txt', 'utf-8');
console.log(data);

fs.readFile('./1.txt', 'utf-8', function (err, data) {
    console.log(data);
    console.log('2');
});