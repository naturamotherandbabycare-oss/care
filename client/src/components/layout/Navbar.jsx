import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.2rem 5%',
        background: 'rgba(250, 246, 239, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(196, 113, 90, 0.15)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
        animation: 'fadeDown 0.8s ease both',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }} aria-label="Natura Baby & Mother Care - Home">
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.6rem',
          fontWeight: 600,
          color: '#8B4A38',
          letterSpacing: '0.02em',
        }}>
          Natura <span style={{ color: '#C4715A', fontStyle: 'italic' }}>Baby &amp; Mother Care</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul style={{ display: 'flex', gap: '2.2rem', listStyle: 'none', alignItems: 'center' }}
          className="hidden lg:flex">
        {NAV_LINKS.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? '#C4715A' : '#7A6E6B',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = '#C4715A'}
              onMouseLeave={e => e.target.style.color = location.pathname === link.path ? '#C4715A' : '#7A6E6B'}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Auth links */}
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to={isAdmin ? '/admin' : '/dashboard'}
                style={{
                  textDecoration: 'none',
                  color: '#7A6E6B',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {isAdmin ? 'Admin' : 'Dashboard'}
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#7A6E6B',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : null}

        {/* Book Now CTA */}
        <li>
          <Link
            to="/contact"
            style={{
              textDecoration: 'none',
              background: '#C4715A',
              color: '#fff',
              padding: '0.55rem 1.4rem',
              borderRadius: '50px',
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'background 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.target.style.background = '#8B4A38'}
            onMouseLeave={e => e.target.style.background = '#C4715A'}
          >
            Book Now
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
        }}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileOpen}
      >
        <div style={{ width: '24px', height: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{
            display: 'block', height: '2px', width: '24px',
            background: '#2C2422', borderRadius: '2px',
            transform: isMobileOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
            transition: 'all 0.3s'
          }} />
          <span style={{
            display: 'block', height: '2px', width: '24px',
            background: '#2C2422', borderRadius: '2px',
            opacity: isMobileOpen ? 0 : 1,
            transition: 'all 0.3s'
          }} />
          <span style={{
            display: 'block', height: '2px', width: '24px',
            background: '#2C2422', borderRadius: '2px',
            transform: isMobileOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
            transition: 'all 0.3s'
          }} />
        </div>
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(250, 246, 239, 0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(196, 113, 90, 0.15)',
          padding: '1rem 5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? '#C4715A' : '#7A6E6B',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.7rem 0',
                borderBottom: '1px solid rgba(196, 113, 90, 0.1)',
              }}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && (
            <>
              <Link
                to={isAdmin ? '/admin' : '/dashboard'}
                style={{
                  textDecoration: 'none',
                  color: '#7A6E6B',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '0.7rem 0',
                  borderBottom: '1px solid rgba(196, 113, 90, 0.1)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {isAdmin ? 'Admin' : 'Dashboard'}
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#C4715A',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '0.7rem 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Logout
              </button>
            </>
          )}
          <Link
            to="/contact"
            style={{
              textDecoration: 'none',
              background: '#C4715A',
              color: '#fff',
              padding: '0.75rem 1.4rem',
              borderRadius: '50px',
              fontSize: '0.88rem',
              fontWeight: 500,
              textAlign: 'center',
              marginTop: '0.5rem',
              display: 'block',
            }}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
