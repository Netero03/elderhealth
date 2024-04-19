import * as React from "react";
import { Footer, Navbar } from "../components";

function HeroSection() {
  return (
    <div className="flex overflow-hidden relative flex-col pt-20 w-full text-5xl font-medium tracking-tighter text-white capitalize leading-[56px] min-h-[852px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
      <img src="/assets/images/mohtv-bg.jpg" alt="Hero background" className="object-cover absolute inset-0 size-full" />
      <h1 className="relative self-start mt-72 ml-96 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
        Streaming Memories, <br /> Connecting Elders Through <br /> the Screen
      </h1>
      <div className="relative mt-40 w-full min-h-[200px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

function CategoryFilter({ categories }) {
  return (
    <div className="flex gap-5 max-md:flex-wrap">
      <div className="flex flex-auto gap-2 self-start max-md:flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`justify-center px-4 py-3.5 rounded-2xl ${index === 0 ? "bg-zinc-900 text-white" : "bg-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8fdfb24242515667ae6c034813e261d8185688be868ee8de52d928e523116cc?apiKey=17ae877e53e24efa98605986dde5cfcc&" alt="Filter icon" className="shrink-0 w-11 aspect-square" />
    </div>
  );
}

function ShowCard({ date, title, image, alt }) {
  return (
    <div className="flex flex-col text-black max-md:mt-10 rounded-md shadow-pink transition duration-300 hover:shadow-pink-hover">
      <img src={image} alt={alt} className="w-full aspect-[1.47]" />
      <div className="mt-6 text-sm tracking-tight leading-5 p-1">{date}</div>
      <h3 className="mt-4 text-base font-semibold tracking-tighter leading-6 p-1">{title}</h3>
    </div>
  );
}

function ShowSection({ title, shows }) {
  return (
    <section>
      <div className="flex gap-5 px-5 mt-28 max-w-full w-[1116px] max-md:flex-wrap max-md:mt-10">
        <h2 className="flex-auto text-4xl font-semibold tracking-tighter leading-10 text-black">{title}</h2>
        <a href="#" className="my-auto text-base font-medium tracking-normal leading-7 text-center text-zinc-900">
          View all →
        </a>
      </div>
      <div className="px-5 mt-16 max-w-full w-[1112px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {shows.map((show, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <ShowCard date={show.date} title={show.title} image={show.image} alt={show.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MohTv = () => {
  const categories = [
    "All",
    "More Health",
    "More Nutrition",
    "More Fitness",
    "More Safety",
    "More Busy",
    "More Conveniences",
  ];

  const upcomingShows = [
    {
      date: "24 Apr 2024",
      title: "Serenade Your Soul: Vocal Class for Seniors' Wellbeing",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c60f9532ad5ceee6eacc0fc856b43ef5bc6b80d014856c76c99d4dcf4b958f4?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Serenade Your Soul: Vocal Class for Seniors' Wellbeing",
    },
    {
      date: "23 Apr 2024",
      title: "Bollywood Jukebox",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb399da926a98585713be42b963934718072966dfe396681b570ae65307c7217?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Bollywood Jukebox",
    },
    {
      date: "23 Apr 2024",
      title: "Boost Your Stamina: Effective Exercises for Endurance Training",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f5a54bf287879f898105120e813fd2ae2661d368b720a8f9e62688ceac445f?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Boost Your Stamina: Effective Exercises for Endurance Training",
    },
    {
      date: "20 Apr 2024",
      title: "Wanderlust Melodies: Songs to Spark Your Next Adventure",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/02a8d466e5a9c7b99b7dd1644e2c5666c7031891f69e6b18c568e1f40cb9fee6?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Wanderlust Melodies: Songs to Spark Your Next Adventure",
    },
    {
      date: "20 Apr 2024",
      title: "Yoga for Diabetes: Effective Practices to Manage Blood Sugar Levels",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cd9a1036824f2ed8a2a995c50e093c82d53a6b6c0ca1fafe4a36f66e6d06dcb?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Yoga for Diabetes: Effective Practices to Manage Blood Sugar Levels",
    },
    {
      date: "20 Apr 2024",
      title: "Effective Knee Pain Exercises: Alleviate Discomfort Today",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f5a54bf287879f898105120e813fd2ae2661d368b720a8f9e62688ceac445f?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Effective Knee Pain Exercises: Alleviate Discomfort Today",
    },
  ];

  const pastShows = [
    {
      date: "18 Apr 2024",
      title: "Poonam Dhillon: Super Hits Collection",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c60f9532ad5ceee6eacc0fc856b43ef5bc6b80d014856c76c99d4dcf4b958f4?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Poonam Dhillon: Super Hits Collection",
    },
    {
      date: "18 Apr 2024",
      title: "Parkinson's Disease",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/705f4351189d27ccc51daaa977ff79579db9a0100f9ba2f2982491873754750f?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Parkinson's Disease",
    },
    {
      date: "18 Apr 2024",
      title: "Discover Antioxidant Powers: Spices & Herbs",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf753b2f808a594d47e44529ed5407fc03a4b8cd809cfbe0f8b8470cd0d40aec?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Discover Antioxidant Powers: Spices & Herbs",
    },
    {
      date: "18 Apr 2024",
      title: "Boost Upper Body Strength: Band & Ball Exercises",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cf4f980f6c74adc31fdc49db9f5d3c3ff65a2a40c358966dd06b9039f9861b8?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Boost Upper Body Strength: Band & Ball Exercises",
    },
    {
      date: "17 Apr 2024",
      title: "Evolution of Bollywood Item Numbers: From Cabaret to Contemporary",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbadbfdaecba8716a34b96f48ac7fbdbf1084865f6e09cd13d22d9f6ed88e2cf?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Evolution of Bollywood Item Numbers: From Cabaret to Contemporary",
    },
    {
      date: "17 Apr 2024",
      title: "Artful Healing: Therapeutic Art Techniques for Self-Discovery",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1443d07dca92fe8ee306ab6c5fa7fbcb6fdb23e384423cce37e759a5240b7bd2?apiKey=17ae877e53e24efa98605986dde5cfcc&",
      alt: "Artful Healing: Therapeutic Art Techniques for Self-Discovery",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col justify-center bg-neutral-100 ">
        <HeroSection />
        <div className="flex flex-col justify-end items-center pt-3.5 pb-20 w-full bg-stone-50 max-md:max-w-full">
          <nav className="flex justify-center items-center self-stretch px-16 w-full text-sm font-medium tracking-normal leading-3 bg-stone-50 text-zinc-900 max-md:px-5 max-md:max-w-full">
            <CategoryFilter categories={categories} />
          </nav>
          <ShowSection title="Upcoming Shows" shows={upcomingShows} />
          <ShowSection title="Past Shows" shows={pastShows} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MohTv