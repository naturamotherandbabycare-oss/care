import { TRIAL_PACKAGES, MONTHLY_PACKAGES } from '../utils/constants';
import { formatCurrency } from '../utils/validators';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function PricingPage() {
  return (
    <div className="pt-24 bg-dark-50">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Pricing</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-dark-900 tracking-tight">
            Transparent, <span className="text-primary-600">flexible</span> pricing
          </h1>
          <p className="mt-4 text-lg text-dark-500 max-w-2xl mx-auto">
            Choose the plan that works for your family. All packages include a free consultation and can be customized.
          </p>
        </div>
      </section>

      {/* Trial Packages */}
      <section className="py-16 bg-white border-b border-dark-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
              🌸 Try Before You Commit
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-dark-900">
              Trial Packages
            </h2>
            <p className="mt-2 text-dark-500 text-sm">
              Experience our professional care with no long-term commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TRIAL_PACKAGES.map((tier, index) => (
              <div 
                key={index}
                className={`
                  rounded-2xl p-8 relative transition-all duration-300 hover:shadow-xl border-2
                  ${tier.popular 
                    ? 'border-primary-500 bg-primary-50/20' 
                    : 'bg-white border-dark-100'
                  }
                `}
              >
                {tier.popular && (
                  <div className="absolute -top-4 right-6 bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </div>
                )}
                <div className="text-sm font-semibold uppercase tracking-wider mb-2 text-primary-600">
                  {tier.name}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-dark-900">
                    {formatCurrency(tier.price)}
                  </span>
                </div>
                <div className="text-sm text-dark-400 mb-4 font-medium">
                  {tier.period}
                </div>
                <p className="text-sm text-dark-500 mb-6 min-h-[40px]">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-dark-600">
                      <span className="text-primary-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <Button variant={tier.popular ? 'default' : 'outline'} className="w-full rounded-full py-3">
                    Start Trial
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              📅 Monthly Packages
            </span>
            <h2 className="mt-4 text-3xl font-bold text-dark-900">
              Long-term Postnatal Care
            </h2>
            <p className="mt-2 text-dark-500 text-sm">
              Comprehensive support for baby care and mother recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {MONTHLY_PACKAGES.map((tier, index) => (
              <div 
                key={index}
                className={`
                  rounded-2xl p-8 relative transition-all duration-300 hover:-translate-y-2
                  ${tier.popular 
                    ? 'gradient-primary text-white shadow-2xl shadow-primary-600/30 scale-105 z-10' 
                    : 'bg-white border-2 border-dark-100 hover:border-primary-200 hover:shadow-xl'
                  }
                `}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dark-900 text-white text-[10px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${tier.popular ? 'text-primary-200' : 'text-primary-600'}`}>
                  {tier.name}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-extrabold ${tier.popular ? 'text-white' : 'text-dark-900'}`}>
                    {formatCurrency(tier.price)}
                  </span>
                </div>
                <div className={`text-xs mb-6 font-medium ${tier.popular ? 'text-primary-200' : 'text-dark-400'}`}>
                  {tier.period}
                </div>
                <p className={`text-sm mb-6 min-h-[40px] ${tier.popular ? 'text-primary-100' : 'text-dark-500'}`}>
                  {tier.description}
                </p>
                <hr className={`my-4 ${tier.popular ? 'border-primary-500/50' : 'border-dark-100'}`} />
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className={`flex items-start gap-2 text-sm ${tier.popular ? 'text-white/90' : 'text-dark-600'}`}>
                      <span className={`mt-0.5 ${tier.popular ? 'text-primary-300' : 'text-primary-500'}`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <button className={`
                    w-full py-3 rounded-full font-semibold text-sm transition-all duration-300
                    ${tier.popular 
                      ? 'bg-white text-primary-700 hover:bg-dark-50 shadow-lg' 
                      : 'bg-dark-100 text-dark-700 hover:bg-primary-600 hover:text-white'
                    }
                  `}>
                    {tier.popular ? 'Book Now' : 'Get Started'}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
