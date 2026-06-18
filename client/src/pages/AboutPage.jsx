import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { MEDICAL_TEAM } from '../utils/constants';

const SERVICES_LIST = [
  { icon: '👶', title: 'Newborn Baby Care', desc: 'Specialized care including bathing, feeding support, sleep monitoring, and overall baby wellness.' },
  { icon: '🤰', title: 'Mother Postnatal Care', desc: 'Physical and emotional recovery support for new mothers during the crucial postpartum phase.' },
  { icon: '🌸', title: 'Japa Caregiver Services', desc: 'Traditional postnatal care services delivered by experienced Japa maids for mother and baby.' },
  { icon: '🧴', title: 'Baby Bathing & Massage', desc: 'Gentle, traditional massages to support newborn bone development and digestion, followed by safe bathing.' },
  { icon: '💆‍♀️', title: 'Mother Massage & Recovery', desc: 'Therapeutic postpartum massages to relieve muscle tension, improve circulation, and speed up recovery.' },
  { icon: '🍼', title: 'Feeding & Lactation Support', desc: 'Guidance and assistance with breastfeeding techniques, latching, and maintaining feeding schedules.' },
  { icon: '🧼', title: 'Hygiene & Wellness Support', desc: 'Assistance in maintaining a clean, sanitized environment for both mother and child to prevent infections.' },
  { icon: '🌙', title: 'Day & Night Care Services', desc: 'Flexible care shifts to ensure round-the-clock support so new parents can get much-needed rest.' },
];

const WHY_CHOOSE_US = [
  { icon: '🎓', title: 'Experienced & Trained Caregivers', desc: 'Every caregiver is thoroughly vetted, trained, and highly experienced in newborn and mother care.' },
  { icon: '🛡️', title: 'Safe & Hygienic Care Practices', desc: 'Strict protocols for cleanliness and sanitization to protect the delicate health of mother and baby.' },
  { icon: '📋', title: 'Personalized Care Plans', desc: 'Custom schedules and routines tailored to the specific recovery and feeding needs of your family.' },
  { icon: '📦', title: 'Flexible Service Packages', desc: 'Choose from day care, night shifts, or 24/7 living care options based on your comfort.' },
  { icon: '⏰', title: '24/7 Support Options', desc: 'Constant availability to guide you through any late-night feeding queries or infant care doubts.' },
  { icon: '🤝', title: 'Trusted by Families', desc: 'The most trusted postnatal care provider in Ahmedabad, helping families build healthy foundations.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-dark-50">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100/50">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            About Us
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 tracking-tight text-balance leading-tight">
            Compassionate & Professional <br />
            <span className="text-primary-600">Mother & Newborn Care</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-dark-500 max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing the highest standard of support during your most important postpartum days, in the comfort of your home in <span className="font-semibold text-dark-800">Ahmedabad</span>.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Consult Our Caregivers</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-1 bg-primary-600 rounded" />
              <h2 className="text-3xl font-bold text-dark-900 leading-tight">
                Supporting You When You Need It Most
              </h2>
              <p className="text-dark-500 leading-relaxed text-base">
                At <strong>Natura Baby & Mother Care</strong>, we are dedicated to providing compassionate and professional care for mothers and newborn babies during the most important days after childbirth.
              </p>
              <p className="text-dark-500 leading-relaxed text-base">
                Our trained caregivers offer personalized support to help mothers recover comfortably while ensuring babies receive safe and loving care. We understand that every family has unique needs, and we strive to provide reliable, hygienic, and trustworthy services in the comfort of your home.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl p-8 shadow-xl shadow-primary-700/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-8 -translate-y-8 blur-lg" />
                <h3 className="text-xl font-bold mb-4">📍 Trust & Localization</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  Natura is deeply rooted in Gujarat. We specialize in home visits and traditional post-pregnancy care tailored specifically for Ahmedabad families.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏡</span>
                    <div>
                      <h4 className="font-semibold text-sm">Hygienic Home Visits</h4>
                      <p className="text-xs text-primary-200">Strict hygiene checks before every shift</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👩‍🍼</span>
                    <div>
                      <h4 className="font-semibold text-sm">Ahmedabad Care Experts</h4>
                      <p className="text-xs text-primary-200">Background checked and police-verified staff</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-100/50 px-3 py-1 rounded-full">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark-900">
              Specialized Care Packages
            </h2>
            <p className="mt-3 text-dark-500 text-sm sm:text-base">
              From traditional massages to modern feeding guidance, our caregivers support mother and newborn every step of the way.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-dark-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl mb-4 shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-bold text-dark-900 text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-dark-500 leading-relaxed flex-grow">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-300 to-accent-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-primary-50/50 border border-primary-100 rounded-3xl p-8 sm:p-10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Mission</h3>
              <p className="text-dark-500 leading-relaxed text-base">
                To support mothers and babies with professional, compassionate, and reliable care, helping families enjoy a healthy and stress-free postpartum journey.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-accent-50/50 border border-accent-100 rounded-3xl p-8 sm:p-10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center text-3xl mb-6">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Vision</h3>
              <p className="text-dark-500 leading-relaxed text-base">
                To become the most trusted mother and baby care service provider by delivering exceptional care and building lasting relationships with families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-100/50 px-3 py-1 rounded-full">
              Why Choose Us?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark-900">
              Why Ahmedabad Families Trust Natura
            </h2>
            <p className="mt-3 text-dark-500 text-sm sm:text-base">
              We align standard healthcare practices with postpartum traditions to provide comforting home-based care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-dark-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-xl shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-100/50 px-3 py-1 rounded-full">
              Our Medical Team
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark-900">
              Qualified Doctors & Specialist Staff
            </h2>
            <p className="mt-3 text-dark-500 text-sm sm:text-base">
              From gynaecologists to certified nurses and infant specialists — every member of our team is medically qualified and dedicated to your complete wellbeing at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {MEDICAL_TEAM.map((doctor, index) => (
              <div key={index} className="bg-dark-50 rounded-2xl p-6 border border-dark-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-3xl">
                      {doctor.emoji}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-900 text-lg">{doctor.name}</h3>
                      <p className="text-sm text-primary-600 font-medium">{doctor.role}</p>
                      <p className="text-xs text-dark-400">{doctor.experience}</p>
                    </div>
                  </div>
                  <p className="text-sm text-dark-500 leading-relaxed mb-6">{doctor.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {doctor.specialties.map((spec, si) => (
                    <span key={si} className="text-[11px] bg-white text-dark-600 border border-dark-200 px-2 py-0.5 rounded-full font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Have Questions About Newborn Care?</h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Book a free consultation session with our experts. We help you pick the right schedule and care options for your recovery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50 shadow-lg">
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/919898809630?text=Hi%20Natura!%20I%27d%20like%20to%20know%20more%20about%20your%20postnatal%20care%20packages%20in%20Ahmedabad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-lg transition-colors gap-2"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
