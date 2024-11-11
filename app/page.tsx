import AboutSection from '@/components/about';
import HomePage from '@/components/home';
import Pricing from '@/components/pricing';
import ServicesSection from '@/components/services';

export default function Home() {
  return (
    <>
      <div className="my-10 md:my-20">
        <HomePage />
      </div>
      <AboutSection />
      <Pricing />
      <ServicesSection />
    </>
  );
}
