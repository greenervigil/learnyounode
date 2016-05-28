var http = require('http')
var url = require('url')

function parseTime (time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime (time){
    return {
        unixtime: time.getTime()
    }
}

var server = http.createServer(function (rec, res){
    var parseURL = url.parse(rec.url, true)
    var time = new Date(parseURL.query.iso)
    var result

      if (/^\/api\/parsetime/.test(rec.url))
        result = parseTime(time)
      else if (/^\/api\/unixtime/.test(rec.url))
        result = unixTime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
})

server.listen(process.argv[2])
