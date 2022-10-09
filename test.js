const http = require("http");

const server = http.createServer((req, res) => {});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
