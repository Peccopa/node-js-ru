import { season, temperature } from './named-exports.js';
import { isRaining, humidity } from './inline-exports.js';
import getDataFromServer from './default-export.js';
import SERVER, { USERNAME as ADMIN, PASSWORD } from './mixed-exports.js';
console.log(season, temperature);
console.log(isRaining, humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

console.log(SERVER, ADMIN, PASSWORD);
