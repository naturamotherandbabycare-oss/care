import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--charcoal)', padding: '4rem 5% 2rem' }} role="contentinfo">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '3rem',
        marginBottom: '3rem',
      }}
      className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.7rem',
            fontWeight: 600,
            color: 'var(--cream)',
            marginBottom: '1rem',
          }}>
            Natura <em style={{ fontStyle: 'italic', color: 'var(--dusty-rose)' }}>Baby &amp; Mother Care</em>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '280px' }}>
            Professional postnatal care for mothers and babies — delivered with compassion, expertise, and love since 2017.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.2rem' }}>
            Services
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {['Mother Care', 'Baby Care', 'Live-In Caretaker', 'Nutrition', 'Postnatal Massage'].map(item => (
              <li key={item}>
                <Link to="/services" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--dusty-rose)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                >{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.2rem' }}>
            Company
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Team', to: '/about#team' },
              { label: 'Testimonials', to: '/#testimonials' },
            ].map(link => (
              <li key={link.label}>
                <Link to={link.to} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--dusty-rose)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                >{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.2rem' }}>
            Support
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[
              { label: 'Contact Us', to: '/contact' },
              { label: 'Privacy Policy', to: '#' },
              { label: 'Terms of Service', to: '#' },
              { label: 'Caregiver Login', to: '/login' },
            ].map(link => (
              <li key={link.label}>
                <Link to={link.to} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--dusty-rose)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                >{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          © {currentYear} Natura Baby &amp; Mother Care. All rights reserved. Made with ♥ for new families.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          Now in Ahmedabad · Surat · Bhavnagar · Rajkot
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
