import express = require('express');
import {
  deleteSingleCommentHandler,
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
} from '../controllers/comments';

const router = express.Router();

// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler);
router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.delete('/:commentId', deleteSingleCommentHandler);

export default router;
