var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var urls = req.url.split('?');
    var pathName = urls[0];
    var query = urls[1];
    if (query) {
        var queryObj = {};
        var fields = query.split('&');
        fields.forEach(function (field) {
            var vals = field.split('=');
            queryObj[vals[0]] = vals[1];
        });
    }
    console.log(urls);
    if (pathName == '/') {
        fs.readFile('./index.html', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (pathName == '/favicon.ico') {
        fs.readFile('./favicon.ico', function (err, data) {
            res.write(data);
            res.end();
        })
    } else if (pathName == '/style.css') {
        fs.readFile('./style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (pathName == '/params') {
        res.end(JSON.stringify(queryObj));
    }
}).listen(8080);