import { useState } from 'react';
import { contactService } from '../../services/bookingService';
import { SERVICES } from '../../utils/constants';

export default function HomeContact() {
  const [form, setForm] = useState({
    motherName: '',
    phone: '',
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
      setError("Please fill in Mother's Name, Phone, and Service Required.");
      return;
    }

    const formattedPhone = form.phone.replace(/\D/g, '');
    const submitEmail = `${formattedPhone || 'client'}@naturababycare.in`;

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
    <section id="contact" style={{ padding: '6rem 5%', background: 'var(--warm-white)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '5rem',
        alignItems: 'start',
      }}
      className="contact-grid"
      >
        {/* Left: Info */}
        <div>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--terracotta)',
            marginBottom: '0.8rem',
          }}>Book a Consultation</p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            marginBottom: '1.2rem',
            color: 'var(--charcoal)',
          }}>
            Let's talk about <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>your</em> care needs
          </h2>

          <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Reach out and our care coordinators will get back to you within 2 hours. The first consultation is always free — no pressure, no commitment.
          </p>

          {[
            { icon: '📞', label: 'Phone / WhatsApp', value: '+91 98988 09630', href: 'tel:+919898809630' },
            { icon: '📧', label: 'Email', value: 'hello@naturababycare.in', href: 'mailto:hello@naturababycare.in' },
            { icon: '📍', label: 'Service Areas', value: 'Now in Ahmedabad · Surat · Bhavnagar · Rajkot' },
            { icon: '🕐', label: 'Response Time', value: 'Within 2 hours · 7 days a week' },
          ].map((detail, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'var(--blush)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                flexShrink: 0,
              }}>{detail.icon}</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--warm-gray)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{detail.label}</div>
                {detail.href ? (
                  <a href={detail.href} style={{ fontSize: '0.92rem', color: 'var(--charcoal)', fontWeight: 500, textDecoration: 'none', marginTop: '0.1rem', display: 'block' }}>
                    {detail.value}
                  </a>
                ) : (
                  <div style={{ fontSize: '0.92rem', color: 'var(--charcoal)', fontWeight: 500, marginTop: '0.1rem' }}>{detail.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <div style={{
          background: 'var(--cream)',
          borderRadius: '24px',
          padding: '2.5rem',
        }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.6rem',
            marginBottom: '1.5rem',
            color: 'var(--charcoal)',
          }}>Book Free Consultation</h3>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                Request Sent!
              </h4>
              <p style={{ color: 'var(--warm-gray)', fontSize: '0.9rem' }}>
                We'll contact you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div style={{
                  marginBottom: '1rem',
                  padding: '0.75rem 1rem',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  color: '#dc2626',
                  fontSize: '0.85rem',
                }}>{error}</div>
              )}

              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle}>Mother's Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.motherName}
                    onChange={e => setForm({ ...form, motherName: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                    onBlur={e => e.target.style.borderColor = 'var(--light-gray)'}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                    onBlur={e => e.target.style.borderColor = 'var(--light-gray)'}
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle}>Due / Birth Date</label>
                  <input
                    type="date"
                    value={form.dueDate}
                    onChange={e => setForm({ ...form, dueDate: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                    onBlur={e => e.target.style.borderColor = 'var(--light-gray)'}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle}>City</label>
                  <input
                    type="text"
                    placeholder="Your city"
                    value={form.city}
                    onChange={e => setForm({ ...form, city: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                    onBlur={e => e.target.style.borderColor = 'var(--light-gray)'}
                  />
                </div>
              </div>

              {/* Service Required */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={labelStyle}>Service Required</label>
                <select
                  value={form.serviceRequired}
                  onChange={e => setForm({ ...form, serviceRequired: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                  onBlur={e => e.target.style.borderColor = 'var(--light-gray)'}
                  required
                >
                  <option value="">Select a service...</option>
                  <optgroup label="Trial Packages">
                    <option>7-Day Trial Package</option>
                    <option>14-Day Trial Package</option>
                  </optgroup>
                  <optgroup label="Individual Services">
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Special Requirements */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={labelStyle}>Any Special Requirements</label>
                <textarea
                  placeholder="Tell us about any specific needs, medical conditions, or questions..."
                  value={form.specialRequirements}
                  onChange={e => setForm({ ...form, specialRequirements: e.target.value })}
                  style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                  onBlur={e => e.target.style.borderColor = 'var(--light-gray)'}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: loading ? 'var(--warm-gray)' : 'var(--terracotta)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.3s, transform 0.2s',
                }}
                onMouseEnter={e => { if (!loading) { e.target.style.background = 'var(--deep-clay)'; e.target.style.transform = 'translateY(-2px)'; }}}
                onMouseLeave={e => { if (!loading) { e.target.style.background = 'var(--terracotta)'; e.target.style.transform = ''; }}}
              >
                {loading ? 'Sending...' : 'Request Free Consultation →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle = {
  fontSize: '0.78rem',
  fontWeight: 500,
  color: 'var(--warm-gray)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '0.4rem',
};

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: 'var(--warm-white)',
  border: '1.5px solid var(--light-gray)',
  borderRadius: '12px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.9rem',
  color: 'var(--charcoal)',
  transition: 'border-color 0.3s',
  outline: 'none',
};
