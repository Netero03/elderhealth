import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MyLink from "./MyLink";

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "More Health",
      description:
        "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
      buttonText: "Learn more",
      backgroundColor: "bg-red-500",
    },
    {
        title: "More Health",
        description:
          "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
        buttonText: "Learn more",
        backgroundColor: "bg-red-500",
      },
      {
        title: "More Health",
        description:
          "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
        buttonText: "Learn more",
        backgroundColor: "bg-red-500",
      },
      {
        title: "More Health",
        description:
          "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.",
        buttonText: "Learn more",
        backgroundColor: "bg-red-500",
      }
      
    // Add more cards as needed
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <div className="w-full flex items-center justify-center flex-col relative">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <section className={`flex flex-col h-full ${card.backgroundColor}`}>
              <div className="flex flex-col px-12 mt-auto">
                <h2 className="text-3xl font-bold tracking-tighter leading-10 text-white">
                  {card.title}
                </h2>
                <p className="mt-6 text-2xl tracking-tighter leading-7 text-white">
                  {card.description}
                </p>
                <MyLink className="self-start px-4 py-2 mt-4 text-base font-medium tracking-tighter leading-7 text-center shadow bg-zinc-100 rounded-[50px] text-zinc-900 transition duration-150 ease-in-out hover:scale-105">
                  {card.buttonText}
                </MyLink>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* Left and Right Buttons for Navigation */}
      <div className="absolute bottom-0 flex justify-center w-full py-4">
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-4" onClick={() => slider.slickPrev()}>
          Left
        </button>
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md" onClick={() => slider.slickNext()}>
          Right
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
