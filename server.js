var http = require('http'),
    static = require('node-static'),
    file = new (static.Server)('.');

var server = http.createServer( function(req,res) {
  req.addListener('end', function () {
    file.serve(req,res);
  }).resume();
}).listen(1337);
