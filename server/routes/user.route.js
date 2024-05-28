import express from 'express';
import { user } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', user)

export default router;
