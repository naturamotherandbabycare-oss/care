import { Link } from 'react-router-dom';
import { MEDICAL_TEAM } from '../utils/constants';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px', background: 'var(--cream)' }}>

      {/* Hero */}
      <section style={{
        padding: '6rem 5% 4rem',
        background: 'var(--warm-white)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-5%', top: '-10%',
          width: '50%', height: '120%',
          background: 'radial-gradient(ellipse at 60% 40%, var(--blush) 0%, var(--soft-sage) 60%, transparent 80%)',
          opacity: 0.3, borderRadius: '50%',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.8rem',
          }}>About Us</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1,
            color: 'var(--charcoal)', maxWidth: '700px', marginBottom: '1.5rem',
          }}>
            Compassionate &amp; professional <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>mother &amp; newborn care</em>
          </h1>
          <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '1rem', maxWidth: '550px', marginBottom: '2rem' }}>
            Dedicated to providing the highest standard of support during your most important postpartum days, in the comfort of your home.
          </p>
          <Link
            to="/contact"
            style={{
              background: 'var(--terracotta)', color: '#fff', padding: '0.9rem 2rem',
              borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
              display: 'inline-block', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--deep-clay)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--terracotta)'; e.currentTarget.style.transform = ''; }}
          >
            Book a Consultation →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '6rem 5%', background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-intro-grid">
          <div>
            <div style={{ width: '48px', height: '3px', background: 'var(--terracotta)', borderRadius: '2px', marginBottom: '1.5rem' }} />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', marginBottom: '1.2rem',
            }}>Supporting You When You Need It Most</h2>
            <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1rem' }}>
              At <strong style={{ color: 'var(--charcoal)' }}>Natura Baby &amp; Mother Care</strong>, we are dedicated to providing compassionate and professional care for mothers and newborn babies during the most important days after childbirth.
            </p>
            <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Our trained caregivers offer personalized support to help mothers recover comfortably while ensuring babies receive safe and loving care. We understand that every family has unique needs, and we strive to provide reliable, hygienic, and trustworthy services in the comfort of your home.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(145deg, var(--blush), var(--dusty-rose))',
            borderRadius: '30px', padding: '3rem',
          }}>
            {[
              { icon: '🏡', title: 'Hygienic Home Visits', desc: 'Strict hygiene checks before every shift' },
              { icon: '🔒', title: 'Background Verified', desc: 'Every caregiver is police-verified and reference-checked' },
              { icon: '📋', title: 'Certified Professionals', desc: 'Trained in postnatal care, infant care &amp; first aid' },
              { icon: '🔄', title: 'Flexible &amp; Replaceable', desc: 'Not a good fit? We\'ll replace your caregiver within 24hrs' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '16px', padding: '1.2rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                marginBottom: i < 3 ? '1rem' : 0, boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)' }}>{item.title}</h5>
                  <p style={{ fontSize: '0.75rem', color: 'var(--warm-gray)', marginTop: '0.1rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '6rem 5%', background: 'var(--warm-white)' }}>
        <p style={{
          fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.8rem', textAlign: 'center',
        }}>Our Purpose</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 300,
          color: 'var(--charcoal)', textAlign: 'center', marginBottom: '3rem',
        }}>
          What drives <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>us</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }} className="about-purpose-grid">
          <div style={{ background: 'var(--cream)', borderRadius: '24px', padding: '2.5rem', border: '1.5px solid var(--light-gray)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '0.8rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '0.9rem' }}>
              To support mothers and babies with professional, compassionate, and reliable care, helping families enjoy a healthy and stress-free postpartum journey.
            </p>
          </div>
          <div style={{ background: 'var(--cream)', borderRadius: '24px', padding: '2.5rem', border: '1.5px solid var(--light-gray)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '0.8rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '0.9rem' }}>
              To become the most trusted mother and baby care service provider by delivering exceptional care and building lasting relationships with families.
            </p>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section id="team" style={{ padding: '6rem 5%', background: 'var(--warm-white)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.8rem',
          }}>Our Medical Team</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--charcoal)',
            maxWidth: '540px', margin: '0 auto',
          }}>
            Qualified doctors &amp; <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>specialist staff</em>
          </h2>
          <p style={{ color: 'var(--warm-gray)', marginTop: '1rem', fontSize: '0.95rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            From gynaecologists to certified nurses and infant specialists — every member of our team is medically qualified and dedicated to your complete wellbeing at home.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="about-team-grid">
          {MEDICAL_TEAM.map((doctor, index) => (
            <div
              key={index}
              style={{
                background: 'var(--cream)', borderRadius: '24px', padding: '2rem',
                textAlign: 'center', transition: 'transform 0.35s, box-shadow 0.35s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{
                width: '90px', height: '90px', borderRadius: '50%',
                margin: '0 auto 1.2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem', position: 'relative',
                background: index % 2 === 0 ? 'var(--blush)' : 'var(--soft-sage)',
              }}>
                {doctor.emoji}
                <span style={{
                  position: 'absolute', bottom: '2px', right: '2px',
                  background: 'var(--sage)', color: '#fff',
                  width: '22px', height: '22px', borderRadius: '50%',
                  fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>✓</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.2rem', color: 'var(--charcoal)' }}>{doctor.name}</h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--terracotta)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>{doctor.role}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--warm-gray)', lineHeight: 1.65 }}>{doctor.experience}. {doctor.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem', marginTop: '1.2rem' }}>
                {doctor.specialties.map((spec, si) => (
                  <span key={si} style={{ background: 'var(--blush)', color: 'var(--deep-clay)', fontSize: '0.7rem', padding: '0.25rem 0.7rem', borderRadius: '50px', fontWeight: 500 }}>{spec}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 5%', background: 'var(--charcoal)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1rem' }}>
          Have questions about <em style={{ fontStyle: 'italic', color: 'var(--dusty-rose)' }}>newborn care?</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Book a free consultation session with our experts. We help you pick the right schedule and care options for your recovery.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{
              background: 'var(--terracotta)', color: '#fff', padding: '0.9rem 2rem',
              borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
              display: 'inline-block', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--deep-clay)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--terracotta)'; }}
          >
            Book a Consultation →
          </Link>
          <a
            href="https://wa.me/917984057063"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '1.5px solid rgba(255,255,255,0.3)', color: 'var(--cream)',
              padding: '0.9rem 2rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500,
              textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

    </div>
  );
}
