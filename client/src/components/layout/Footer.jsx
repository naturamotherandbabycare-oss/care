import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg">
                N
              </div>
              <span className="text-xl font-bold">Natura</span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Professional cleaning services for homes and offices. Trusted by 2,500+ families across Gujarat.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/919898809630" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300" 
                aria-label="WhatsApp">
                <span className="text-lg">💬</span>
              </a>
              <a href="tel:+919898809630" 
                className="w-10 h-10 rounded-full bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300" 
                aria-label="Call us">
                <span className="text-lg">📞</span>
              </a>
              <a href="mailto:hello@naturababycare.in" 
                className="w-10 h-10 rounded-full bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300" 
                aria-label="Email us">
                <span className="text-lg">📧</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">Services</h4>
            <ul className="space-y-3">
              {['Home Deep Cleaning', 'Office Cleaning', 'Sofa Cleaning', 'Carpet Cleaning', 'Kitchen & Bathroom', 'Move-In/Out'].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-300">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919898809630" className="hover:text-primary-400 transition-colors">
                  +91 98988 09630
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:hello@naturababycare.in" className="hover:text-primary-400 transition-colors">
                  hello@naturababycare.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Ahmedabad · Surat · Bhavnagar · Rajkot</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon-Sun: 7AM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            © {currentYear} Natura Baby & Mother Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-dark-500 hover:text-dark-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-dark-500 hover:text-dark-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
