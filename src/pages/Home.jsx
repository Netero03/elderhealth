import React, { useEffect, useRef, useState } from 'react';
import { Footer, HelpCardHome, HomeBlogSection, HomeHearUsSection, HomeMediaSection, MohTvSection, MyLink, MySlider, Navbar, PartnersAndQuestions, PlanCardHome, SliderComponent } from '../components';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const [count, setCount] = useState({
    eldersEmpowered: 0,
    livesSaved: 0,
    eventsOrganised: 0
  });

  // Function to simulate counting animation
  const countAnimation = (target, value, duration) => {
    const increment = Math.ceil(value / (duration / 16)); // Increment value for each step
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(interval);
        current = value;
      }
      setCount((prevCount) => ({
        ...prevCount,
        [target]: current
      }));
    }, 16); // Run every 16ms (60fps)
  };

  useEffect(() => {
    // Simulate counting animation for each number
    countAnimation("eldersEmpowered", 60000, 2000);
    countAnimation("livesSaved", 500, 2000);
    countAnimation("eventsOrganised", 4000, 2000);
  }, []);

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
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/images/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-transparent h-[700px] mb-6 w-full px-10 pb-200 flex items-center justify-between relative lg:pr-40 lg:pl-40 " >
          <div>
            {/* Title */}
            <h1 className="text-6xl font-semibold text-white w-[50%]">Engage Empower Enhance</h1>
            {/* Subtitle */}
            <p className=" text-2xl text-white mt-10 w-[48%]">Because those who made us deserve to age magnificently from the comfort of their own homes.</p>
          </div>
          <div className="flex items-center w-[40%] justify-end">
            {/* Circle Mute/Unmute Button */}
            <button onClick={toggleSound} className="h-12 w-12 flex items-center justify-center bg-transparent border border-white rounded-full mr-4"> {isMuted ? (<img src="/assets/icons/mute.svg" width={20} height={20} />) : (<img src="/assets/icons/unmute.svg" width={20} height={20} />)}</button>
            {/* Connect with Us Button */}
            <button className="bg-[#cd4746] text-white font-semibold px-4 py-2 rounded-full">Connect with Us</button>
          </div>
        </div>

        {/* Rounded Rectangle */}
        <div className="bg-[#cd4746] rounded-full w-[1200px] h-[270px] justify-center items-center text-center py-10 flex flex-row absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">{count.eldersEmpowered}+</p>
            <p className="text-white">Elders Empowered</p>
          </div>
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">PAN India </p>
            <p className="text-white">Operated</p>
          </div>
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">{count.livesSaved}+ </p>
            <p className="text-white">Lives Saved</p>
          </div>
          <div className='p-16 '>
            <p className="text-3xl font-semibold text-white">{count.eventsOrganised}+  </p>
            <p className="text-white">Events Organised</p>
          </div>
        </div>

        {/* Second Container */}
        <div className="bg-gray-100 h-full w-full flex flex-col items-center ">
          <h2 className="text-3xl font-semibold mb-10 pt-40 pr-52 pl-52 text-center">Help your parents age magnificently with India's most trusted senior care brand</h2>

          {/* Cards Section */}
          <div className="w-full flex items-center justify-center flex-col ">
            {/* <section className="flex flex-col grow pb-px w-[850px] h-[425px] rounded-[30px] max-md:mt-5 max-md:max-w-full bg-red-500">
              <div className="flex flex-col px-12 mt-[225px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-3xl font-bold tracking-tighter leading-10 text-white max-md:max-w-full">
                  More Health
                </h2>
                <div className="flex gap-5 items-start max-md:flex-wrap max-md:max-w-full">
                  <p className="flex-auto self-end mt-6 text-2xl tracking-tighter leading-7 text-white max-md:max-w-full">
                    3 out of 4 seniors suffer from a chronic condition. Give your <br />
                    parents access to better healthcare with Emoha.
                  </p>
                  <MyLink className="justify-center self-start px-4 py-2 text-base font-medium tracking-tighter leading-7 text-center shadow bg-zinc-100 rounded-[50px] text-zinc-900 transition duration-150 ease-in-out hover:scale-105">
                    Learn more
                  </MyLink>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 py-7 mt-5 rounded-b-[30px] bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full">
                <div className="shrink-0 h-1 bg-white max-md:max-w-full" />
              </div>
            </section>

            <div className='pt-10'>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-4">Left</button>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">Right</button>
            </div> */}
          </div>
          <MySlider />
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
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 transition duration-150 ease-in-out hover:scale-105 cursor-pointer">
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
      <MohTvSection />
      <HomeBlogSection />
      <HomeHearUsSection />
      <HomeMediaSection />
      <PartnersAndQuestions />
      <Footer />
    </div>
  );
}

export default Home;
