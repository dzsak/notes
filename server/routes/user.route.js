import express from 'express';
import { user } from '../controller/user.controller.js';
import { validateJWT } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', validateJWT, user)

export default router;
