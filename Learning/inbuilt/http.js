let http = require("http");

server = http.createServer(function (req, res) {
  res.write("hello world Python");
  res.end();
});

server.listen(7800);
