import Hero from '../components/home/Hero';
import StatsStrip from '../components/home/StatsStrip';
import ServicesPreview from '../components/home/ServicesPreview';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
