import fs from "fs";
import EventEmitter from "events";
const fileEmmiter = new EventEmitter();
const filePath = "./first.txt";

fs.writeFile(filePath, "First file text", () => {
  fileEmmiter.emit("writeComplete");
});

fileEmmiter.on("writeComplete", () => {
  console.log(`File ${filePath} was written`);
  fs.appendFile(filePath, "\nFirst file appended text", () => {
    fileEmmiter.emit("appendComplete");
  });
});

fileEmmiter.on("appendComplete", () => {
  console.log(`Text to the ${filePath} was appended`);
  fs.rename(filePath, "./renamed-first.txt", () => {
    fileEmmiter.emit("renameComplete");
  });
});

fileEmmiter.on("renameComplete", () => {
  console.log(`File ${filePath} was renamed`);
});
