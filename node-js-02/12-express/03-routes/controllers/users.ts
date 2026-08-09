import type express = require('express');

const getUsersHandler: express.RequestHandler = (_req, res) => {
  res.send('Gets users route');
};
const getSingleUserHandler: express.RequestHandler = (req, res) => {
  res.send(`Get user route. UserId ${req.params.userId}`);
};
const postUsersHandler: express.RequestHandler = (_req, res) => {
  res.send('Post users route');
};
const deleteUserHandler: express.RequestHandler = (req, res) => {
  res.send(`Delete user route. CommentId ${req.params.userId}`);
};

export {
  getUsersHandler,
  getSingleUserHandler,
  postUsersHandler,
  deleteUserHandler,
};
