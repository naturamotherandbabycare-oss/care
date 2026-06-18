import { supabase } from '../config/db.js';

// POST /api/bookings — Create booking
export const createBooking = async (req, res, next) => {
  try {
    const { service_id, booking_date, booking_time, address, city, pincode, phone, notes } = req.body;

    // Get service details for total amount
    const { data: service, error: serviceError } = await supabase
      .from('services')
      .select('id, name, price')
      .eq('id', service_id)
      .eq('is_active', true)
      .single();

    if (serviceError || !service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found or is currently unavailable.',
      });
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        user_id: req.user.id,
        service_id,
        booking_date,
        booking_time,
        address: address.trim(),
        city: city ? city.trim() : null,
        pincode: pincode ? pincode.trim() : null,
        phone: phone.trim(),
        notes: notes ? notes.trim() : null,
        total_amount: service.price,
        status: 'pending',
      })
      .select(`
        *,
        services (name, price, duration_minutes)
      `)
      .single();

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: 'Booking created successfully! We will confirm shortly.',
      data: { booking },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/bookings/my — Get user's bookings
export const getMyBookings = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('bookings')
      .select(`
        *,
        services (name, price, duration_minutes, category)
      `, { count: 'exact' })
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }

    const { data: bookings, error, count } = await query;

    if (error) throw error;

    res.json({
      success: true,
      data: {
        bookings,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: count,
          pages: Math.ceil(count / limit),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/bookings/:id — Get single booking
export const getBookingById = async (req, res, next) => {
  try {
    const { data: booking, error } = await supabase
      .from('bookings')
      .select(`
        *,
        services (name, description, price, duration_minutes, category)
      `)
      .eq('id', req.params.id)
      .eq('user_id', req.user.id)
      .single();

    if (error || !booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found.',
      });
    }

    res.json({
      success: true,
      data: { booking },
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/bookings/:id/cancel — Cancel booking
export const cancelBooking = async (req, res, next) => {
  try {
    // Check booking exists and belongs to user
    const { data: existing } = await supabase
      .from('bookings')
      .select('id, status')
      .eq('id', req.params.id)
      .eq('user_id', req.user.id)
      .single();

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found.',
      });
    }

    if (existing.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Booking is already cancelled.',
      });
    }

    if (existing.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel a completed booking.',
      });
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('id', req.params.id)
      .select(`*, services (name, price)`)
      .single();

    if (error) throw error;

    res.json({
      success: true,
      message: 'Booking cancelled successfully.',
      data: { booking },
    });
  } catch (error) {
    next(error);
  }
};
