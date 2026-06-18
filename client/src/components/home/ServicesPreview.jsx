import { Link } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';
import { formatCurrency } from '../../utils/validators';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ServicesPreview() {
  // Show only first 3 services for preview (Postnatal Mother Care, Newborn Baby Care, Live-In Caretaker)
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-dark-900 tracking-tight">
            Holistic care for <span className="text-primary-600">every need</span>
          </h2>
          <p className="mt-4 text-dark-500 max-w-2xl mx-auto">
            From the first day home with your newborn to weeks of recovery, Natura Baby & Mother Care provides compassionate, professional services tailored entirely to you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <Card key={service.id} className={`group relative ${index === 1 ? 'gradient-primary text-white border-none' : ''}`}>
              <Link to="/services" className="absolute inset-0 z-10" aria-label={`View details of ${service.name}`} />
              <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${index === 1 ? 'bg-white/20 text-white' : 'bg-dark-100 text-dark-500'}`}>
                ↗
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${index === 1 ? 'bg-white/20' : 'bg-primary-100'}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-dark-900'}`}>
                {service.name}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${index === 1 ? 'text-white/80' : 'text-dark-500'}`}>
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-lg font-bold ${index === 1 ? 'text-white' : 'text-primary-600'}`}>
                  {formatCurrency(service.price)}
                </span>
                <span className={`text-xs font-medium ${index === 1 ? 'text-white/60' : 'text-dark-400'}`}>
                  {service.duration}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg">View All Services →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
