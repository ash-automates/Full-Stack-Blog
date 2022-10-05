const http = require("http");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  const random = lodash.random(0, 3);
  console.log(random);
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
