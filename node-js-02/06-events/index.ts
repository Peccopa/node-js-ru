import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();
const timeoutListenerFn = (seconds: number, add = '') => {
  console.log(`Timeout event: ${seconds} ${add}`);
};
// Om
myEmitter.on('timeout', timeoutListenerFn);
setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);
myEmitter.emit('timeout', 'start', 'start');
// Once
myEmitter.once('singleEvent', () => {
  console.log('Single event occurred!');
});
setTimeout(() => myEmitter.emit('singleEvent'), 500);
setTimeout(() => myEmitter.emit('singleEvent'), 1500);
// Remove
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000);
setTimeout(() => myEmitter.emit('timeout', 4), 4000);
