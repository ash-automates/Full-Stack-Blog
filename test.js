const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello World");
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
