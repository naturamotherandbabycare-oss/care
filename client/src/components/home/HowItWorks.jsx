import { THE_PROCESS, PROCESS_BADGES } from '../../utils/constants';

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: '6rem 5%', background: 'var(--cream)' }}>
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--terracotta)',
        marginBottom: '0.8rem',
      }}>The Process</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
        fontWeight: 300,
        lineHeight: 1.15,
        color: 'var(--charcoal)',
        marginBottom: '3rem',
      }}>
        Simple steps to <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>exceptional</em> care
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center',
      }}
      className="how-grid"
      >
        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {THE_PROCESS.map((step, index) => (
            <div key={index} style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '3rem',
                fontWeight: 300,
                color: 'var(--light-gray)',
                lineHeight: 1,
                minWidth: '50px',
              }}>{step.step}</div>
              <div>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                  color: 'var(--charcoal)',
                }}>{step.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--warm-gray)', lineHeight: 1.65 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Panel */}
        <div style={{
          background: 'linear-gradient(135deg, var(--blush) 0%, var(--soft-sage) 100%)',
          borderRadius: '30px',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {PROCESS_BADGES.map((badge, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
            }}>
              <div style={{ fontSize: '1.8rem' }}>{badge.icon}</div>
              <div>
                <h5 style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--charcoal)' }}>{badge.title}</h5>
                <p style={{ fontSize: '0.78rem', color: 'var(--warm-gray)', marginTop: '0.15rem' }}>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
