import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageItem({ src, alt }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className="shrink-0 max-w-full aspect-[1.64] w-[104px]"
        />
    );
}

function QuestionItem({ question, imageSrc }) {
    return (
        <div className="flex flex-col flex-1 grow shrink-0 justify-center px-4 py-6 bg-white rounded-xl basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto">
                    {question}
                </div>
                <img src={imageSrc} alt="" className="shrink-0 self-start aspect-square w-[15px]" />
            </div>
        </div>
    );
}

const PartnersAndQuestions = () => {
    const imageData = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f21ba9ca77841bd3f96dbe6fa991aac2b74f78c27977ed46100983760c85e510?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa17b109613c1d4548ee7a171de38d80d2083f856bc71c8be5dd0fd770abd0a1?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29721de47ea508fcb81cb242aabe0b0e47fdc80fb93e3e151bc8c2ff0241db91?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 3" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ece03ddc38beddcd9942f7e9bf04c00a3ef4cecb93a5143fb529a54fd16e7da?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 4" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a710c9715a74258c8e27740b4eaef0f98f26bf2cfbef178ca36f3ea7c4b99a4c?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 5" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1c02cc82891f59aec8cfdc59064db797cbfda709a07409f8a3d1be6dafdefbc?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 6" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/952a8b0827d1ffdc827800d1bb3a94a6dc6c2c3c53dd4e37a9839eac43434243?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 7" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dfb70f44e00fac827c575da9e5b709147a3851994346a979b6ae6b9f2b07e55?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 8" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/db6f0974f8d300151cfd8250a47e1f07b9d1830e44e929db21d71f6d4a468f4e?apiKey=fdc97f1298d9417ba73f632a312daddd&", alt: "Image 9" },

    ];

    const questions = [
        {
            id: 1,
            text: "If my parents are travelling and need help, how do you assist them?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/35406c31aec321b05d8a62672f42bc66e64df7a09316d94362730e8c77b3d3b5?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 2,
            text: "Is Emoha Elder Care available in other countries?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 3,
            text: "How will I be notified when any emergency occurs?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 4,
            text: "How can my parents raise an emergency request with your service?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/35406c31aec321b05d8a62672f42bc66e64df7a09316d94362730e8c77b3d3b5?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 5,
            text: "What are the areas in which you provide your services?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 6,
            text: "Where is your headquarters located? Can I visit?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 7,
            text: "Can I speak to an existing customer to learn about their experience with your services?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/35406c31aec321b05d8a62672f42bc66e64df7a09316d94362730e8c77b3d3b5?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 8,
            text: "What is the turnaround time (TAT) when an emergency arises?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 9,
            text: "Are your services available only during emergency situations?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        },
        {
            id: 10,
            text: "Do I need to live with my family to avail of your services?",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03607fb4e3ad3fdb32ac1d582c2fee033daa3b7c217ac584798a13f3e840e85?apiKey=fdc97f1298d9417ba73f632a312daddd&"
        }
    ];

    const settings = {
        dots: false, // Show dots navigation
        infinite: true, // Loop the slider infinitely
        speed: 2000, // Transition speed in milliseconds
        slidesToShow: 8, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true,
        autoplayspeed: 6000,
        arrows: false,
        cssEase: "linear"
    };

    return (
        <>
            <h2 className="self-center mt-28 text-4xl font-semibold tracking-tighter leading-[56.16px] text-zinc-900 max-md:mt-10">
                Our corporate partners
            </h2>
            <Slider {...settings} className="flex gap-5 w-full justify-end self-center mt-16 max-md:flex-wrap max-md:mt-10 pr-36 pl-36 pb-16">
                {imageData.map((image, index) => (
                    <ImageItem key={index} src={image.src} alt={image.alt} />
                ))}
            </Slider>
            <div className="flex justify-center items-center px-16 py-20 w-full font-medium bg-neutral-100 text-zinc-900 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center px-2.5 pb-2.5 mt-6 mb-3 max-w-full w-[1104px]">
                    <h2 className="text-2xl tracking-tighter leading-6 text-center capitalize">
                        NEED MORE INFO
                    </h2>
                    <h1 className="mt-11 text-4xl font-semibold tracking-tighter leading-10 text-center max-md:mt-10 max-md:max-w-full">
                        We got answers to your questions
                    </h1>
                    <nav className="flex gap-5 justify-center items-center px-7 mt-8 text-sm tracking-wide text-center text-black text-opacity-60 max-md:px-5">
                        <a href="#" className="justify-center self-stretch my-auto rounded-[30px]">
                            Moh TV
                        </a>
                        <a href="#" className="justify-center self-stretch px-7 py-5 text-white whitespace-nowrap bg-red-500 rounded-[30px] max-md:px-5">
                            General
                        </a>
                        <a href="#" className="justify-center self-stretch my-auto whitespace-nowrap rounded-[30px]">
                            Plans
                        </a>
                    </nav>
                    <section className="flex flex-col self-stretch mt-6 text-md tracking-tighter max-md:max-w-full">
                        {questions.map((question, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <div key={question.id} className={`flex gap-5 pb-1 mt-2.5 max-md:flex-wrap`}>
                                        <QuestionItem question={question.text} imageSrc={question.imageSrc} />
                                        {questions[index + 1] && (
                                            <QuestionItem question={questions[index + 1].text} imageSrc={questions[index + 1].imageSrc} />
                                        )}
                                    </div>
                                );
                            }
                            return null; // Skip rendering for odd-indexed questions
                        })}
                    </section>
                </div>
            </div>
        </>
    )
}

export default PartnersAndQuestions