import { Footer, MyLink, Navbar } from "../components";
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// function HowWeHelpCard({ icon, title }) {
//   return (
//     <div className="flex flex-col px-14 py-16 rounded-3xl bg-gray-200 bg-opacity-80 max-md:px-5">
//       <img loading="lazy" src={icon} alt="" className="self-center w-11 aspect-square" />
//       <div className="mt-8">{title}</div>
//     </div>
//   );
// }

function ServiceItem({ title, features, buttonText }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-40 flex gap-5 justify-between items-start self-center mt-8 w-full max-w-[1382px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col mt-1.5 tracking-tighter text-black leading-[124%]">
          <h3 className="text-2xl font-semibold tracking-tighter leading-7">{title}</h3>
          {features.map((feature, index) => (
            <div key={index} className={`mt-${index === 0 ? 3.5 : 4}${index === features.length - 1 ? ' tracking-tighter text-black leading-[124%] max-md:ml-2.5' : ''}`}>
              {feature}
            </div>
          ))}
        </div>
        <button className="justify-center px-8 py-4 tracking-normal text-center text-white bg-red-500 leading-[118%] rounded-[43.92px] max-md:px-5 cursor-pointer">
          {buttonText}
        </button>
      </div>
      <div className="shrink-0 mt-8 mx-5 max-w-full h-px bg-zinc-300 w-[1382px]" />
    </div>
  );
}

function MostBookedServiceCard({ image, title, buttonText }) {
  return (
    <div className="flex flex-col flex-1 items-center">
      <img loading="lazy" src={image} alt="" className="self-stretch w-full aspect-square" />
      <div className="mt-6 tracking-tighter text-zinc-900">{title}</div>
      <button className="justify-center px-8 py-4 mt-6 tracking-normal text-white bg-red-500 border border-solid border-red-500 border-opacity-50 rounded-[43.92px] max-md:px-5 cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
}

const HelpCard = ({ imageSrc, title, isSelected, onClick }) => (
  <div className={`flex flex-col px-8 py-12 mx-2 leading-10 text-white rounded-3xl ${isSelected ? 'bg-red-500' : 'bg-gray-500'}`} onClick={onClick}>
      <img loading="lazy" src={imageSrc} alt="" className="self-center w-11 aspect-[1.1]" />
      <div className="justify-center mt-8">{title}</div>
  </div>
);

const Services = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const sliderRef = useRef(null);

  const helpCards = [
    { imageSrc: "/assets/icons/doctor-bag-svgrepo-com.svg", title: "Medical equipment &\ndevices" },
    { imageSrc: "/assets/icons/webcam-alt-2-svgrepo-com.svg", title: "Elder tech " },
    { imageSrc: "/assets/icons/health-support.svg", title: "Health Support" },
    { imageSrc: "/assets/icons/heart-beat-2-svgrepo-com.svg", title: "Home Heath Care" },
    { imageSrc: "/assets/icons/telephone-svgrepo-com.svg", title: "Tele consultation" },
    { imageSrc: "/assets/icons/webcam-alt-2-svgrepo-com.svg", title: "Lab & Diagnostics" },
    { imageSrc: "/assets/icons/health-support.svg", title: "Convenience" },
    { imageSrc: "/assets/icons/telephone-svgrepo-com.svg", title: "Home Services" },

  ];
  const serviceItems = [
    {
      title: "Oxygen Cylinder",
      features: ["• Popular choice", "• Quick delivery", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "B P Instruments",
      features: ["• Excellent quality", "• Accurate reading", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "Gun Thermometer",
      features: ["• Popular choice", "• Quick delivery", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "Digital Thermometer",
      features: ["• Excellent quality", "• Accurate reading", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "Ambu Bag with Mask",
      features: ["• Excellent quality", "• Accurate reading", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "Pulse Oximeter",
      features: ["• Excellent quality", "• Accurate reading", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "Glucometer",
      features: ["• Popular choice", "• Quick delivery", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "BiPAP",
      features: ["• Excellent quality", "• Accurate reading", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "CPAP",
      features: ["• Excellent quality", "• Accurate reading", "• T&C Apply"],
      buttonText: "Book service",
    },
    {
      title: "Hearing aids",
      features: ["• Popular choice", "• Quick delivery", "• T&C Apply"],
      buttonText: "Book service",
    },
  ];

  const mostBookedServices = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b691ce66c542a0daaa14a07b7fa04db9d17f86e2df51a3ed2b740f332317f94?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Medicine", buttonText: "Book service" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf6ebe5996ac2d9b41f8e45159500fbfb2a76e3431a21a4d578e8755a200e1eb?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Full Body Check-up", buttonText: "Book service" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00c9ef7452cf0c1e826dd10e55227731f38da672aea96a4049962880174feacd?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "General Physician", buttonText: "Book service" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/341123bce5a99a729b35127d1b36272610fa9c95b68b83b7343e3820a7911856?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Physiotherapist", buttonText: "Book service" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/71b98dcf3025048d046fbd77d17a0327ed654d2922897d2d916931ed3eafcdf9?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Nurse", buttonText: "Book service" },
  ];

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <button className="absolute top-[40%] left-[-25px] transform -translate-y-1/2 z-10" onClick={onClick}>{'<'}</button>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <button className="absolute top-[40%] right-[-25px] transform -translate-y-1/2 z-10" onClick={onClick}>{'>'}</button>;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: selectedCardIndex,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => {
      // Update selected card index only if it's not the current one
      if (next !== selectedCardIndex) {
        setSelectedCardIndex(selectedCardIndex);
      }
    },
  };

  return (
    <div className="inter-font">
      <Navbar />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&"
        className="w-full h-auto aspect-w-16 aspect-h-9 max-md:max-w-full "
      />
      <div className="flex flex-col justify-end pt-12 w-full bg-stone-50 max-md:max-w-full">
        <div className="flex flex-col items-start self-center px-5 w-full text-lg max-w-[1689px] max-md:max-w-full">
          <div className="px-40 self-stretch  flex flex-col mt-1.5 max-w-full w-[1480px]">
            <div className="flex gap-5 text-black max-md:flex-wrap max-md:max-w-full">
              <h2 className="flex-auto text-4xl font-semibold tracking-tighter leading-[56.16px]">
                How we help
              </h2>
              <MyLink to="/services" className="flex-auto self-start text-base font-medium tracking-normal leading-8 text-center">
                View all →
              </MyLink>
            </div>
            <div className="w-full flex gap-px mt-14 text-lg font-medium tracking-tighter leading-10 text-center text-zinc-900 max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-auto gap-5 justify-end max-md:flex-wrap max-md:max-w-full w-full">
                <Slider {...settings} className='w-full flex justify-end self-center mt-16 max-md:flex-wrap max-md:mt-10 pb-16 mx-10' ref={sliderRef}>
                  {helpCards.map((card, index) => (
                    <HelpCard
                      key={index}
                      imageSrc={card.imageSrc}
                      title={card.title}
                      isSelected={selectedCardIndex === index}
                      onClick={() => handleCardClick(index)}
                    />
                  ))}
                </Slider>
              </div>
            </div>

          </div>
          <section>
            {serviceItems.map((item, index) => (
              <ServiceItem
                key={index}
                title={item.title}
                features={item.features}
                buttonText={item.buttonText}
              />
            ))}
          </section>
        </div>
        <section className="flex justify-center items-center px-16 py-20 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col mt-7 mb-5 w-full max-w-[1382px] max-md:max-w-full">
            <header className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
              <h2 className="flex-auto text-4xl font-semibold tracking-tighter leading-10 text-zinc-900">Most booked services</h2>
              <div className="flex gap-5 justify-between self-start mt-1">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f0ccb18a23714866c85c13f731fe36b7b268253268d3ac3f4cca24c5e330f4?apiKey=17ae877e53e24efa98605986dde5cfcc&" alt="" className="shrink-0 shadow-sm aspect-square w-[27px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88618fb4315d69fc68125b0830d2e99f3f79d10192a761251e8a34eacd3f3f8?apiKey=17ae877e53e24efa98605986dde5cfcc&" alt="" className="shrink-0 shadow-sm aspect-square w-[27px]" />
              </div>
            </header>
            <div className="flex gap-5 mt-8 text-lg font-medium leading-5 text-center max-md:flex-wrap">
              {mostBookedServices.map((service, index) => (
                <MostBookedServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  buttonText={service.buttonText}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Services