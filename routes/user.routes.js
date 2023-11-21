const router = require('express-promise-router')();
import { createUser, listAllUsers, selectUserById, updateUser, deleteUser } from '../controllers/user.controller';

router.post('/user', createUser);
router.get('/users', listAllUsers);
router.get('/user/:id', selectUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
export default router;