import { Router } from 'express';
import { body } from 'express-validator';
import { register, login, getMe, updateProfile } from '../controllers/authController.js';
import authMiddleware from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/auth/register
router.post('/register',
  authLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('phone').optional().trim().isLength({ max: 15 }),
  ],
  validate,
  register
);

// POST /api/auth/login
router.post('/login',
  authLimiter,
  [
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  login
);

// GET /api/auth/me
router.get('/me', authMiddleware, getMe);

// PUT /api/auth/profile
router.put('/profile',
  authMiddleware,
  [
    body('name').optional().trim().notEmpty().isLength({ max: 100 }),
    body('phone').optional().trim().isLength({ max: 15 }),
  ],
  validate,
  updateProfile
);

export default router;
