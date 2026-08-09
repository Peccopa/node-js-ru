import express = require('express');
import commentsRouter from '../routs/comments';
import usersRouter from '../routs/users';
import rootRouter from '../routs/root';

const router = express.Router();

router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/', rootRouter);

export default router;
