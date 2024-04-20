import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyLink from './MyLink';

const HelpCard = ({ imageSrc, title, isSelected, onClick }) => (
    <div className={`flex flex-col px-8 py-12 mx-2 leading-10 text-white rounded-3xl ${isSelected ? 'bg-red-500' : 'bg-gray-500'}`} onClick={onClick}>
        <img loading="lazy" src={imageSrc} alt="" className="self-center w-11 aspect-[1.1]" />
        <div className="justify-center mt-8">{title}</div>
    </div>
);

const HelpCardHome = () => {
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

    const cardDetails = [
        {
            title: "Medical equipment & devices",
            description: "Access at-home medical equipment to make elders' lives easier and safer. Cost-effective devices for on-time medical alerts. Choose from digital thermometers, oxygen cylinders, BP instruments, CPAP & more",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        {
            title: "Elder tech",
            description: "Description for Elder Tech",
            buttonText: "Button Text for Medical health & devices",
            imageSrc: "/assets/images/hearfromus-bg.jpg"
        },
        {
            title: "Health Support",
            description: "Description for Heath Support",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        {
            title: "Home Heath Care",
            description: "Description for Home Heath Care",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        {
            title: "Tele consultation",
            description: "Description for Tele consultation",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        {
            title: "Lab And Diagnostics",
            description: "Description for Lab And Diagnostics",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        {
            title: "Convenience",
            description: "Description for Convenience",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        {
            title: "Home Services",
            description: "Description for Home Services",
            buttonText: "Book Services",
            imageSrc: "/assets/images/medical-equipment.jpg"
        },
        // Add details for other cards here...
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
        <div className="flex flex-col items-center px-16 pt-20 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-1.5 max-w-full w-[1197px]">
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
                <div className=" ml-3.5 max-w-full w-[1124px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col pr-5 mt-32 text-lg max-md:mt-10 max-md:max-w-full">
                                <h3 className="text-4xl font-semibold tracking-tighter text-center text-black leading-[57.96px] max-md:max-w-full">
                                    {cardDetails[selectedCardIndex].title}
                                </h3>
                                <p className="justify-center mt-11 tracking-tighter leading-5 text-zinc-900 max-md:mt-10 max-md:max-w-full">
                                    {cardDetails[selectedCardIndex].description}
                                </p>
                                <button className="justify-center self-start px-10 py-6 mt-36 font-medium tracking-wide text-center text-white capitalize shadow bg-zinc-900 leading-[124%] rounded-[70px] max-md:px-5 max-md:mt-10">
                                    {cardDetails[selectedCardIndex].buttonText}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                            <img loading="lazy" src={cardDetails[selectedCardIndex].imageSrc} className=' rounded-3xl mt-32' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCardHome;