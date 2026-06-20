import { SERVICES } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '80px', background: 'var(--cream)' }}>

      {/* Hero */}
      <section style={{
        padding: '5rem 5% 4rem',
        background: 'var(--warm-white)',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--terracotta)',
          marginBottom: '0.8rem',
        }}>What We Offer</p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--charcoal)',
          marginBottom: '1rem',
        }}>
          Holistic care for <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>every need</em>
        </h1>
        <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto' }}>
          From the first day home with your newborn to weeks of recovery, Natura Baby &amp; Mother Care provides compassionate, professional services tailored entirely to you.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '6rem 5%', background: 'var(--warm-white)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="services-page-grid">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 1;
            return (
              <div
                key={service.id}
                style={{
                  background: isFeatured ? 'var(--terracotta)' : 'var(--cream)',
                  borderRadius: '20px',
                  padding: '2.2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.35s, box-shadow 0.35s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <span style={{
                  position: 'absolute', right: '1.5rem', top: '1.5rem',
                  width: '36px', height: '36px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                  background: isFeatured ? 'rgba(255,255,255,0.2)' : 'var(--light-gray)',
                  color: isFeatured ? '#fff' : 'var(--warm-gray)',
                }}>↗</span>

                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', marginBottom: '1.5rem',
                  background: isFeatured ? 'rgba(255,255,255,0.2)' : 'var(--blush)',
                }}>{service.icon}</div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.45rem', fontWeight: 600, marginBottom: '0.8rem',
                  color: isFeatured ? '#fff' : 'var(--charcoal)',
                }}>{service.name}</h3>

                <p style={{
                  fontSize: '0.88rem', lineHeight: 1.7,
                  color: isFeatured ? 'rgba(255,255,255,0.8)' : 'var(--warm-gray)',
                }}>{service.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.3rem' }}>
                  {service.features.map((tag, ti) => (
                    <span key={ti} style={{
                      fontSize: '0.72rem', padding: '0.3rem 0.75rem', borderRadius: '50px', fontWeight: 500,
                      background: isFeatured ? 'rgba(255,255,255,0.2)' : 'var(--light-gray)',
                      color: isFeatured ? '#fff' : 'var(--warm-gray)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 5%', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.8rem', textAlign: 'center',
          }}>FAQs</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300,
            color: 'var(--charcoal)', marginBottom: '3rem', textAlign: 'center',
          }}>
            Frequently asked <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>questions</em>
          </h2>

          {[
            { q: 'How do I book a caregiver?', a: 'Simply click "Book Now" or request a free consultation, select your preferred schedule, and fill out your details. Our coordinators will match you with a caregiver within 2 hours.' },
            { q: 'Are your caregivers verified?', a: 'Yes. Every caregiver is police-verified, reference-checked, and background-certified to ensure absolute safety for your home and family.' },
            { q: 'Can we meet the caregiver before starting?', a: 'Definitely. We arrange a face-to-face or video introduction with your matched caregiver so you can align on routines and confirm your choice before service starts.' },
            { q: 'What if the caregiver is not a good fit?', a: 'If you feel the caregiver is not a fit, we guarantee a replacement within 24 hours, no questions asked.' },
            { q: 'How do you monitor daily progress?', a: 'Our caregivers provide daily logs detailing baby feeding times, sleep schedules, mother\'s recovery progress, and wellness checks.' },
          ].map((faq, i) => (
            <details key={i} style={{
              marginBottom: '1rem',
              background: 'var(--warm-white)',
              borderRadius: '16px',
              border: '1.5px solid var(--light-gray)',
              overflow: 'hidden',
            }}>
              <summary style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.2rem 1.5rem', cursor: 'pointer',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.1rem', fontWeight: 600, color: 'var(--charcoal)',
                listStyle: 'none',
              }}>
                {faq.q}
                <span style={{ marginLeft: '1rem', color: 'var(--terracotta)', fontSize: '1.2rem' }}>+</span>
              </summary>
              <div style={{ padding: '0 1.5rem 1.2rem', fontSize: '0.9rem', color: 'var(--warm-gray)', lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Book CTA */}
      <section style={{ padding: '4rem 5%', background: 'var(--warm-white)', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, color: 'var(--charcoal)', marginBottom: '1rem',
        }}>
          Ready to get <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>started?</em>
        </h2>
        <p style={{ color: 'var(--warm-gray)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Book your free consultation and let us match you with the perfect caregiver.
        </p>
        <Link
          to="/contact"
          style={{
            background: 'var(--terracotta)', color: '#fff',
            padding: '0.9rem 2.5rem', borderRadius: '50px',
            fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
            display: 'inline-block', transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--deep-clay)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--terracotta)'; e.currentTarget.style.transform = ''; }}
        >
          Book a Consultation →
        </Link>
      </section>

    </div>
  );
}
