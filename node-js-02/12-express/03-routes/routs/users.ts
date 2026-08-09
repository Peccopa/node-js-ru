import express = require('express');
import {
  deleteUserHandler,
  getSingleUserHandler,
  getUsersHandler,
  postUsersHandler,
} from '../controllers/users';

const router = express.Router();

router.get('', getUsersHandler);
router.post('', postUsersHandler);
router.get('/:userId', getSingleUserHandler);
router.delete('/:userId', deleteUserHandler);

export default router;
