import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { adminService } from '../services/bookingService';
import { formatCurrency, formatDate, getStatusColor } from '../utils/validators';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Button from '../components/ui/Button';

export default function AdminPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [tab, setTab] = useState('dashboard');

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const { data } = await adminService.getDashboard();
      setStats(data.data.stats);
      setBookings(data.data.recentBookings);
    } catch (err) {
      console.error('Failed to load dashboard:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadBookings = async (filter = '') => {
    try {
      setLoading(true);
      const params = {};
      if (filter) params.status = filter;
      const { data } = await adminService.getBookings(params);
      setBookings(data.data.bookings);
    } catch (err) {
      console.error('Failed to load bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadCustomers = async () => {
    try {
      setLoading(true);
      const { data } = await adminService.getCustomers();
      setCustomers(data.data.customers);
    } catch (err) {
      console.error('Failed to load customers:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async () => {
    try {
      setLoading(true);
      const { data } = await adminService.getMessages();
      setMessages(data.data.messages);
    } catch (err) {
      console.error('Failed to load messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await adminService.updateBookingStatus(id, newStatus);
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    if (newTab === 'dashboard') loadDashboard();
    if (newTab === 'bookings') loadBookings(statusFilter);
    if (newTab === 'customers') loadCustomers();
    if (newTab === 'messages') loadMessages();
  };

  if (loading && !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-dark-400 text-sm mt-1">Welcome, {user?.name}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-dark-800 rounded-xl p-1 mb-8 w-fit flex-wrap">
          {['dashboard', 'bookings', 'customers', 'messages'].map(t => (
            <button
              key={t}
              onClick={() => handleTabChange(t)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium capitalize transition-all ${tab === t ? 'bg-primary-600 text-white shadow-lg' : 'text-dark-400 hover:text-white'}`}
            >
              {t === 'messages' ? `Inquiries (${stats?.unreadMessages || 0})` : t}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {tab === 'dashboard' && stats && (
          <>
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Bookings', value: stats.totalBookings, icon: '📋', color: 'from-blue-500 to-blue-600' },
                { label: 'Revenue', value: formatCurrency(stats.totalRevenue), icon: '💰', color: 'from-green-500 to-green-600' },
                { label: 'Customers', value: stats.totalCustomers, icon: '👥', color: 'from-purple-500 to-purple-600' },
                { label: 'Pending Bookings', value: stats.pendingBookings, icon: '⏳', color: 'from-amber-500 to-amber-600' },
              ].map((stat, i) => (
                <div key={i} className="bg-dark-800 rounded-xl p-5 border border-dark-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-sm font-bold opacity-80`}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-dark-700 flex justify-between items-center">
                <h2 className="font-bold">Recent Bookings</h2>
                <button onClick={() => handleTabChange('bookings')} className="text-sm text-primary-400 hover:underline">
                  View All →
                </button>
              </div>
              {bookings.length === 0 ? (
                <div className="p-8 text-center text-dark-500">No bookings yet</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-dark-400 text-xs uppercase border-b border-dark-700">
                      <tr>
                        <th className="px-6 py-3 text-left">Customer</th>
                        <th className="px-6 py-3 text-left">Service</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Amount</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-dark-700">
                      {bookings.map(booking => (
                        <tr key={booking.id} className="hover:bg-dark-700/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-medium">{booking.users?.name || 'N/A'}</div>
                            <div className="text-dark-500 text-xs">{booking.users?.email}</div>
                          </td>
                          <td className="px-6 py-4">{booking.services?.name || 'N/A'}</td>
                          <td className="px-6 py-4 text-dark-300">{formatDate(booking.booking_date)}</td>
                          <td className="px-6 py-4 font-medium text-primary-400">{formatCurrency(booking.total_amount)}</td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={booking.status}
                              onChange={(e) => updateStatus(booking.id, e.target.value)}
                              className="bg-dark-700 border border-dark-600 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {/* Bookings Tab */}
        {tab === 'bookings' && (
          <div className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-dark-700 flex flex-wrap justify-between items-center gap-4">
              <h2 className="font-bold">All Bookings</h2>
              <div className="flex gap-2 flex-wrap">
                {['', 'pending', 'confirmed', 'completed', 'cancelled'].map(status => (
                  <button
                    key={status}
                    onClick={() => { setStatusFilter(status); loadBookings(status); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${statusFilter === status ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-400 hover:text-white'}`}
                  >
                    {status || 'All'}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="p-12"><LoadingSpinner /></div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-dark-400 text-xs uppercase border-b border-dark-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Customer</th>
                      <th className="px-6 py-3 text-left">Service</th>
                      <th className="px-6 py-3 text-left">Date</th>
                      <th className="px-6 py-3 text-left">Phone</th>
                      <th className="px-6 py-3 text-left">Amount</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-700">
                    {bookings.map(booking => (
                      <tr key={booking.id} className="hover:bg-dark-700/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium">{booking.users?.name || 'N/A'}</div>
                          <div className="text-dark-500 text-xs">{booking.users?.email}</div>
                        </td>
                        <td className="px-6 py-4">{booking.services?.name || 'N/A'}</td>
                        <td className="px-6 py-4 text-dark-300">{formatDate(booking.booking_date)}</td>
                        <td className="px-6 py-4 text-dark-300">{booking.phone}</td>
                        <td className="px-6 py-4 font-medium text-primary-400">{formatCurrency(booking.total_amount)}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={booking.status}
                            onChange={(e) => updateStatus(booking.id, e.target.value)}
                            className="bg-dark-700 border border-dark-600 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Customers Tab */}
        {tab === 'customers' && (
          <div className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-dark-700">
              <h2 className="font-bold">Customer Management</h2>
            </div>

            {loading ? (
              <div className="p-12"><LoadingSpinner /></div>
            ) : customers.length === 0 ? (
              <div className="p-12 text-center text-dark-500">No registered customers found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-dark-400 text-xs uppercase border-b border-dark-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Phone</th>
                      <th className="px-6 py-3 text-left">Role</th>
                      <th className="px-6 py-3 text-left">Joined Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-700">
                    {customers.map(customer => (
                      <tr key={customer.id} className="hover:bg-dark-700/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">{customer.name}</td>
                        <td className="px-6 py-4 text-dark-300">{customer.email}</td>
                        <td className="px-6 py-4 text-dark-300">{customer.phone || 'N/A'}</td>
                        <td className="px-6 py-4 text-dark-300 capitalize">{customer.role}</td>
                        <td className="px-6 py-4 text-dark-400">{formatDate(customer.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Messages/Inquiries Tab */}
        {tab === 'messages' && (
          <div className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-dark-700">
              <h2 className="font-bold">Consultation Inquiries</h2>
            </div>

            {loading ? (
              <div className="p-12"><LoadingSpinner /></div>
            ) : messages.length === 0 ? (
              <div className="p-12 text-center text-dark-500">No consultation requests found.</div>
            ) : (
              <div className="p-6 space-y-4">
                {messages.map(msg => (
                  <div key={msg.id} className="bg-dark-750 p-5 rounded-xl border border-dark-700 hover:border-primary-500 transition-colors">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="font-bold text-white text-base">{msg.name}</h3>
                        <div className="text-xs text-dark-400 mt-0.5">
                          📞 {msg.phone || 'N/A'} &nbsp;|&nbsp; 📧 {msg.email}
                        </div>
                      </div>
                      <span className="text-xs text-dark-400 font-medium">
                        📩 Received: {formatDate(msg.created_at)}
                      </span>
                    </div>
                    <div className="bg-dark-900 rounded-lg p-4 text-sm text-dark-200 whitespace-pre-line leading-relaxed font-mono">
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
