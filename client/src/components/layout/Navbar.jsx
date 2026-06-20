import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="natura-nav" data-scrolled={isScrolled} role="navigation" aria-label="Main navigation">

        {/* ── Logo ── */}
        <Link to="/" className="natura-nav__logo" aria-label="Natura Baby & Mother Care - Home">
          <span className="natura-nav__logo-main">Natura</span>
          <span className="natura-nav__logo-sub"> Baby &amp; Mother Care</span>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="natura-nav__links" aria-label="Navigation links">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`natura-nav__link${location.pathname === link.path ? ' active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {isAuthenticated && (
            <>
              <li>
                <Link
                  to={isAdmin ? '/admin' : '/dashboard'}
                  className="natura-nav__link"
                >
                  {isAdmin ? 'Admin' : 'Dashboard'}
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="natura-nav__link natura-nav__logout">
                  Logout
                </button>
              </li>
            </>
          )}

          <li>
            <Link to="/contact" className="natura-nav__cta">Book Now</Link>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className="natura-nav__hamburger"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          <span className={`bar bar-1${isMobileOpen ? ' open' : ''}`} />
          <span className={`bar bar-2${isMobileOpen ? ' open' : ''}`} />
          <span className={`bar bar-3${isMobileOpen ? ' open' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`natura-mobile-menu${isMobileOpen ? ' visible' : ''}`}
        aria-hidden={!isMobileOpen}
      >
        {/* Close tap area behind menu */}
        <div className="natura-mobile-menu__backdrop" onClick={() => setIsMobileOpen(false)} />

        <div className="natura-mobile-menu__panel">
          {/* Logo inside menu */}
          <div className="natura-mobile-menu__header">
            <Link to="/" className="natura-nav__logo" onClick={() => setIsMobileOpen(false)}>
              <span className="natura-nav__logo-main">Natura</span>
              <span className="natura-nav__logo-sub"> Baby &amp; Mother Care</span>
            </Link>
            <button
              className="natura-mobile-menu__close"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <ul className="natura-mobile-menu__links">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`natura-mobile-menu__link${location.pathname === link.path ? ' active' : ''}`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                  <span className="natura-mobile-menu__arrow">→</span>
                </Link>
              </li>
            ))}

            {isAuthenticated && (
              <>
                <li>
                  <Link
                    to={isAdmin ? '/admin' : '/dashboard'}
                    className="natura-mobile-menu__link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {isAdmin ? 'Admin' : 'Dashboard'}
                    <span className="natura-mobile-menu__arrow">→</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => { handleLogout(); setIsMobileOpen(false); }}
                    className="natura-mobile-menu__link natura-mobile-menu__logout"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          <div className="natura-mobile-menu__footer">
            <Link
              to="/contact"
              className="natura-mobile-menu__book"
              onClick={() => setIsMobileOpen(false)}
            >
              Book Free Consultation →
            </Link>
            <div className="natura-mobile-menu__contact-row">
              <a href="tel:+917984057063">📞 +91 79840 57063</a>
              <a href="https://wa.me/917984057063" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ══ Navbar ══ */
        .natura-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 5%;
          background: rgba(250, 246, 239, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(196,113,90,0.12);
          transition: box-shadow 0.3s;
        }
        .natura-nav[data-scrolled="true"] {
          box-shadow: 0 4px 24px rgba(0,0,0,0.09);
        }

        /* Logo */
        .natura-nav__logo {
          text-decoration: none;
          white-space: nowrap;
        }
        .natura-nav__logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #8B4A38;
          letter-spacing: 0.02em;
        }
        .natura-nav__logo-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 400;
          font-style: italic;
          color: #C4715A;
        }

        /* Desktop links */
        .natura-nav__links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }
        .natura-nav__link {
          text-decoration: none;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #7A6E6B;
          cursor: pointer;
          transition: color 0.25s;
          padding: 0;
        }
        .natura-nav__link:hover,
        .natura-nav__link.active { color: #C4715A; }
        .natura-nav__logout { background: none; border: none; }
        .natura-nav__cta {
          text-decoration: none;
          background: #C4715A;
          color: #fff !important;
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          transition: background 0.25s, transform 0.2s;
        }
        .natura-nav__cta:hover {
          background: #8B4A38;
          transform: translateY(-1px);
        }

        /* Hamburger — hidden on desktop */
        .natura-nav__hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 300;
        }
        .bar {
          display: block;
          height: 2px;
          width: 100%;
          background: #2C2422;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .bar-1.open { transform: translateY(8px) rotate(45deg); }
        .bar-2.open { opacity: 0; transform: scaleX(0); }
        .bar-3.open { transform: translateY(-8px) rotate(-45deg); }

        /* ══ Mobile Menu ══ */
        .natura-mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 199;
          pointer-events: none;
        }
        .natura-mobile-menu.visible {
          pointer-events: all;
        }
        .natura-mobile-menu__backdrop {
          position: absolute;
          inset: 0;
          background: rgba(44, 36, 34, 0.5);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .natura-mobile-menu.visible .natura-mobile-menu__backdrop {
          opacity: 1;
        }
        .natura-mobile-menu__panel {
          position: absolute;
          top: 0; right: 0;
          width: min(85vw, 340px);
          height: 100%;
          background: #FAF6EF;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          z-index: 201;
        }
        .natura-mobile-menu.visible .natura-mobile-menu__panel {
          transform: translateX(0);
        }

        /* Panel header */
        .natura-mobile-menu__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.5rem;
          border-bottom: 1px solid rgba(196,113,90,0.12);
        }
        .natura-mobile-menu__close {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #7A6E6B;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 50%;
          transition: background 0.2s;
        }
        .natura-mobile-menu__close:hover {
          background: rgba(196,113,90,0.1);
          color: #C4715A;
        }

        /* Panel links */
        .natura-mobile-menu__links {
          list-style: none;
          padding: 1rem 0;
          flex: 1;
        }
        .natura-mobile-menu__link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.95rem 1.5rem;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #2C2422;
          letter-spacing: 0.04em;
          border-bottom: 1px solid rgba(196,113,90,0.08);
          transition: background 0.2s, color 0.2s;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(196,113,90,0.08);
          width: 100%;
          text-align: left;
          cursor: pointer;
        }
        .natura-mobile-menu__link:hover,
        .natura-mobile-menu__link.active {
          background: rgba(196,113,90,0.06);
          color: #C4715A;
        }
        .natura-mobile-menu__link.active .natura-mobile-menu__arrow {
          color: #C4715A;
        }
        .natura-mobile-menu__arrow {
          font-size: 0.9rem;
          color: #D9A89A;
        }
        .natura-mobile-menu__logout {
          color: #7A6E6B;
        }

        /* Panel footer */
        .natura-mobile-menu__footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(196,113,90,0.12);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .natura-mobile-menu__book {
          display: block;
          text-align: center;
          text-decoration: none;
          background: #C4715A;
          color: #fff;
          padding: 0.9rem 1.5rem;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          transition: background 0.25s;
        }
        .natura-mobile-menu__book:hover { background: #8B4A38; }
        .natura-mobile-menu__contact-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        .natura-mobile-menu__contact-row a {
          text-decoration: none;
          font-size: 0.82rem;
          color: #7A6E6B;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }
        .natura-mobile-menu__contact-row a:hover { color: #C4715A; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .natura-nav__links { display: none; }
          .natura-nav__hamburger { display: flex; }
          .natura-mobile-menu { display: block; }
        }

        /* Smaller logo on very small screens */
        @media (max-width: 400px) {
          .natura-nav__logo-main,
          .natura-nav__logo-sub {
            font-size: 1.15rem;
          }
          .natura-nav {
            padding: 0.9rem 4%;
          }
        }
      `}</style>
    </>
  );
}
