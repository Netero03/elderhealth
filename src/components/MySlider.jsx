// import React, { useState, useEffect } from "react";
// import MyLink from "./MyLink";

// const MySlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const cards = [
//     {
//       title: "More Health",
//       description:
//         "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
//       buttonText: "Learn more",
//       backgroundColor: "bg-red-500",
//     },
//     {
//         title: "More Health",
//         description:
//           "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
//         buttonText: "Learn more",
//         backgroundColor: "bg-red-500",
//       },
//       {
//         title: "More busy",
//         description:
//           "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
//         buttonText: "Learn more",
//         backgroundColor: "bg-red-500",
//       },
//       {
//         title: "More fun",
//         description:
//           "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
//         buttonText: "Learn more",
//         backgroundColor: "bg-red-500",
//       },
//       {
//         title: "More happy",
//         description:
//           "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
//         buttonText: "Learn more",
//         backgroundColor: "bg-red-500",
//       }
//     // Add more cards as needed
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 0.5));
//     }, 50);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (progress >= 100) {
//       handleNext();
//       setProgress(0);
//     }
//   }, [progress]);

//   const handlePrev = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       const nextIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
//       setCurrentIndex(nextIndex);
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//     }
//   };

//   const handleNext = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
//       setCurrentIndex(nextIndex);
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//     }
//   };

//   return (
//     <div className="w-full flex items-center justify-center flex-col relative">
//       {/* Slider Container */}
//       <div className="relative w-full h-[425px] max-w-full overflow-hidden flex items-center justify-center">
//         {/* Cards */}
//         <div className="flex items-center justify-center absolute w-full" style={{ transform: `translateX(calc(-100% * ${currentIndex}))`, transition: "transform 0.5s ease" }}>
//           {[...cards, ...cards, ...cards].map((card, index) => (
//             <div
//               key={index}
//               className={`w-full h-full`}
//               style={{ marginLeft: `${index !== 0 ? "200%" : ""}` }}
//             >
//               <section className={`flex flex-col h-full ${card.backgroundColor}`}>
//                 <div className="flex flex-col px-12 mt-auto">
//                   <h2 className="text-3xl font-bold tracking-tighter leading-10 text-white">
//                     {card.title}
//                   </h2>
//                   <p className="mt-6 text-2xl tracking-tighter leading-7 text-white">
//                     {card.description}
//                   </p>
//                   <MyLink className="self-start px-4 py-2 mt-4 text-base font-medium tracking-tighter leading-7 text-center shadow bg-zinc-100 rounded-[50px] text-zinc-900 transition duration-150 ease-in-out hover:scale-105">
//                     {card.buttonText}
//                   </MyLink>
//                 </div>
//                 <div className="h-2 bg-gray-300 relative mt-auto">
//                   <div
//                     className="h-full bg-blue-500"
//                     style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
//                   />
//                 </div>
//               </section>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Left and Right Buttons for Navigation */}
//       <div className="absolute bottom-0 flex justify-center w-full py-4">
//         <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-4" onClick={handlePrev}>
//           Left
//         </button>
//         <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md" onClick={handleNext}>
//           Right
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MySlider;

// Card component
// const Card = () => {
//     return (
//         <section className="flex flex-col grow pb-px w-[850px] h-[425px] rounded-[30px] max-md:mt-5 max-md:max-w-full bg-red-500">
//             <div className="flex flex-col px-12 mt-[225px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
//                 <h2 className="text-3xl font-bold tracking-tighter leading-10 text-white max-md:max-w-full">
//                     More Health
//                 </h2>
//                 <div className="flex gap-5 items-start max-md:flex-wrap max-md:max-w-full">
//                     <p className="flex-auto self-end mt-6 text-2xl tracking-tighter leading-7 text-white max-md:max-w-full">
//                         3 out of 4 seniors suffer from a chronic condition. Give your <br />
//                         parents access to better healthcare with Emoha.
//                     </p>
//                     <button className="justify-center self-start px-4 py-2 text-base font-medium tracking-tighter leading-7 text-center shadow bg-zinc-100 rounded-[50px] text-zinc-900 transition duration-150 ease-in-out hover:scale-105">
//                         Learn more
//                     </button>
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center px-10 py-7 mt-5 rounded-b-[30px] bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full">
//                 <div className="shrink-0 h-1 bg-white max-md:max-w-full" />
//             </div>
//         </section>
//     );
// };
// import React, {useRef, useState} from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Card component
// const Card = ({ title, description }) => {
//     return (

//             <div className="flex flex-col grow pb-px w-[full] h-[400px] rounded-[30px]  bg-red-500 mx-5">
//                 <div className=" flex flex-col justify-end px-12 mt-6 max-md:px-5 max-md:mt-6 max-md:max-w-full ">
//                     <h2 className="text-3xl font-bold tracking-tighter leading-10 text-white max-md:max-w-full">
//                         {title}
//                     </h2>
//                     <div className="flex gap-5 items-start max-md:flex-wrap max-md:max-w-full">
//                         <p className="flex-auto self-end mt-6 text-2xl tracking-tighter leading-7 text-white max-md:max-w-full">
//                             {description}
//                         </p>
//                         <button className="justify-center w-64 self-start px-4 py-2 text-base font-medium tracking-tighter leading-7 text-center shadow bg-zinc-100 rounded-[50px] text-zinc-900 transition duration-150 ease-in-out hover:scale-105">
//                             Learn more
//                         </button>
//                     </div>
//                 </div>
//                 <div className="flex flex-col  justify-center px-10 py-7 mt-[197px] rounded-b-[30px] bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full ">
//                     <div className="shrink-0 h-1 bg-white max-md:max-w-full" />
//                 </div>
//             </div>

//     );
// };


// const MySlider = () => {
//     const sliderRef = useRef(null);
//     const [progress, setProgress] = useState(0);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         arrows: false,
//         centerMode: true,
//         cssEase: "linear",
//         centerPadding: "300px",
//         afterChange: (currentSlide) => {
//             setProgress(currentSlide);
//         }
//     };

//     const goToPrev = () => {
//         sliderRef.current.slickPrev();
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext();
//     };

//     return (
//         <div className="w-full flex items-center justify-center flex-col">
//             <Slider {...settings} className="flex w-full justify-end self-center mt-16 max-md:flex-wrap max-md:mt-10 pb-16 mx-10" ref={sliderRef}>
//                 <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//                 <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." />
//             </Slider>
//             <div className="pt-10">
//                 <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-4" onClick={goToPrev}>Left</button>
//                 <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md" onClick={goToNext}>Right</button>
//             </div>
//         </div>
//     );
// };

// export default MySlider;

import React, { useEffect, useRef, useState } from 'react';

const Card = ({ title, description, currentIndex, cardIndex }) => {
    const [progress, setProgress] = useState(0);
    const progressBarRef = useRef(null);

    useEffect(() => {
        let timer;
        if (currentIndex === cardIndex) {
            timer = setInterval(() => {
                setProgress(prevProgress => {
                    if (prevProgress >= 100) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevProgress + 1;
                });
            }, 50);
        }
        return () => clearInterval(timer);
    }, [currentIndex, cardIndex]);

    const handleMouseEnter = () => {
        clearInterval(progress);
    };

    const handleMouseLeave = () => {
        if (currentIndex === cardIndex) {
            const timer = setInterval(() => {
                setProgress(prevProgress => {
                    if (prevProgress >= 100) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevProgress + 1;
                });
            }, 50);
        }
    };

    return (
        <div className="flex flex-col grow pb-px w-[full] h-[400px] rounded-[30px] bg-red-500 mx-5 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>


            <div className="flex flex-col justify-end px-12 mt-6 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <h2 className="text-3xl font-bold tracking-tighter leading-10 text-white max-md:max-w-full">
                    {title}
                </h2>
                <div className="flex gap-5 items-start max-md:flex-wrap max-md:max-w-full">
                    <p className="flex-auto self-end mt-6 text-2xl tracking-tighter leading-7 text-white max-md:max-w-full">
                        {description}
                    </p>
                    <button className="justify-center w-64 self-start px-4 py-2 text-base font-medium tracking-tighter leading-7 text-center shadow bg-zinc-100 rounded-[50px] text-zinc-900 transition duration-150 ease-in-out hover:scale-105">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center px-10 py-7 mt-[197px] rounded-b-[30px] bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full">
                <div className=" h-1 bg-gray-300" ref={progressBarRef}>
                    <div className="h-full bg-pink-400" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        centerMode: true,
        cssEase: "linear",
        centerPadding: "300px",
        afterChange: (currentSlide) => {
            setCurrentIndex(currentSlide);
        }
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <Slider {...settings} className="flex w-full justify-end self-center mt-16 max-md:flex-wrap max-md:mt-10 pb-16 mx-10" ref={sliderRef}>
                <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={0} />
                <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={1} />
                <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={2} />
                <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={3} />
                <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={4} />
                <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={5} />
                <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={6} />
                <Card title="More fun" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={7} />
                <Card title="More Health" description="3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha." currentIndex={currentIndex} cardIndex={8} />
            </Slider>
            <div className="pt-10 flex flex-row gap-5">
                <div className='rounded-full bg-white shadow-md w-14 h-14 justify-center items-center flex'>
                    <img src="/assets/icons/black-left-arrow.svg" width={40} height={40} onClick={goToPrev}></img>
                </div>
                <div className='rounded-full bg-white shadow-md w-14 h-14 justify-center items-center flex'>
                <img src="/assets/icons/black-right-arrow.svg" width={40} height={40} onClick={goToNext}></img>
                </div>
            </div>
        </div >
    );
};
export default MySlider;
