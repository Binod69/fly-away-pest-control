import Image from 'next/image';
import { Phone } from 'lucide-react';

import { Button } from './ui/button';

const HomePage = () => {
  const phoneNumber = '+1234567890';

  return (
    <>
      <header className="mx-[2%]">
        <section className=" flex flex-col mx-auto  md:flex-row justify-between items-center">
          <article className="md:w-[50%] ">
            <p className=" leading-relaxed  text-xl  md:text-start md:text-xl text-textColor font-light font-poppins">
              Best Pest Control In Town
            </p>
            <h1 className=" md:text-start font-plarfairDisplay  text-3xl  md:text-6xl font-bold md:max-w-[100%] my-2 md:my-5">
              Safeguard Your Property with Industry-Leading Pest Control
            </h1>
            <p className="  md:text-start text-sm md:text-lg md:max-w-[92%] text-textColor opacity-70">
              We deliver comprehensive pest control solutions that safeguard
              your property and peace of mind. Our certified technicians use
              advanced, eco-friendly methods to eliminate current infestations
              and prevent future ones.
            </p>

            <Button
              size={'lg'}
              asChild
              className="hidden w-[25%] md:flex transform hover:scale-105 transition-all duration-200 hover:shadow-md hover:bg-[#D54B39] bg-brand text-white group mt-9"
            >
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                <span>Call Now</span>
              </a>
            </Button>
            <p className="hidden md:block text-center  md:text-start text-sm md:text-lg md:max-w-[92%] text-textColor opacity-60 mt-2">
              24/7 Emergency Service
            </p>
          </article>
          <div className="md:w-[50%] mt-4 hidden md:flex">
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

          <p className="md:hidden text-center  md:text-start text-sm md:text-lg md:max-w-[92%] text-textColor opacity-60 mt-2">
            24/7 Emergency Service
          </p>
        </section>
      </header>
    </>
  );
};

export default HomePage;
