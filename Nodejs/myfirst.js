const http = require("http");
const myModules = require("./myModules");
const url = require("url");
const fs = require("fs");

// http://localhost:8080/summer/winter/?year=2023&month=april
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(myModules.nameHandler("Okan"));
    res.write("<br/>" + myModules.myDateTime());
    res.write("<br/>" + req.url);
    const q = url.parse(req.url, true);
    const txt = q.query.year + " " + q.query.month;
    res.write('<br/>' + q.search)
    res.write("<br/>" + txt);
    res.write("<br/>" + q.host);
    res.write("<br/>" + q.pathname);
    res.write("<br/>" + q.pathname.split("/")[1]);

    fs.readFile("demofile1.html", function (err, data) {
      res.write("<br/>" + "is it?");
      res.write(data);
    });
    res.end("<br/>" + "Hello World");
  })
  .listen(8080);


// http://localhost:8081/
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("demofile1.html", function (err, data) {
      res.write("<br/>" + "is it?");
      res.write(data);
      res.end("<br/>" + "Hello World");
    });
  })
  .listen(8081);
