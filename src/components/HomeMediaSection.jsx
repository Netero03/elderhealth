import React from 'react'
import { Link } from 'react-router-dom';

function MediaCoverageItem({ src, alt }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="grow shrink-0 max-w-full aspect-[0.66] w-[290px] max-md:mt-2.5"
      />
    </div>
  );
}

const HomeMediaSection = () => {
    const mediaCoverageItems = [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1a39907a62dd335bbb389bd3420475e730c84f7c199bb2b02ff89f053027692?apiKey=fdc97f1298d9417ba73f632a312daddd&",
          alt: "Media coverage item 1",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3919ade5a78c1c0d23898bf45d0bdc5a077e383a1299ac510220cb728ad33648?apiKey=fdc97f1298d9417ba73f632a312daddd&",
          alt: "Media coverage item 2",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/abfb1ee55fe64b0d2515dbc186bdabeec035618750c1e868a563cfcb717c20ad?apiKey=fdc97f1298d9417ba73f632a312daddd&",
          alt: "Media coverage item 3",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/595feb8b790879ca8e4737cd2e370b67999365c4729bc60c2804e49ce2ed620d?apiKey=fdc97f1298d9417ba73f632a312daddd&",
          alt: "Media coverage item 4",
        },
      ];
    
      return (
        <section className="flex flex-col items-center px-16 pt-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-9 max-w-full w-[1190px]">
            <header className="flex gap-5 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
              <h2 className="flex-auto text-4xl font-semibold tracking-tighter leading-[57.96px]">
                Media coverage
              </h2>
              <Link to="/media" className="my-auto text-base font-medium tracking-normal leading-7 text-center">
                View all →
              </Link>
            </header>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {mediaCoverageItems.map((item, index) => (
                  <MediaCoverageItem
                    key={index}
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
}

export default HomeMediaSection