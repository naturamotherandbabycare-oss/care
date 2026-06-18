import { STATS } from '../../utils/constants';

export default function StatsStrip() {
  return (
    <section className="gradient-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-dark-400 uppercase tracking-wider mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
