import express from 'express';
import { getCardsList, saveCard } from '../controller/card.controller.js';
import { validateJWT } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', validateJWT, getCardsList)
router.post('/', validateJWT, saveCard)

export default router;
