const fs = require("fs");

fs.appendFile("demofile1.html", "<p>My paragraph222.</p>", function (err) {
  if (err) throw err;
  console.log("saved!");
});
