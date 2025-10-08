import http from "node:http";
import fs from "node:fs";

const port = 8000;

const index_html = fs.readFileSync("index.html");
const favicon_ico = fs.readFileSync("favicon.ico");

const server = http.createServer(function (req, res) {
  if (req.url && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(index_html);
  }
  if (req.url && req.url === "/favicon.ico") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/vnd.microsoft.icon");
    res.end(favicon_ico);
  }
  res.statusCode = 404;
  res.end();
});
server.listen(port);
console.log(`Server listening on port http://localhost:${port}`);
