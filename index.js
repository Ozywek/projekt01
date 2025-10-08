import http from "node:http";
import fs from "node:fs";

const port = 8000;

const index_html = fs.readFileSync("index.html");
const favicon_ico = fs.readFileSync("favicon.ico");

const server = http.createServer(function (req, res) {
  if (req.method !== "GET") {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method not allowed\n");
  }
  else if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(index_html);
  }
  else if (req.url === "/favicon.ico") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/vnd.microsoft.icon");
    res.end(favicon_ico);
  }
  else{
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Site not found!\n");
  }
  res.statusCode = 404;
  res.end();
});
server.listen(port);
console.log(`Server listening on port http://localhost:${port}`);
