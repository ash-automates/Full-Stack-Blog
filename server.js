const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/about.html";
      break;
    default:
      path += "/404.html";
      break;
  }
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
