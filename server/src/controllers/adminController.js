import { supabase } from '../config/db.js';

// GET /api/admin/dashboard — Dashboard stats
export const getDashboardStats = async (req, res, next) => {
  try {
    // Total bookings
    const { count: totalBookings } = await supabase
      .from('bookings')
      .select('*', { count: 'exact', head: true });

    // Pending bookings
    const { count: pendingBookings } = await supabase
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    // Completed bookings
    const { count: completedBookings } = await supabase
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'completed');

    // Total customers
    const { count: totalCustomers } = await supabase
      .from('users')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'customer');

    // Total revenue (from completed bookings)
    const { data: revenueData } = await supabase
      .from('bookings')
      .select('total_amount')
      .eq('status', 'completed');

    const totalRevenue = revenueData
      ? revenueData.reduce((sum, b) => sum + parseFloat(b.total_amount || 0), 0)
      : 0;

    // Recent bookings
    const { data: recentBookings } = await supabase
      .from('bookings')
      .select(`
        *,
        users (name, email, phone),
        services (name, price)
      `)
      .order('created_at', { ascending: false })
      .limit(5);

    // Unread messages
    const { count: unreadMessages } = await supabase
      .from('contact_messages')
      .select('*', { count: 'exact', head: true })
      .eq('is_read', false);

    res.json({
      success: true,
      data: {
        stats: {
          totalBookings: totalBookings || 0,
          pendingBookings: pendingBookings || 0,
          completedBookings: completedBookings || 0,
          totalCustomers: totalCustomers || 0,
          totalRevenue,
          unreadMessages: unreadMessages || 0,
        },
        recentBookings: recentBookings || [],
      },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/admin/bookings — List all bookings
export const getAllBookings = async (req, res, next) => {
  try {
    const { status, search, page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('bookings')
      .select(`
        *,
        users (name, email, phone),
        services (name, price, category)
      `, { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }

    const { data: bookings, error, count } = await query;

    if (error) throw error;

    // Client-side search filter (Supabase free tier limitations)
    let filteredBookings = bookings;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredBookings = bookings.filter(b => 
        b.users?.name?.toLowerCase().includes(searchLower) ||
        b.users?.email?.toLowerCase().includes(searchLower) ||
        b.services?.name?.toLowerCase().includes(searchLower) ||
        b.phone?.includes(search)
      );
    }

    res.json({
      success: true,
      data: {
        bookings: filteredBookings,
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

// PUT /api/admin/bookings/:id/status — Update booking status
export const updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', req.params.id)
      .select(`
        *,
        users (name, email),
        services (name, price)
      `)
      .single();

    if (error) throw error;

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found.',
      });
    }

    res.json({
      success: true,
      message: `Booking status updated to "${status}".`,
      data: { booking },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/admin/customers — List all customers
export const getAllCustomers = async (req, res, next) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    const { data: customers, error, count } = await supabase
      .from('users')
      .select('id, name, email, phone, role, created_at', { count: 'exact' })
      .eq('role', 'customer')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    res.json({
      success: true,
      data: {
        customers,
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

// GET /api/admin/customers/:id — Get customer with bookings
export const getCustomerById = async (req, res, next) => {
  try {
    const { data: customer, error } = await supabase
      .from('users')
      .select('id, name, email, phone, role, created_at')
      .eq('id', req.params.id)
      .eq('role', 'customer')
      .single();

    if (error || !customer) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found.',
      });
    }

    // Get customer's bookings
    const { data: bookings } = await supabase
      .from('bookings')
      .select(`*, services (name, price, category)`)
      .eq('user_id', req.params.id)
      .order('created_at', { ascending: false });

    res.json({
      success: true,
      data: { customer, bookings: bookings || [] },
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/contact — Submit contact message
export const submitContactMessage = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone ? phone.trim() : null,
        message: message.trim(),
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: 'Your message has been sent! We will get back to you soon.',
      data: { id: data.id },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/contact — List all messages (admin)
export const getAllMessages = async (req, res, next) => {
  try {
    const { is_read, page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('contact_messages')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (is_read !== undefined) {
      query = query.eq('is_read', is_read === 'true');
    }

    const { data: messages, error, count } = await query;

    if (error) throw error;

    res.json({
      success: true,
      data: {
        messages,
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
