/**
 * Created by longmore on 15/9/4.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.end('this is a demo file')
}).listen(8080);