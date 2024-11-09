import Image from 'next/image';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const HomePage = () => {
  const phoneNumber = '+1234567890';

  return (
    <>
      <header className="mt-10 mx-[2%]">
        <section className=" flex flex-col  md:flex-row justify-between items-center">
          <article className="md:w-[50%] ">
            <p className=" leading-relaxed  text-xl text-center md:text-start md:text-xl text-textColor font-light font-poppins">
              Best Pest Control In Town
            </p>
            <h1 className="text-center md:text-start font-plarfairDisplay  text-3xl  md:text-6xl font-bold md:max-w-[100%] my-2 md:my-5">
              Safeguard Your Property with Industry-Leading Pest Control
            </h1>
            <p className="text-center  md:text-start text-sm md:text-lg md:max-w-[92%] text-textColor opacity-70">
              We deliver comprehensive pest control solutions that safeguard
              your property and peace of mind. Our certified technicians use
              advanced, eco-friendly methods to eliminate current infestations
              and prevent future ones.
            </p>
            <Button
              asChild
              className="hidden md:flex w-[25%] transform hover:scale-105 transition-all duration-200 hover:shadow-md hover:bg-[#D54B39] border border-brand bg-white text-black group mt-9"
            >
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                <span>Call Now</span>
              </a>
            </Button>
          </article>
          <div className="md:w-[50%] mt-4 ">
            <Image
              src={'/img/hero.png'}
              alt="hero png"
              width={900}
              height={900}
              loading="lazy"
            />
          </div>
          <Button
            asChild
            className="md:hidden w-[100%] transform hover:scale-105 transition-all duration-200 hover:shadow-md hover:bg-[#D54B39] bg-brand text-white group mt-9"
          >
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span>Call Now</span>
            </a>
          </Button>
        </section>
      </header>
      {/* <section className=" my-10">
        <div className="container mx-[2%] px-4 flex justify-between flex-col md:flex-row items-center">
          <div className=" md:w-[50%] mb-10 md:mb-0">
            <p className=" leading-relaxed text-lg md:text-xl text-textColor font-light font-poppins">
              {' '}
              Best Pest Control In Town
            </p>
            <h1 className="text-4xl md:text-5xl font-plarfairDisplay font-bold mb-4">
              Safeguard Your Property with Industry-Leading Pest Control
            </h1>
            <p className="text-xl mb-6">
              Professional and eco-friendly pest control solutions for your
              peace of mind.
            </p>
            <Button size="lg" variant="secondary">
              Get a Free Quote
            </Button>
          </div>
          <div className="md:w-[50%]">
            <img
              src="/img/hero.png"
              alt="Pest control professional at work"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
