import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-50 via-primary-50/30 to-dark-50">
      {/* Animated background blobs */}
      <div className="blob w-96 h-96 bg-primary-300 top-20 -right-20" />
      <div className="blob w-80 h-80 bg-accent-300 bottom-20 -left-20" style={{ animationDelay: '2s' }} />
      <div className="blob w-64 h-64 bg-primary-200 top-1/2 left-1/3" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-soft" />
              #1 Mother & Newborn Baby Care in Gujarat
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 leading-tight tracking-tight">
              Compassionate care
              <span className="block text-primary-600 mt-2">for mother & baby.</span>
            </h1>
            
            <p className="mt-6 text-lg text-dark-500 leading-relaxed max-w-lg">
              Professional, reliable postnatal care, infant care, and Japa services with trained, verified caregivers. Book a free consultation and sit back with complete peace of mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" icon="✨">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Packages
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['🤰', '👶', '🌸', '🍼'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-500 text-sm">★</span>
                  ))}
                  <span className="text-sm font-semibold text-dark-700 ml-1">4.9</span>
                </div>
                <p className="text-xs text-dark-400 mt-0.5">Trusted by 2,500+ families</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block animate-fade-up animate-delay-200">
            <div className="relative">
              {/* Main Card */}
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 shadow-2xl shadow-primary-600/30 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 text-8xl">🤱</div>
                  <div className="absolute bottom-20 right-10 text-7xl">👶</div>
                  <div className="absolute top-1/3 right-1/4 text-6xl">🌸</div>
                </div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3">
                    MOTHER & INFANT CARE
                  </div>
                  <h3 className="text-2xl font-bold text-white">Your family deserves the best postpartum care</h3>
                  <p className="text-primary-100 text-sm mt-2">50+ certified, verified caregivers ready to support you</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-3xl font-bold text-primary-600">2,500+</div>
                <div className="text-xs text-dark-400 mt-1">Families Supported</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '3s' }}>
                <div className="text-3xl font-bold text-accent-600">98%</div>
                <div className="text-xs text-dark-400 mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
