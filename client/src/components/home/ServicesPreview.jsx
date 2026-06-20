import { Link } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';

export default function ServicesPreview() {
  return (
    <section id="services" style={{ padding: '6rem 5%', background: 'var(--warm-white)' }}>
      {/* Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'end',
        gap: '2rem',
        marginBottom: '4rem',
      }}
      className="services-header-grid"
      >
        <div>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--terracotta)',
            marginBottom: '0.8rem',
          }}>What We Offer</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            color: 'var(--charcoal)',
          }}>
            Holistic care for <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>every need</em>
          </h2>
        </div>
        <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, fontSize: '0.98rem', alignSelf: 'end' }}>
          From the first day home with your newborn to weeks of recovery, Natura Baby &amp; Mother Care provides compassionate, professional services tailored entirely to you.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
      }}
      className="services-cards-grid"
      >
        {SERVICES.map((service, index) => {
          const isFeatured = index === 1; // Newborn Baby Care is featured
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
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Arrow */}
              <span style={{
                position: 'absolute',
                right: '1.5rem',
                top: '1.5rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                background: isFeatured ? 'rgba(255,255,255,0.2)' : 'var(--light-gray)',
                color: isFeatured ? '#fff' : 'var(--warm-gray)',
              }}>↗</span>

              {/* Icon */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
                background: isFeatured ? 'rgba(255,255,255,0.2)' : 'var(--blush)',
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.45rem',
                fontWeight: 600,
                marginBottom: '0.8rem',
                color: isFeatured ? '#fff' : 'var(--charcoal)',
              }}>{service.name}</h3>

              <p style={{
                fontSize: '0.88rem',
                lineHeight: 1.7,
                color: isFeatured ? 'rgba(255,255,255,0.8)' : 'var(--warm-gray)',
              }}>{service.description}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.3rem' }}>
                {service.features.map((tag, ti) => (
                  <span key={ti} style={{
                    fontSize: '0.72rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '50px',
                    fontWeight: 500,
                    background: isFeatured ? 'rgba(255,255,255,0.2)' : 'var(--light-gray)',
                    color: isFeatured ? '#fff' : 'var(--warm-gray)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-header-grid { grid-template-columns: 1fr !important; }
          .services-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
