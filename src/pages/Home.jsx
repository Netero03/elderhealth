import React from 'react';
import { HelpCardHome, HomeBlogSection, HomeHearUsSection, HomeMediaSection, MohTvSection, Navbar, PartnersAndQuestions, PlanCardHome } from '../components';

const Home = () => {
  const plans = [
    {
      plan: "Engage Plan",
      // imageSrc: "https://example.com/enhance-plan.jpg",
      moreText: "More busy",
      buttonText: "Learn more",
    },
    {
      plan: "Empower Plan",
      // imageSrc: "https://example.com/enhance-plan.jpg",
      moreText: "More safety",
      buttonText: "Learn more",
    },
    {
      plan: "Enhance Plan",
      // imageSrc: "https://example.com/enhance-plan.jpg",
      moreText: "More health",
      buttonText: "Learn more",
    },
  ];

  return (
    <div className='relative sm:-8 min-h-scree flex flex-col w-full inter-font'>
      <Navbar />
      <div className="w-full">
        {/* First Container */}
        <div className="bg-white h-[700px] w-full px-10 pb-200 flex items-center justify-between relative lg:pr-40 lg:pl-40 ">
          <div>
            {/* Title */}
            <h1 className="text-4xl font-semibold">Title</h1>
            {/* Subtitle */}
            <p className="text-lg text-gray-600">Subtitle</p>
          </div>
          <div className="flex items-center">
            {/* Circle Mute/Unmute Button */}
            <button className="h-12 w-12 flex items-center justify-center bg-gray-500 rounded-full mr-4"></button>
            {/* Connect with Us Button */}
            <button className="bg-[#cd4746] text-white font-semibold px-4 py-2 rounded-full">Connect with Us</button>
          </div>
        </div>

        {/* Rounded Rectangle */}
        <div className="bg-[#cd4746] rounded-full w-[1200px] h-[270px] justify-center items-center text-center py-10 flex flex-row absolute top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">60000+ </p>
            <p className="text-white">Elders Empowered</p>
          </div>
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">PAN India </p>
            <p className="text-white">Operated</p>
          </div>
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">500+ </p>
            <p className="text-white">Elders Empowered</p>
          </div>
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">4000+  </p>
            <p className="text-white">Events Organised</p>
          </div>
        </div>

        {/* Second Container */}
        <div className="bg-gray-100 h-full w-full flex flex-col items-center ">
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-10 pt-40 pr-52 pl-52 text-center">Help your parents age magnificently with India's most trusted senior care brand</h2>

          {/* Cards Section */}
          <div className="w-full flex items-center justify-center flex-col">
            {/* Card */}
            <div className="w-96 h-64 bg-white rounded-lg shadow-md p-6 mr-10">
              <h3 className="text-xl font-semibold mb-4">Company Goals</h3>
              <div className="w-full h-2 bg-gray-300 rounded-full mb-4">
                <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
              </div>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">Learn More</button>
            </div>

            {/* Left and Right Buttons for Navigation */}
            <div className='pt-10'>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-4">Left</button>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">Right</button>
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center px-16 py-16 mt-20 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1128px]">
          <header className="flex gap-5 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
            <h2 className="flex-auto text-4xl font-semibold tracking-tighter leading-10 max-md:max-w-full">
              Get the care plan your parents need
            </h2>
            <p className="flex-auto my-auto text-base tracking-tighter leading-5 text-right">
              We have all their needs covered.
            </p>
          </header>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {plans.map((plan, index) => (
                <PlanCardHome
                  key={index}
                  plan={plan.plan}
                  imageSrc={plan.imageSrc}
                  moreText={plan.moreText}
                  buttonText={plan.buttonText}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <HelpCardHome />
      <section className="flex flex-col justify-center w-full text-5xl font-semibold tracking-tighter text-center text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
        <div className="flex justify-center items-center px-16 py-20 w-full bg-red-500 max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
          <h1 className="justify-center mt-36 mb-24 max-w-full w-[859px] max-md:my-10 max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
            Welcome to the world of ElderHealth, <br /> India's #1 eldercare brand
          </h1>
        </div>
      </section>
      <MohTvSection/>
      <HomeBlogSection/>
      <HomeHearUsSection/>
      <HomeMediaSection/>
      <PartnersAndQuestions/>
    </div>
  );
}

export default Home;
