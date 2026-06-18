import { supabase } from '../config/db.js';

// GET /api/services — List all active services
export const getAllServices = async (req, res, next) => {
  try {
    const { category } = req.query;

    let query = supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: true });

    if (category) {
      query = query.eq('category', category);
    }

    const { data: services, error } = await query;

    if (error) throw error;

    res.json({
      success: true,
      data: { services },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/services/:id — Get single service
export const getServiceById = async (req, res, next) => {
  try {
    const { data: service, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', req.params.id)
      .eq('is_active', true)
      .single();

    if (error || !service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found.',
      });
    }

    res.json({
      success: true,
      data: { service },
    });
  } catch (error) {
    next(error);
  }
};
