const formidable = require("formidable");
const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    // const urlData = url.parse(req.url, true)
    // console.log(urlData)
    console.log(req.url);
    if (req.url === "/fileupload") {
      const form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        const oldpath = files.filetoupload.filepath;
        const newpath =
          "/Users/korayeker/Desktop/" + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("file uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br/>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8083);
