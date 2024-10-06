import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import SERVER, { USERNAME as ADMIN, PASSWORD } from "./mixed-exports.mjs";
console.log(season, temperature);
console.log(isRaining, humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

console.log(SERVER, ADMIN, PASSWORD);
