import express = require('express');
import router from './routs';

const app = express();
app.use(router);

app.listen(5000, () => console.log('Server was started on port 5000'));
