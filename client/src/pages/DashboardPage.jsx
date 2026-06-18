import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useBookings } from '../hooks/useBookings';
import { formatCurrency, formatDate, getStatusColor } from '../utils/validators';
import { SERVICES } from '../utils/constants';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Modal from '../components/ui/Modal';
import Input from '../components/ui/Input';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { bookings, loading, error, createBooking, cancelBooking, fetchBookings } = useBookings();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    service_id: '', booking_date: '', booking_time: '', address: '', city: '', pincode: '', phone: '', notes: '',
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState('');
  const navigate = useNavigate();

  const handleCreateBooking = async (e) => {
    e.preventDefault();
    setBookingError('');
    if (!bookingForm.service_id || !bookingForm.booking_date || !bookingForm.booking_time || !bookingForm.address || !bookingForm.phone) {
      setBookingError('Please fill in all required fields.');
      return;
    }
    setBookingLoading(true);
    const result = await createBooking(bookingForm);
    setBookingLoading(false);
    if (result.success) {
      setBookingSuccess('Booking created successfully!');
      setShowBookingModal(false);
      setBookingForm({ service_id: '', booking_date: '', booking_time: '', address: '', city: '', pincode: '', phone: user?.phone || '', notes: '' });
      fetchBookings();
    } else {
      setBookingError(result.message);
    }
  };

  const handleCancel = async (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      await cancelBooking(id);
    }
  };

  const upcomingBookings = bookings.filter(b => b.status === 'pending' || b.status === 'confirmed');
  const pastBookings = bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');

  return (
    <div className="min-h-screen bg-dark-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-dark-900">
              Welcome back, <span className="text-primary-600">{user?.name?.split(' ')[0]}</span> 👋
            </h1>
            <p className="text-dark-500 text-sm mt-1">Manage your bookings and profile</p>
          </div>
          <Button onClick={() => setShowBookingModal(true)} icon="✨">
            Book a Cleaning
          </Button>
        </div>

        {/* Success message */}
        {bookingSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm flex justify-between items-center">
            {bookingSuccess}
            <button onClick={() => setBookingSuccess('')} className="text-green-500 hover:text-green-700">✕</button>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-dark-100">
            <div className="text-2xl font-bold text-dark-900">{bookings.length}</div>
            <div className="text-sm text-dark-500">Total Bookings</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-dark-100">
            <div className="text-2xl font-bold text-primary-600">{upcomingBookings.length}</div>
            <div className="text-sm text-dark-500">Upcoming</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-dark-100">
            <div className="text-2xl font-bold text-green-600">{pastBookings.filter(b => b.status === 'completed').length}</div>
            <div className="text-sm text-dark-500">Completed</div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-2xl border border-dark-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-dark-100">
            <h2 className="text-lg font-bold text-dark-900">Your Bookings</h2>
          </div>

          {loading ? (
            <div className="p-12"><LoadingSpinner /></div>
          ) : bookings.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-semibold text-dark-900">No bookings yet</h3>
              <p className="text-dark-500 text-sm mt-1">Book your first cleaning service to get started!</p>
              <Button className="mt-4" onClick={() => setShowBookingModal(true)}>Book Now</Button>
            </div>
          ) : (
            <div className="divide-y divide-dark-100">
              {bookings.map(booking => (
                <div key={booking.id} className="px-6 py-4 hover:bg-dark-50/50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-semibold text-dark-900">{booking.services?.name || 'Service'}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-dark-500">
                        <span>📅 {formatDate(booking.booking_date)}</span>
                        <span>🕐 {booking.booking_time}</span>
                        <span>💰 {formatCurrency(booking.total_amount)}</span>
                      </div>
                      <p className="text-xs text-dark-400 mt-1">📍 {booking.address}{booking.city ? `, ${booking.city}` : ''}</p>
                    </div>
                    {(booking.status === 'pending' || booking.status === 'confirmed') && (
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="text-xs text-red-500 hover:text-red-700 font-medium px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 transition-all"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} title="Book a Cleaning" size="lg">
        {bookingError && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{bookingError}</div>
        )}
        <form onSubmit={handleCreateBooking}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-600 mb-1.5">Service *</label>
            <select
              className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
              value={bookingForm.service_id}
              onChange={e => setBookingForm({ ...bookingForm, service_id: e.target.value })}
            >
              <option value="">Select a service...</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.id}>{s.name} — {formatCurrency(s.price)}</option>
              ))}
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Date *" type="date" value={bookingForm.booking_date} onChange={e => setBookingForm({ ...bookingForm, booking_date: e.target.value })} />
            <Input label="Time *" type="time" value={bookingForm.booking_time} onChange={e => setBookingForm({ ...bookingForm, booking_time: e.target.value })} />
          </div>
          <Input label="Address *" placeholder="Full address" value={bookingForm.address} onChange={e => setBookingForm({ ...bookingForm, address: e.target.value })} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="City" placeholder="City" value={bookingForm.city} onChange={e => setBookingForm({ ...bookingForm, city: e.target.value })} />
            <Input label="Pincode" placeholder="Pincode" value={bookingForm.pincode} onChange={e => setBookingForm({ ...bookingForm, pincode: e.target.value })} />
          </div>
          <Input label="Phone *" type="tel" placeholder="+91 XXXXX XXXXX" value={bookingForm.phone} onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })} />
          <Input label="Notes" type="textarea" placeholder="Any special requests..." value={bookingForm.notes} onChange={e => setBookingForm({ ...bookingForm, notes: e.target.value })} />
          <Button type="submit" size="lg" className="w-full" loading={bookingLoading}>
            Confirm Booking
          </Button>
        </form>
      </Modal>
    </div>
  );
}
