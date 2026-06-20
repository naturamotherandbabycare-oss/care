import Hero from '../components/home/Hero';
import StatsStrip from '../components/home/StatsStrip';
import ServicesPreview from '../components/home/ServicesPreview';
import HowItWorks from '../components/home/HowItWorks';
import CTABanner from '../components/home/CTABanner';
import Testimonials from '../components/home/Testimonials';
import HomeContact from '../components/home/HomeContact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <HowItWorks />
      <CTABanner />
      <Testimonials />
      <HomeContact />
    </>
  );
}
