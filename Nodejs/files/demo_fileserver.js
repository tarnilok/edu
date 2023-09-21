const http = require('http')
const fs = require('fs')
const url = require('url')


http.createServer(function(req, res) {
    const q = url.parse(req.url, true)
    const file = '.' + q.pathname + '.html'
    fs.readFile(file, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8082)