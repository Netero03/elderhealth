import React from 'react'
import { Link } from 'react-router-dom';

const HelpCard = ({ imageSrc, title }) => (
    <div className="flex flex-col px-8 py-12 leading-10 text-white bg-red-500 rounded-3xl max-md:px-5">
        <img loading="lazy" src={imageSrc} alt="" className="self-center w-11 aspect-[1.1]" />
        <div className="justify-center mt-8">{title}</div>
    </div>
);

const ServiceCard = ({ imageSrc, title }) => (
    <div className="flex flex-col px-14 py-16 rounded-3xl bg-gray-200 bg-opacity-80 max-md:px-5">
        <img loading="lazy" src={imageSrc} alt="" className="self-center w-11 aspect-square" />
        <div className="justify-center mt-8">{title}</div>
    </div>
);

const HelpCardHome = () => {

    const helpCards = [
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/22c6662d0b9fdf54d8289dde3b293b8069950fb35b3e232f4d7f939ffee57cf4?apiKey=fdc97f1298d9417ba73f632a312daddd&", title: "Medical equipment &\ndevices" },
    ];

    const serviceCards = [
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c768516a4c00b2ed91fc106e2d5a5ff545d6fb80114a92c21291f55171dc8c83?apiKey=fdc97f1298d9417ba73f632a312daddd&", title: "Elder tech" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c98384b0d3d0fc8f145f3ea9da6e9f6782e204298de879207b847b9d24b1c61?apiKey=fdc97f1298d9417ba73f632a312daddd&", title: "Health support" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/556f726155dc595bd5a1851230223168dd857c39bdeb46ebc2ea31ee1e53aace?apiKey=fdc97f1298d9417ba73f632a312daddd&", title: "Home health care" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a3439b5116b40e17ec728de5653596badd319af1bce3268a9d320cd3cb69d0c?apiKey=fdc97f1298d9417ba73f632a312daddd&", title: "Tele consultation" },
    ];

    return (
        <div className="flex flex-col items-center px-16 pt-20 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-1.5 max-w-full w-[1197px]">
                <div className="flex gap-5 text-black max-md:flex-wrap max-md:max-w-full">
                    <h2 className="flex-auto text-4xl font-semibold tracking-tighter leading-[56.16px]">
                        How we help
                    </h2>
                    <Link className="flex-auto self-start text-base font-medium tracking-normal leading-8 text-center">
                        View all →
                    </Link>
                </div>
                <div className="flex gap-px mt-14 text-lg font-medium tracking-tighter leading-10 text-center text-zinc-900 max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-auto gap-5 justify-end max-md:flex-wrap max-md:max-w-full">
                        {helpCards.map((card, index) => (
                            <HelpCard key={index} imageSrc={card.imageSrc} title={card.title} />
                        ))}
                        {serviceCards.map((card, index) => (
                            <ServiceCard key={index} imageSrc={card.imageSrc} title={card.title} />
                        ))}
                    </div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26d1eb09199860edd9302e73bd50d15629b5264a9a771e96b9831b5d6629a6f5?apiKey=fdc97f1298d9417ba73f632a312daddd&" alt="" className="shrink-0 my-auto w-11 shadow-sm aspect-square" />
                </div>
                <div className="mt-10 ml-3.5 max-w-full w-[1124px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col pr-5 mt-32 text-lg max-md:mt-10 max-md:max-w-full">
                                <h3 className="text-4xl font-semibold tracking-tighter text-center text-black leading-[57.96px] max-md:max-w-full">
                                    Medical equipment & devices
                                </h3>
                                <p className="justify-center mt-11 tracking-tighter leading-5 text-zinc-900 max-md:mt-10 max-md:max-w-full">
                                    Access at-home medical equipment to make elders' lives easier and safer.
                                    <br />
                                    Cost-effective devices for on-time medical alerts. Choose from digital
                                    <br />
                                    thermometers, oxygen cylinders, BP instruments, CPAP & more
                                </p>
                                <button className="justify-center self-start px-10 py-6 mt-36 font-medium tracking-wide text-center text-white capitalize shadow bg-zinc-900 leading-[124%] rounded-[70px] max-md:px-5 max-md:mt-10">
                                    Book Services
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00fa444e6aa715f64dcf0432e6fe15f49b4b9044b1e42612f0b11fb9109b8dbc?apiKey=fdc97f1298d9417ba73f632a312daddd&" alt="Medical equipment and devices" className="w-full aspect-square max-md:mt-10 max-md:max-w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCardHome