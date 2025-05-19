import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const filePath = "./files/index.html";
  // Wiht streams
  if (req.url === "/" && req.method === "GET") {
    const readSteam = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    readSteam.pipe(res);
  }
  // Without streams
  if (req.url === "/no-stream" && req.method === "GET") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading file on server");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
