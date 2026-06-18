import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { contactService } from '../services/bookingService';
import { SERVICES } from '../utils/constants';

export default function ContactPage() {
  const [form, setForm] = useState({
    motherName: '',
    phone: '',
    email: '',
    dueDate: '',
    city: '',
    serviceRequired: '',
    specialRequirements: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.motherName || !form.phone || !form.serviceRequired) {
      setError("Please fill in all required fields (Mother's Name, Phone, and Service Required).");
      return;
    }

    // Auto-generate email based on phone if not provided, to satisfy backend validator
    const formattedPhone = form.phone.replace(/\D/g, '');
    const submitEmail = form.email.trim() || `${formattedPhone || 'client'}@naturababycare.in`;

    const combinedMessage = `
Due / Birth Date: ${form.dueDate || 'Not provided'}
City: ${form.city || 'Not provided'}
Service Required: ${form.serviceRequired}
Special Requirements: ${form.specialRequirements || 'None'}
    `.trim();

    setLoading(true);
    try {
      await contactService.submit({
        name: form.motherName.trim(),
        email: submitEmail,
        phone: form.phone.trim(),
        message: combinedMessage,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-dark-50">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            Book a Consultation
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-dark-900 tracking-tight">
            Let's talk about your <span className="text-primary-600">care needs</span>
          </h1>
          <p className="mt-4 text-lg text-dark-500 max-w-2xl mx-auto">
            Reach out and our care coordinators will get back to you within 2 hours. The first consultation is always free — no pressure, no commitment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Contact Details</h2>
              <p className="text-dark-500 mb-8">Our coordinators are available 7 days a week to help you match with the best caregivers.</p>

              <div className="space-y-4">
                {[
                  { icon: '📞', label: 'Phone / WhatsApp', value: '+91 98988 09630', href: 'tel:+919898809630' },
                  { icon: '📧', label: 'Email', value: 'hello@naturababycare.in', href: 'mailto:hello@naturababycare.in' },
                  { icon: '📍', label: 'Service Areas', value: 'Ahmedabad · Surat · Bhavnagar · Rajkot' },
                  { icon: '🕐', label: 'Response Time', value: 'Within 2 hours · 7 days a week' },
                ].map((detail, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-xl shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-dark-400 font-semibold">{detail.label}</div>
                      {detail.href ? (
                        <a href={detail.href} className="text-dark-900 font-bold hover:text-primary-600 transition-colors">
                          {detail.value}
                        </a>
                      ) : (
                        <div className="text-dark-900 font-bold">{detail.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919898809630?text=Hi%20Natura!%20I%27d%20like%20to%20know%20more%20about%20your%20postnatal%20care%20packages%20in%20Gujarat."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-primary-50 rounded-2xl p-10 text-center border border-primary-200">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">Consultation Requested!</h3>
                  <p className="text-dark-500">Thank you for reaching out. A Natura coordinator will call or WhatsApp you within 2 hours.</p>
                  <Button className="mt-6" onClick={() => { setSubmitted(false); setForm({ motherName: '', phone: '', email: '', dueDate: '', city: '', serviceRequired: '', specialRequirements: '' }); }}>
                    Request Another Consultation
                  </Button>
                </div>
              ) : (
                <div className="bg-dark-50 rounded-2xl p-8 border border-dark-100">
                  <h3 className="text-xl font-bold text-dark-900 mb-6">Book Free Consultation</h3>
                  
                  {error && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Mother's Name *"
                      placeholder="Your full name"
                      value={form.motherName}
                      onChange={e => setForm({ ...form, motherName: e.target.value })}
                      required
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Phone Number *"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                      <Input
                        label="Email (Optional)"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Due / Birth Date"
                        type="date"
                        placeholder="dd-mm-yyyy"
                        value={form.dueDate}
                        onChange={e => setForm({ ...form, dueDate: e.target.value })}
                      />
                      <Input
                        label="City"
                        placeholder="Your city (e.g. Ahmedabad)"
                        value={form.city}
                        onChange={e => setForm({ ...form, city: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-1">
                        Service Required *
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-white border border-dark-200 rounded-xl text-dark-950 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 text-sm font-medium"
                        value={form.serviceRequired}
                        onChange={e => setForm({ ...form, serviceRequired: e.target.value })}
                        required
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map(service => (
                          <option key={service.id} value={service.name}>
                            {service.icon} {service.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Input
                      label="Any Special Requirements"
                      type="textarea"
                      placeholder="Any specific care requests or recovery conditions..."
                      value={form.specialRequirements}
                      onChange={e => setForm({ ...form, specialRequirements: e.target.value })}
                    />

                    <Button type="submit" size="lg" className="w-full mt-4" loading={loading}>
                      Book Free Consultation
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
