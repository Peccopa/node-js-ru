import express, { type RequestHandler } from 'express';
import morgan from 'morgan';
// import qs from 'querystring';

const app = express();

// const logger: RequestHandler = (req, _res, next) => {
//   console.log(req.method, req.path);
//   next();
// };

// app.use(logger);

// app.use((req, _res, next) => {
//   let data = '';
//   req.on('data', (chunk) => (data += chunk));
//   req.on('end', () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;
//     next();
//   });
// });

app.use(morgan('tiny'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   // console.log(req.headers['content-type']);

//   if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//     let data = '';
//     req.on('data', (chunk) => (data += chunk));
//     req.on('end', () => {
//       const parsedFormData = qs.parse(data);
//       req.body = parsedFormData;
//       // console.log(parsedFormData);
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.use((req, res) => {
  console.log(req.body);
  return res.send('This is express server');
});

app.listen(5000, () => console.log('Server is listening at port 5000'));
