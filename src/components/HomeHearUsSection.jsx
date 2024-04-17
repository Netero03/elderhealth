import * as React from "react";

const testimonials = [
    {
        name: "Bisham Malkani",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cd1ba274852dc1b987717ffd5651be92149ad0c98c8e7ecc38087bb4b889eae?apiKey=fdc97f1298d9417ba73f632a312daddd&",
        testimonial:
            "Emoha pulled me out of the horrible whirlpool was in, and now I feel I am a ne…",
    },
    {
        name: "Vandana D'souza",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cd1ba274852dc1b987717ffd5651be92149ad0c98c8e7ecc38087bb4b889eae?apiKey=fdc97f1298d9417ba73f632a312daddd&",
        testimonial:
            "Emoha is there to support my parents while I'm miles away and it gives me the peace …",
    },
    {
        name: "Ramesh Lal Arora",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cd1ba274852dc1b987717ffd5651be92149ad0c98c8e7ecc38087bb4b889eae?apiKey=fdc97f1298d9417ba73f632a312daddd&",
        testimonial:
            "Emoha helps me with my day-to-day activities and hospital visits. I am very…",
    },
];

const TestimonialCard = ({ name, image, testimonial }) => {
    return (
        <div className="flex flex-col grow pb-9 w-full bg-white rounded-3xl max-md:mt-5">
            <div className="flex justify-center items-center px-16 bg-black rounded-t-3xl aspect-square max-md:px-5">
                <img
                    loading="lazy"
                    src={image}
                    alt={`${name}'s testimonial image`}
                    className="mt-16 mb-10 aspect-square w-[50px] max-md:mt-10"
                />
            </div>
            <div className="flex flex-col px-4 mt-6 text-zinc-900">
                <h3 className="text-2xl font-semibold tracking-tighter leading-8 capitalize">
                    {name}
                </h3>
                <p className="justify-center mt-6 text-lg font-medium tracking-tighter leading-7">
                    {testimonial}
                </p>
            </div>
        </div>
    );
}

const HomeHearUsSection = () => {
    return (
        <>
            <section className="relative flex flex-col justify-center w-full text-5xl font-semibold tracking-tighter text-center text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[550px] max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4459ceb298c8a4232a871bb6965e311fdc2eac6e3656cc72ee232b1c79fc1?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                        alt="Background image"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <h1 className="relative justify-center mt-36 mb-24 max-w-full w-[691px] max-md:my-10 max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
                        Good news travels fast: <br /> What everyone is talking about us
                    </h1>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/167ae7d12f8bc5e99eb40940fb36c311518da29765504f5d9253c7d652891173?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                alt="Decorative image"
                className="max-w-full aspect-square w-[250px] absolute z-100 top-[6425px] left-24"
            />
            <section className="px-20 pb-20 w-full bg-red-500 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-10 max-md:flex-col max-md:gap-0 pt-32">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="relative flex flex-col mt-0 text-4xl font-semibold tracking-tighter leading-10 text-white max-md:mt-6 max-md:max-w-full">

                            <div className="flex flex-col self-end mt-32 max-w-full w-[220px] max-md:mt-10">
                                <h2 className="justify-center">
                                    Hear from our <br /> members
                                </h2>
                                <div className="flex flex-row">
                                    <img
                                        loading="lazy"
                                        src="/assets/icons/left-arrow.svg"
                                        alt="Decorative image"
                                        className="mt-40 max-w-full aspect-[2.63] w-[130px] max-md:mt-10">
                                    </img>
                                    <img
                                        loading="lazy"
                                        src="/assets/icons/right-arrow.svg"
                                        alt="Decorative image"
                                        className="mt-40 max-w-full aspect-[2.63] w-[130px] max-md:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                        <div className="justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col w-[900px] max-md:ml-0 max-md:w-full"
                                    >
                                        <TestimonialCard {...testimonial} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default HomeHearUsSection;