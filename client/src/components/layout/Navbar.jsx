import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NAV_LINKS } from '../../utils/constants';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-dark-900/5 py-3' 
          : 'bg-transparent py-5'
        }
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Natura - Home">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-600/30 group-hover:shadow-primary-600/50 transition-shadow">
              N
            </div>
            <div>
              <span className="text-lg font-bold text-dark-900 tracking-tight">Natura</span>
              <span className="hidden sm:inline text-xs text-dark-400 ml-1 font-medium">Cleaning</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-dark-500 hover:text-dark-900 hover:bg-dark-50'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  to={isAdmin ? '/admin' : '/dashboard'}
                  className="text-sm font-medium text-dark-600 hover:text-dark-900 px-3 py-2 rounded-lg hover:bg-dark-50 transition-all"
                >
                  {isAdmin ? 'Admin' : 'Dashboard'}
                </Link>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-semibold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-dark-500 hover:text-red-500 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-dark-600 hover:text-dark-900 px-3 py-2 rounded-lg hover:bg-dark-50 transition-all"
                >
                  Login
                </Link>
                <Button
                  size="sm"
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-6 bg-dark-700 rounded transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-dark-700 rounded transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-dark-700 rounded transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-out
          ${isMobileOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
          <div className="bg-white rounded-2xl shadow-xl border border-dark-100 p-4 space-y-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-dark-600 hover:bg-dark-50'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-dark-100 my-2" />
            {isAuthenticated ? (
              <>
                <Link
                  to={isAdmin ? '/admin' : '/dashboard'}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-dark-600 hover:bg-dark-50"
                >
                  {isAdmin ? '⚙️ Admin Dashboard' : '📊 My Dashboard'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-2 pt-2">
                <Link
                  to="/login"
                  className="flex-1 text-center px-4 py-3 rounded-xl text-sm font-medium text-dark-600 border border-dark-200 hover:bg-dark-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 text-center px-4 py-3 rounded-xl text-sm font-medium text-white gradient-primary"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
