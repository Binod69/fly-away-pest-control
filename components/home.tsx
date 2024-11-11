import Image from 'next/image';

import CallNowBtn from './ui/call-now';

const HomePage = () => {
  return (
    <>
      <header className="mx-[2%]">
        <section className=" flex flex-col mx-auto  md:flex-row justify-between items-center">
          <article className="md:w-[50%] ">
            <p className=" leading-relaxed  text-lg  md:text-start md:text-xl text-textColor font-light font-poppins">
              Best Pest Control In Town
            </p>
            <h1 className=" md:text-start font-plarfairDisplay  text-3xl  md:text-6xl font-bold md:max-w-[100%] my-2 md:my-5">
              Safeguard Your Property with Industry-Leading Pest Control
            </h1>
            <p className="font-poppins  md:text-start text-base md:text-lg md:max-w-[92%] text-textColor opacity-70">
              We deliver comprehensive pest control solutions that safeguard
              your property and peace of mind. Our certified technicians use
              advanced, eco-friendly methods to eliminate current infestations
              and prevent future ones.
            </p>
            <CallNowBtn className="hidden md:inline-flex mt-5  items-center gap-2 rounded-sm  bg-[#CE1415] px-16 py-5 text-white hover:border-[#C10055] focus:outline-none focus:ring active:bg-white/90" />

            <p className="hidden md:block text-center font-poppins  md:text-start text-sm md:text-sm md:max-w-[92%] text-textColor opacity-60 mt-2">
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
          <CallNowBtn className=" inline-flex  w-[100%]  md:hidden  mt-5  items-center justify-center gap-2 rounded-sm  bg-[#CE1415] px-16 py-5 text-white hover:border-[#C10055] focus:outline-none focus:ring active:bg-white/90" />

          <p className="md:hidden font-poppins text-center  md:text-start text-sm md:text-lg md:max-w-[92%] text-textColor opacity-75 mt-2">
            24/7 Emergency Service
          </p>
        </section>
      </header>
    </>
  );
};

export default HomePage;
