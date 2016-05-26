var http = require('http');
var uRl = process.argv[2];

http.get(uRl, function(result) {
    result.setEncoding('utf8');
    result.on('error', function (err) {
        console.error(err);
    });
    result.on('data', function (dat) {
        console.log(dat);
    });
});