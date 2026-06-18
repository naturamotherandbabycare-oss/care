import { Router } from 'express';
import { getAllServices, getServiceById } from '../controllers/userController.js';

const router = Router();

// GET /api/services — Public
router.get('/', getAllServices);

// GET /api/services/:id — Public
router.get('/:id', getServiceById);

export default router;
