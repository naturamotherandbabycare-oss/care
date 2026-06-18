import { Router } from 'express';
import { body } from 'express-validator';
import { createBooking, getMyBookings, getBookingById, cancelBooking } from '../controllers/bookingController.js';
import authMiddleware from '../middleware/auth.js';
import validate from '../middleware/validate.js';

const router = Router();

// All booking routes require authentication
router.use(authMiddleware);

// POST /api/bookings
router.post('/',
  [
    body('service_id').notEmpty().withMessage('Service is required').isUUID(),
    body('booking_date').notEmpty().withMessage('Booking date is required').isDate(),
    body('booking_time').notEmpty().withMessage('Booking time is required'),
    body('address').trim().notEmpty().withMessage('Address is required'),
    body('city').optional().trim().isLength({ max: 100 }),
    body('pincode').optional().trim().isLength({ max: 10 }),
    body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ max: 15 }),
    body('notes').optional().trim().isLength({ max: 500 }),
  ],
  validate,
  createBooking
);

// GET /api/bookings/my
router.get('/my', getMyBookings);

// GET /api/bookings/:id
router.get('/:id', getBookingById);

// PUT /api/bookings/:id/cancel
router.put('/:id/cancel', cancelBooking);

export default router;
