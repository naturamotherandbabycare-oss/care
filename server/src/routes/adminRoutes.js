import { Router } from 'express';
import { body } from 'express-validator';
import { 
  getDashboardStats, 
  getAllBookings, 
  updateBookingStatus, 
  getAllCustomers, 
  getCustomerById,
  submitContactMessage,
  getAllMessages 
} from '../controllers/adminController.js';
import authMiddleware from '../middleware/auth.js';
import adminMiddleware from '../middleware/admin.js';
import validate from '../middleware/validate.js';

const router = Router();

// ── Public contact route ──
router.post('/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('phone').optional().trim().isLength({ max: 15 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
  ],
  validate,
  submitContactMessage
);

// ── Admin routes (all require auth + admin role) ──
router.use(authMiddleware, adminMiddleware);

// GET /api/admin/dashboard
router.get('/dashboard', getDashboardStats);

// GET /api/admin/bookings
router.get('/bookings', getAllBookings);

// PUT /api/admin/bookings/:id/status
router.put('/bookings/:id/status',
  [
    body('status').notEmpty().withMessage('Status is required')
      .isIn(['pending', 'confirmed', 'completed', 'cancelled']),
  ],
  validate,
  updateBookingStatus
);

// GET /api/admin/customers
router.get('/customers', getAllCustomers);

// GET /api/admin/customers/:id
router.get('/customers/:id', getCustomerById);

// GET /api/admin/messages
router.get('/messages', getAllMessages);

export default router;
