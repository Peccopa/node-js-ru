import type express = require('express');

const getCommentsHandler: express.RequestHandler = (_req, res) => {
  res.send('Gets comments route');
};
const getSingleCommentHandler: express.RequestHandler = (req, res) => {
  res.send(`Get comment route. CommentId ${req.params.commentId}`);
};
const postCommentsHandler: express.RequestHandler = (_req, res) => {
  res.send('Post comments route');
};
const deleteSingleCommentHandler: express.RequestHandler = (req, res) => {
  res.send(`Delete comment route. CommentId ${req.params.commentId}`);
};

export {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
};
