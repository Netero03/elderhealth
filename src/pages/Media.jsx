import * as React from "react";
import { Footer, Navbar } from "../components";

const media = [
  {
    id: 1,
    date: "18 June, 2021",
    title: "BW Wellbeing",
    image: "{{ext_4}}",
  },
  {
    id: 2,
    date: "19 June, 2021",
    title: "India Tech Online",
    image: "{{ext_5}}",
  },
  {
    id: 3,
    date: "16 June, 2021",
    title: "MENA FN",
    image: "{{ext_6}}",
  },
  {
    id: 4,
    date: "17 June, 2021",
    title: "Business News This Week",
    image: "{{ext_7}}",
  },
  {
    id: 5,
    date: "4 June, 2021",
    title: "PIB.gov",
    image: "{{ext_8}}",
  },
  {
    id: 6,
    date: "18 21 May, 2021",
    title: "CNBC TV",
    image: "{{ext_9}}",
  },
  {
    id: 7,
    date: "19 May, 2021",
    title: "Forbes India",
    image: "{{ext_10}}",
  },
  {
    id: 8,
    date: "15 May, 2021",
    title: "The Times of India",
    image: "{{ext_11}}",
  },
  {
    id: 9,
    date: "12 May, 2021",
    title: "The Hindu",
    image: "{{ext_12}}",
  },
  {
    id: 10,
    date: "29th April, 2021",
    title: "Your Story",
    image: "{{ext_13}}",
  },
  {
    id: 11,
    date: "27th April, 2021",
    title: "The Hindu Business Line",
    image: "{{ext_14}}",
  },
  {
    id: 12,
    date: "42, 26th April, 2021",
    title: "inc",
    image: "{{ext_15}}",
  },
  {
    id: 13,
    date: "3rd April, 2021",
    title: "The Hindu Business Line",
    image: "{{ext_16}}",
  },
  {
    id: 14,
    date: "31, March, 2021",
    title: "The Times of India",
    image: "{{ext_17}}",
  },
  {
    id: 15,
    date: "8th, March, 2021",
    title: "The Financial Express",
    image: "{{ext_18}}",
  },
  {
    id: 16,
    date: "8th March, 2021",
    title: "ET Brand Equity",
    image: "{{ext_19}}",
  },
  {
    id: 17,
    date: "5th March, 2021",
    title: "Newsmatters",
    image: "{{ext_20}}",
  },
  {
    id: 18,
    date: "13th February , 2021",
    title: "ET Brand Equity",
    image: "{{ext_21}}",
  },
  {
    id: 19,
    date: "1st March, 2021",
    title: "Hindustan Times",
    image: "{{ext_22}}",
  },
  {
    id: 20,
    date: "1st February, 2021",
    title: "Rural Marketing",
    image: "{{ext_23}}",
  },
];

const MediaCard = ({ date, title, image }) => (
  <div className="flex flex-col grow items-center text-center capitalize text-zinc-900 max-md:mt-8 cursor-pointer transition duration-150 ease-in-out hover:scale-105">
    <img
      src={image}
      alt={title}
      className="shrink-0 self-stretch rounded-3xl bg-stone-300 h-[220px] object-cover"
    />
    <div className="mt-5 text-sm tracking-tight leading-4">{date}</div>
    <div className="mt-5 text-2xl font-semibold tracking-tighter leading-6">
      {title}
    </div>
  </div>
);

const Media = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <img
        loading="lazy"
        src="/assets/images/media-bg.jpg"
        className="w-full h-auto aspect-w-16 aspect-h-9 max-md:max-w-full"
      />
      <div className="flex justify-center items-center px-16 pt-10 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1119px]">
          <div className="self-center text-5xl font-semibold tracking-tighter text-center capitalize leading-[56.12px] text-zinc-900 max-md:text-4xl">
            Media
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[0]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[1]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[2]} />
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[3]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[4]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[5]} />
              </div>
            </div>
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[6]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[7]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[8]} />
              </div>
            </div>
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[9]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[10]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[11]} />
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[12]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[13]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[14]} />
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[15]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[16]} />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <MediaCard {...media[17]} />
              </div>
            </div>
          </div>
          <div className="mt-12 max-w-full w-[735px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <MediaCard {...media[18]} />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <MediaCard {...media[19]} />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="{{ext_25}}"
            className="self-center mt-11 w-10 aspect-square max-md:mt-10"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media