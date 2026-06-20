import { MEDICAL_TEAM } from '../../utils/constants';

export default function CTABanner() {
  return (
    <section id="caregivers" style={{ padding: '6rem 5%', background: 'var(--warm-white)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--terracotta)',
          marginBottom: '0.8rem',
        }}>Our Medical Team</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
          fontWeight: 300,
          lineHeight: 1.15,
          color: 'var(--charcoal)',
          maxWidth: '540px',
          margin: '0 auto',
        }}>
          Qualified doctors &amp; <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>specialist staff</em>
        </h2>
        <p style={{ color: 'var(--warm-gray)', marginTop: '1rem', fontSize: '0.95rem' }}>
          From gynaecologists to certified nurses and infant specialists — every member of our team is medically qualified and dedicated to your complete wellbeing at home.
        </p>
      </div>

      {/* Team Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
      }}
      className="caregivers-grid"
      >
        {MEDICAL_TEAM.map((doctor, index) => (
          <div
            key={index}
            style={{
              background: 'var(--cream)',
              borderRadius: '24px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.35s, box-shadow 0.35s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            {/* Avatar */}
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              margin: '0 auto 1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              position: 'relative',
              background: index % 2 === 0 ? 'var(--blush)' : 'var(--soft-sage)',
            }}>
              {doctor.emoji}
              <span style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                background: 'var(--sage)',
                color: '#fff',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                fontSize: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>✓</span>
            </div>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '0.2rem',
              color: 'var(--charcoal)',
            }}>{doctor.name}</h3>

            <div style={{
              fontSize: '0.78rem',
              color: 'var(--terracotta)',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>{doctor.role}</div>

            <p style={{ fontSize: '0.85rem', color: 'var(--warm-gray)', lineHeight: 1.65 }}>
              {doctor.experience}. {doctor.desc}
            </p>

            {/* Skills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.4rem',
              marginTop: '1.2rem',
            }}>
              {doctor.specialties.map((spec, si) => (
                <span key={si} style={{
                  background: 'var(--blush)',
                  color: 'var(--deep-clay)',
                  fontSize: '0.7rem',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '50px',
                  fontWeight: 500,
                }}>{spec}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
