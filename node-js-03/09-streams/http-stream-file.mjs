import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filePath = "./files/index.html";
    const readSteam = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    readSteam.pipe(res);
  }
});
