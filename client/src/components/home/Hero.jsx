import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '8rem 5% 4rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cream)',
    }}
    className="hero-section"
    >
      {/* Background blob */}
      <div style={{
        content: '',
        position: 'absolute',
        right: '-10%',
        top: '-20%',
        width: '70%',
        height: '130%',
        background: 'radial-gradient(ellipse at 60% 40%, var(--blush) 0%, var(--soft-sage) 60%, transparent 80%)',
        opacity: 0.4,
        borderRadius: '50%',
        animation: 'pulseBlob 8s ease-in-out infinite alternate',
      }} />

      {/* Left: Hero Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--soft-sage)',
          color: 'var(--deep-clay)',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '1.8rem',
        }}>
          ✦ Certified Postnatal Care
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3rem, 5.5vw, 5rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--charcoal)',
        }}>
          Gentle care for <em style={{ fontStyle: 'italic', color: 'var(--terracotta)', fontWeight: 400 }}>mothers</em> &amp; newborns
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--warm-gray)',
          lineHeight: 1.75,
          maxWidth: '480px',
          margin: '1.8rem 0 2.5rem',
        }}>
          Professional postnatal support that nurtures both mother and baby through the most transformative chapter of life — with warmth, expertise, and deep compassion.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{
              background: 'var(--terracotta)',
              color: '#fff',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--deep-clay)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(139,74,56,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--terracotta)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Book a Consultation →
          </Link>
          <Link
            to="/services"
            style={{
              border: '1.5px solid var(--terracotta)',
              color: 'var(--terracotta)',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
              background: 'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--terracotta)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--terracotta)'; e.currentTarget.style.transform = ''; }}
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Right: Visual Card */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="hidden lg:flex"
      >
        <div style={{ position: 'relative', width: '420px', height: '520px' }}>
          {/* Main card */}
          <div style={{
            width: '340px',
            height: '440px',
            background: 'linear-gradient(145deg, var(--blush), var(--dusty-rose))',
            borderRadius: '24px 24px 80px 24px',
            position: 'absolute',
            top: '40px',
            left: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(196,113,90,0.2)',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -60%)',
              fontSize: '9rem', opacity: 0.35,
            }}>🤱</div>
            <div style={{
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(8px)',
              color: 'var(--deep-clay)',
              padding: '0.35rem 0.9rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: 500,
              display: 'inline-block',
              marginBottom: '0.6rem',
            }}>Expert Care</div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              color: 'var(--deep-clay)',
              fontWeight: 600,
            }}>Your postnatal companion</h3>
          </div>

          {/* Float card 1 */}
          <div style={{
            position: 'absolute',
            background: '#fff',
            borderRadius: '16px',
            padding: '1rem 1.3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            top: 0, right: 0, width: '160px',
          }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--terracotta)', fontWeight: 600, lineHeight: 1 }}>500+</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--warm-gray)', marginTop: '0.2rem' }}>Happy Families Served</div>
          </div>

          {/* Float card 2 */}
          <div style={{
            position: 'absolute',
            background: '#fff',
            borderRadius: '16px',
            padding: '1rem 1.3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            bottom: 0, left: 0, width: '170px',
          }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--terracotta)', fontWeight: 600, lineHeight: 1 }}>24/7</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--warm-gray)', marginTop: '0.2rem' }}>On-Call Support</div>
          </div>
        </div>
      </div>


    </section>
  );
}
