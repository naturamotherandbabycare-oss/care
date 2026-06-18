import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gradient-primary rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to experience the Natura difference?
            </h2>
            <p className="mt-4 text-primary-100 text-lg max-w-lg mx-auto">
              Book your free consultation session today and let our care coordinators match you with the perfect caregiver.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-700 hover:bg-dark-50">
                  Book Now — Free Quote
                </Button>
              </Link>
              <a href="https://wa.me/919898809630" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="text-white border-2 border-white/30 hover:bg-white/10 hover:text-white">
                  💬 WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
