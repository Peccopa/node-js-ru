import express = require('express');

export const getRootHandler: express.RequestHandler = (_req, res) => {
  res.send('Get root route');
};
