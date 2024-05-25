import { EventEmitter } from "events";
const myEmmiter = new EventEmitter();
const timeoutListenerFn = (seconds, add = "") => {
  console.log(`Timeout event: ${seconds} ${add}`);
};
// Om
myEmmiter.on("timeout", timeoutListenerFn);
setTimeout(() => myEmmiter.emit("timeout", 1), 1000);
setTimeout(() => myEmmiter.emit("timeout", 2), 2000);
myEmmiter.emit("timeout", "start", "start");
// Once
myEmmiter.once("singleEvent", () => {
  console.log("Single event occured!");
});
setTimeout(() => myEmmiter.emit("singleEvent"), 500);
setTimeout(() => myEmmiter.emit("singleEvent"), 1500);
// Remove
setTimeout(() => myEmmiter.off("timeout", timeoutListenerFn), 3000);
setTimeout(() => myEmmiter.emit("timeout", 4), 4000);
