var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');// npm install mime
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
    if (pathName == '/') {
        fs.readFile('./index.html', function (err, data) {

            res.write(data);
            res.end();
        });
    } else if (pathName == '/favicon.ico') {
        fs.readFile('./favicon.ico', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (pathName == '/params') {
        res.end(JSON.stringify(queryObj));
    } else if (pathName == '/ajax') {
        res.end('国庆');
    } else {
        var fileName = '.' + pathName;
        res.setHeader('Content-Type', mime.lookup(pathName));
        fs.readFile(fileName, function (err, data) {
            res.write(data);
            res.end();
        });
    }
}).listen(8080);