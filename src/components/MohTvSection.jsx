import * as React from "react";
import { Link } from "react-router-dom";
import MyLink from "./MyLink";

const ShowCard = ({ title, description, imageUrl, watchNowLabel }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full shadow-pink transition duration-300 hover:shadow-pink-hover rounded-3xl">
    <div className="flex flex-col grow text-zinc-900 max-md:mt-10">
      <div className="flex overflow-hidden relative flex-col items-start px-3.5 pt-6 pb-20 w-full text-xs font-medium tracking-wide leading-5 text-center capitalize aspect-[0.94] max-md:pr-5">
        <img loading="lazy" src={imageUrl} alt={title} className="object-cover absolute inset-0 size-full" />
        <div className="relative justify-center px-4 py-3 mb-40 bg-white shadow rounded-[40px] max-md:mb-10 cursor-pointer">{title}</div>
      </div>
      <div className="flex flex-col justify-center py-1.5 mx-5 mt-7 text-2xl font-semibold tracking-tighter leading-8 max-md:mx-2.5">
        <div className="justify-center">{description}</div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 ">{watchNowLabel}</button>
      </div>
    </div>
  </div>
);

const MohTvSection = () => {
  const shows = [
    {
      title: "Ask Your Doctor",
      description: "Facing health issues? Don't worry and ask all your healt…",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d93d22b607ae0fac95c73d61d9df84d4a15e63b11870deba61ee47fceba9373?apiKey=fdc97f1298d9417ba73f632a312daddd&",
      watchNowLabel: "Watch Now",
    },
    {
      title: "Celebrating Seniors",
      description: "The day of World Senior Citizen's Day is here, so lets…",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/faf589438421afa5626339a16b0b24f225ed068e902b036ec6a093239d9015e3?apiKey=fdc97f1298d9417ba73f632a312daddd&",
      watchNowLabel: "Watch Now",
    },
    {
      title: "Birthday Celebration",
      description: "Let's congratulate all our Elders who had Birthdays…",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0976050dd288817ee6d13f6ca56f820994f1676d113e5a5efb2c96ef58ea6bff?apiKey=fdc97f1298d9417ba73f632a312daddd&",
      watchNowLabel: "Watch Now",
    },
  ];

  return (
    <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-11 mb-14 max-w-full w-[1147px] max-md:my-10">
        <div className="flex gap-5 justify-between text-zinc-900 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <h2 className="text-4xl font-semibold tracking-tighter leading-10 max-md:max-w-full">Browse our Moh TV shows</h2>
            <p className="mt-12 text-lg tracking-tighter leading-10 max-md:mt-10 max-md:max-w-full">
              Discover interactive live shows on our community platform.
            </p>
          </div>
          <MyLink to="/mohtv" className="self-end mt-20 text-base font-medium tracking-normal leading-7 text-center max-md:mt-10">
            View all →
          </MyLink>
        </div>
        <div className="flex flex-col mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {shows.map((show, index) => (
                <ShowCard key={index} title={show.title} description={show.description} imageUrl={show.imageUrl} watchNowLabel={show.watchNowLabel} />

              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MohTvSection;