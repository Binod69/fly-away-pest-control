import About from '@/components/about';
import HomePage from '@/components/home';
import Pricing from '@/components/pricing';

export default function Home() {
  return (
    <>
      <div className="my-10 md:my-20">
        <HomePage />
      </div>
      <Pricing />
      <About />
    </>
  );
}
