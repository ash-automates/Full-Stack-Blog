const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  res.setHeader("Content-Type", "text/html");
  if (res.statusCode === 301) {
    res.end();
  } else {
    fs.readFile(path, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
