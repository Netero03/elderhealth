import * as React from "react";
import { Footer, Navbar } from "../components";

function HowWeHelpCard({ icon, title }) {
  return (
    <div className="flex flex-col px-14 py-16 rounded-3xl bg-gray-200 bg-opacity-80 max-md:px-5">
      <img loading="lazy" src={icon} alt="" className="self-center w-11 aspect-square" />
      <div className="mt-8">{title}</div>
    </div>
  );
}

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

const Services = () => {
  const howWeHelpCards = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cc956a8f53405ba19b81be3cc60116c987f791e03ead8bc2982d94b4d0b318f?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Medical equipment &\ndevices" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4ef3ff8a5eeae40f289ed0d57bcece888cfd836cd660422eec8063451f71384?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Elder tech" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8406ea8f6c2614d50381474c2cb6831f0388e07b1373e2496df68b79007701a?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Health support" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de3425d92cfea14b49b24bea70ff41f3d5cbaf82deb2c0651123ef1787ae5e5b?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Home health care" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/77f590694f91b5efa531b0f262f61d892c286b11f65f0420e975f1a64f415c77?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Tele consultation" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/065e0176be2a2aff8907dcc016b44f68413f6567b7820b0aef85dca878d9a533?apiKey=17ae877e53e24efa98605986dde5cfcc&", title: "Lab & diagnostics" },
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

  return (
    <div className="inter-font">
      <Navbar/>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/429b8c1dfdd70007e71b2d04618e4ff8d9a8898f91f550beb96d3b22534cd5b2?apiKey=17ae877e53e24efa98605986dde5cfcc&"
        className="w-full h-auto aspect-w-16 aspect-h-9 max-md:max-w-full "
      />
      <div className="flex flex-col justify-end pt-12 w-full bg-stone-50 max-md:max-w-full">
        <div className="flex flex-col items-start self-center px-5 w-full text-lg max-w-[1689px] max-md:max-w-full">
          <header className="px-40 flex gap-5 self-stretch text-4xl font-semibold tracking-tighter leading-10 text-zinc-900 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <h1 className="flex-auto">How we help</h1>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac653108e27bef325880c57528d9bbcced4582c5d4517bdfc183042d002a2465?apiKey=17ae877e53e24efa98605986dde5cfcc&" alt="" className="shrink-0 self-start mt-3.5 aspect-[2.78] w-[75px]" />
          </header>
          <section className="pl-32 flex gap-5 justify-between self-stretch mt-9 ml-5 font-medium tracking-tighter text-center leading-[235%] text-zinc-900 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col justify-end px-8 py-12 leading-10 text-white bg-red-500 rounded-3xl max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc956a8f53405ba19b81be3cc60116c987f791e03ead8bc2982d94b4d0b318f?apiKey=17ae877e53e24efa98605986dde5cfcc&" alt="" className="self-center w-11 aspect-[1.1]" />
              <div className="mt-8">Medical equipment &<br /> devices</div>
            </div>
            {howWeHelpCards.map((card, index) => (
              <HowWeHelpCard key={index} icon={card.icon} title={card.title} />
            ))}
          </section>
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
      <Footer/>
    </div>
  );
}

export default Services