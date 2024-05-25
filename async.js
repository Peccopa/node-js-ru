// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error));

// const timerPromise = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000));



// const asyncFn = async () => {
//   console.log('Timer starts');
//   const startTime = performance.now();
//   await timerPromise();
//   const endTime = performance.now();
//   console.log('Timer ended', endTime - startTime);
// }
// asyncFn();



const url = 'https://jsonplaceholder.typicode.com/todos';
const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function tryCatch() {
  try {
    const data = await getData(url);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// tryCatch();

