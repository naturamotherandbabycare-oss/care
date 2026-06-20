const TESTIMONIALS_DATA = [
  {
    stars: 5,
    quote: '"Natura Baby & Mother Care was an absolute blessing. Our caregiver Priya felt like a family member from day one. She helped me recover so much faster while making sure my baby was thriving."',
    name: 'Sunita Kapoor',
    detail: 'New mother, Mumbai · C-section recovery',
    avatar: '👩',
  },
  {
    stars: 5,
    quote: '"As a first-time father, I was terrified. Natura\'s caregiver not only looked after my wife and baby brilliantly, but also taught us everything we needed to know."',
    name: 'Rohan Mehta',
    detail: 'First-time parent, Bangalore',
    avatar: '👨',
  },
  {
    stars: 5,
    quote: '"I struggled with postnatal blues and Natura\'s team noticed before I even said a word. The emotional support alongside the practical care was unlike anything I expected."',
    name: 'Deepa Krishnan',
    detail: 'Mother of twins, Chennai',
    avatar: '👩',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '6rem 5%', background: 'var(--charcoal)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--dusty-rose)',
          marginBottom: '0.8rem',
        }}>Testimonials</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
          fontWeight: 300,
          lineHeight: 1.15,
          color: 'var(--cream)',
        }}>
          Stories from <em style={{ fontStyle: 'italic', color: 'var(--dusty-rose)' }}>our families</em>
        </h2>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
      }}
      className="testimonials-grid"
      >
        {TESTIMONIALS_DATA.map((t, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(217,168,154,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            {/* Stars */}
            <div style={{ color: 'var(--dusty-rose)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {'★'.repeat(t.stars)}
            </div>

            <blockquote style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'rgba(250,246,239,0.85)',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
            }}>
              {t.quote}
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--blush)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
              }}>{t.avatar}</div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--cream)' }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{t.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
