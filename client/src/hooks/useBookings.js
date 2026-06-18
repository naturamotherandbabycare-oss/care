import { useState, useEffect, useCallback } from 'react';
import { bookingService } from '../services/bookingService';

export const useBookings = (autoFetch = true) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  const fetchBookings = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await bookingService.getMyBookings(params);
      setBookings(data.data.bookings);
      setPagination(data.data.pagination);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  }, []);

  const createBooking = async (bookingData) => {
    try {
      setError(null);
      const { data } = await bookingService.create(bookingData);
      setBookings(prev => [data.data.booking, ...prev]);
      return { success: true, booking: data.data.booking };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create booking';
      setError(message);
      return { success: false, message };
    }
  };

  const cancelBooking = async (id) => {
    try {
      setError(null);
      await bookingService.cancel(id);
      setBookings(prev => prev.map(b => 
        b.id === id ? { ...b, status: 'cancelled' } : b
      ));
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to cancel booking';
      setError(message);
      return { success: false, message };
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchBookings();
    }
  }, [autoFetch, fetchBookings]);

  return {
    bookings,
    loading,
    error,
    pagination,
    fetchBookings,
    createBooking,
    cancelBooking,
  };
};

export default useBookings;
