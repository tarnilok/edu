const fs = require("fs");
const http = require('http')


http.createServer(function (req, res) {
  const rs = fs.readFile("../theNewOne.txt", 'utf-8', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if(err) return res.write('error occured try again')
    res.write(data)
    res.end()

  });
  // rs.on("open", function () {
  //   console.log("it is open");
  // });
}).listen(8088)
