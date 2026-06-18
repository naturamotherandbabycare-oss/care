import { SERVICES } from '../utils/constants';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Our Services</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-dark-900 tracking-tight">
            Holistic care for <span className="text-primary-600">every need</span>
          </h1>
          <p className="mt-4 text-lg text-dark-500 max-w-2xl mx-auto">
            From the first day home with your newborn to weeks of recovery, Natura Baby & Mother Care provides compassionate, professional services tailored entirely to you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className={`rounded-2xl border border-dark-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? '' : 'bg-dark-50'}`}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left: Service Info */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-2xl shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-dark-900">{service.name}</h3>
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                            {service.category}
                          </span>
                        </div>
                        <p className="text-dark-500 leading-relaxed">{service.description}</p>
                        
                        {/* Features */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.features.map((feature, fi) => (
                            <span key={fi} className="text-xs bg-dark-100 text-dark-600 px-3 py-1 rounded-full font-medium">
                              ✓ {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action */}
                  <div className="p-8 flex flex-col items-center justify-center bg-dark-50 border-l border-dark-100">
                    <div className="text-center">
                      <div className="text-xs uppercase tracking-wider text-dark-400 font-semibold">Duration / Shift</div>
                      <div className="text-sm text-dark-500 font-medium mt-1">{service.duration}</div>
                      <Link to="/contact" className="mt-4 inline-block">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-10">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h2>
          {[
            { q: 'How do I book a caregiver?', a: 'Simply click "Book Now" or request a free consultation, select your preferred schedule, and fill out your details. Our coordinators will match you with a caregiver within 2 hours.' },
            { q: 'Are your caregivers verified?', a: 'Yes. Every caregiver is police-verified, reference-checked, and background-certified to ensure absolute safety for your home and family.' },
            { q: 'Can we meet the caregiver before starting?', a: 'Definitely. We arrange a face-to-face or video introduction with your matched caregiver so you can align on routines and confirm your choice before service starts.' },
            { q: 'What if the caregiver is not a good fit?', a: 'If you feel the caregiver is not a fit, we guarantee a replacement within 24 hours, no questions asked.' },
            { q: 'How do you monitor daily progress?', a: 'Our caregivers provide daily logs detailing baby feeding times, sleep schedules, mother\'s recovery progress, and wellness checks.' },
          ].map((faq, i) => (
            <details key={i} className="group mb-4 bg-white rounded-xl border border-dark-100 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark-900 hover:text-primary-600 transition-colors">
                {faq.q}
                <span className="ml-2 text-dark-400 group-open:rotate-180 transition-transform duration-200">▾</span>
              </summary>
              <div className="px-5 pb-5 text-dark-500 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
