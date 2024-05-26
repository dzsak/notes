import express from 'express';
import { test } from '../controller/user.controller.js';
import { validateJWT } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', validateJWT, test)

export default router;
