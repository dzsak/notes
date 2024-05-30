import express from 'express';
import { signup, login, googleAuth, signout } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/google', googleAuth)
router.get('/signout', signout)

export default router;
