import { THE_PROCESS } from '../../utils/constants';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-dark-900 tracking-tight">
            Exceptional care in <span className="text-primary-600">4 simple steps</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {THE_PROCESS.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line */}
              {index < THE_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-dark-200" />
              )}
              
              {/* Step number */}
              <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl gradient-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary-600/30 group-hover:shadow-primary-600/50 transition-all duration-300 group-hover:-translate-y-1">
                {step.step}
              </div>
              
              <h3 className="mt-5 text-lg font-bold text-dark-900">{step.title}</h3>
              <p className="mt-2 text-sm text-dark-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
