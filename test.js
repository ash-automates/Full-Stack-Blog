const http = require("http");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World");
  res.end();
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
