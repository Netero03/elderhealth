import * as React from "react";
import { Footer, Navbar } from "../components";
import '../index.css'

const PlanCard = ({ plan, price, description, services, buttonText, isPopular }) => (
  <div className={`inter-font-500 flex flex-col grow items-start py-11 pr-20 pl-8 w-full text-xs tracking-wide leading-5 shadow-sm rounded-[30px] ${isPopular ? 'text-white bg-red-500' : 'text-zinc-900 bg-white'} max-md:px-5 max-md:mt-6`}>
    <h3 className="text-2xl tracking-wider leading-8 capitalize">{plan}</h3>
    <p className="mt-7 text-base leading-5">{description}</p>
    <div className="mt-5 ml-1 text-4xl tracking-widest leading-10 capitalize max-md:mt-10 max-md:ml-2.5">{price}</div>
    <div className="mt-3 text-sm leading-6">for 12 months/person</div>
    <div className="pt-5">
      {services.map((service, index) => (
        <div key={index} className={` flex flex-row capitalize p-1 text-sm`}>
          {service.icon}
          <div className="ml-2">{service.service}</div>
        </div>
      ))}
    </div>
    <div className="mt-10 text-xs tracking-wide leading-5 capitalize">
      {services.length === 3 ? '+ 3 additional care services' : services.length === 6 ? '+ 18 additional care services' : '+ 28 additional care services'}
    </div>
    <button className={`justify-center px-12 py-5 mt-24 text-sm tracking-wider text-center shadow-sm rounded-[35px] max-md:px-5 max-md:mt-10 ${isPopular ? 'bg-white text-zinc-900' : 'text-white bg-red-500'}`}>
      {buttonText}
    </button>
  </div>
);

const CARDS = [
  {
    title: "Daily Check-in Calls",
    description:
      "Get regular care calls from your Emoha Daughter to check on your health and well-being.",
  },
  {
    title: "24/7 Emergency Coordination",
    description:
      "Get 24*7 emergency support with ambulance coordination and on-call doctor assistance.",
  },
  {
    title: "Ambulance Evacuation Expenses",
    description:
      "Get all ambulance expenses within the city limit covered by Emoha twice a year.",
  },
  {
    title: "Exclusive Online Clubs",
    description:
      "Get access to a range of exclusive online clubs designed for vibrant social interaction among seniors.",
  },
  {
    title: "Celebration of Special Days",
    description:
      "Celebrate birthdays and special days in style, creating cherished moments with our personalised celebrations.",
  },
  {
    title: "Emergency Doctor on Call",
    description:
      "Get immediate medical support with our emergency doctor on call.",
  },
  {
    title: "Helpdesk for Medicines, and more",
    description:
      "With our helpdesk, you can book a doctor's appointment, order medicines, lab tests and more.",
  },
  {
    title: "Discounted Value-Added Services",
    description:
      "Get exclusive discounts of up to 10% on medicines and other value-added services.",
  },
  {
    title: "Emoha Daughter",
    description:
      "Enjoy care support from Emoha Daughters, who will manage all the seniors' needs while keeping their kin regularly informed.",
  },
  {
    title: "Transport Assistance Helpdesk",
    description:
      "Now book a ride anywhere in the city with the help of our exclusive transport assistance helpdesk for seniors.",
  },
  {
    title: "Helpdesk for Carers / Nurse",
    description:
      "Get access to experienced geriatric carer and nurses at home.",
  },
  {
    title: "Visit by Emoha Companion",
    description:
      "Our Emoha Companion visits twice a month to check vitals, update medical records and more.",
  },
  {
    title: "Electronic Health Records",
    description:
      "Seamlessly manage health records with Electronic Health Records feature on the Emoha app.",
  },
  {
    title: "Access to Nurses and Attendants",
    description:
      "Ensure comprehensive care with easy access to our dedicated team of nurses and attendants.",
  },
  {
    title: "Unlimited Teleconsultation",
    description:
      "Get easy access to medical advice with unlimited doctor teleconsultation.",
  },
];

const Plans = () => {
  const plans = [
    {
      plan: 'Engage plan',
      price: '₹599',
      description: "Perfect for individuals actively seeking community support, companionship, connection, and engagement.",
      services: [
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: 'Access to online events',
        },
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: 'Exclusive Value-Added Services',
        },
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: '24/7 Emergency Coordination',
        },
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: 'Emergency Doctor on Call',
        },
      ],
      buttonText: 'Request callback',
      isPopular: false,
    },
    {
      plan: 'Empower plan',
      price: '₹59,999',
      description: 'Designed for individual who need assistance with chronic pain management & social support',
      services: [
        {
          icon: <img src="/assets/icons/tick-white.svg" alt="Service icon" width={15} height={15} />,
          service: 'Access to online events',
        },
        {
          icon: <img src="/assets/icons/tick-white.svg" alt="Service icon" width={15} height={15} />,
          service: 'Exclusive Value-Added Services',
        },
        {
          icon: <img src="/assets/icons/tick-white.svg" alt="Service icon" width={15} height={15} />,
          service: '24/7 Emergency Coordination',
        },
        {
          icon: <img src="/assets/icons/tick-white.svg" alt="Service icon" width={15} height={15} />,
          service: 'Emergency Doctor on Call',
        }
      ],
      buttonText: 'Request callback',
      isPopular: true,
    },
    {
      plan: 'Enhance plan',
      price: '₹1,49,999',
      description: 'Tailored for individual with acute health conditions and in need for constant medical monitoring',
      services: [
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: 'Access to online events',
        },
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: 'Exclusive Value-Added Services',
        },
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: '24/7 Emergency Coordination',
        },
        {
          icon: <img src="/assets/icons/tick-black.svg" alt="Service icon" width={15} height={15} />,
          service: 'Emergency Doctor on Call',
        }
      ],
      buttonText: 'Request callback',
      isPopular: false,
    },
  ];

  const handleViewMore = () => {
    // Handle view more button click
  };

  const handleDownloadBrochure = () => {
    // Handle download brochure button click
  };

  return (
    <div className="inter-font">
      <Navbar />
      <section className="flex flex-col items-center px-5 pt-20 pb-12 font-semibold tracking-tighter bg-center bg-cover " style={{ backgroundImage: 'url("/assets/images/plans-bg.jpg")' }}>
        <h1 className="mt-20 text-5xl tracking-widest leading-10 text-center text-white max-md:mt-10 max-md:max-w-full">
          Choose the Care Your Parents Deserve
        </h1>
        <p className="mt-11 text-xl tracking-wider leading-7 text-center text-white max-md:mt-10">
          We have all their needs covered.
        </p>
        <div className="flex gap-2.5 p-1 mt-16 max-w-full tracking-wide text-black capitalize bg-neutral-200 rounded-[30px] w-[450px] max-md:flex-wrap max-md:mt-10">
          <div className="justify-center items-start py-5 pr-16 pl-20 text-xs leading-5 bg-white rounded-[30px] max-md:pr-5 max-md:pl-8">
            For Individual
          </div>
          <div className="justify-center items-center px-16 py-5 text-xs leading-5 bg-neutral-200 rounded-[30px] max-md:px-5">
            For Couple
          </div>
        </div>
        <div className="mt-12 w-full max-w-[1116px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {plans.map((plan, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <PlanCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex flex-col items-start self-stretch py-12 mt-5 bg-neutral-100 max-md:max-w-full px-44">
        <div className="ml-4 text-3xl tracking-widest leading-7 text-black max-md:max-w-full">
          Empower Benefits for Individual
        </div>
        <div className="flex flex-col pt-6 pl-5 mt-1.5 w-full bg-stone-50 max-md:max-w-full">
          {[...Array(Math.ceil(CARDS.length / 3))].map((_, rowIndex) => (
            <div key={rowIndex} className="mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {CARDS.slice(rowIndex * 3, rowIndex * 3 + 3).map(
                  (card, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${index === 0 ? "w-[33%] max-md:ml-0" : "ml-5 w-[33%]"
                        } max-md:w-full`}
                    >
                      <div className="flex flex-col grow px-6 pt-20 pb-10 w-full rounded-xl bg-neutral-200 text-zinc-900 max-md:px-5 max-md:mt-6">
                        <div className="mt-48 text-base tracking-wider max-md:mt-10">
                          {card.title}
                        </div>
                        <div className="mt-4 text-sm tracking-wide">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleViewMore}
          className="justify-center self-center px-12 py-6 mt-11 text-base tracking-wide leading-5 text-center text-white bg-red-500 rounded-[43.92px] max-md:px-5 max-md:mt-10"
        >
          View more
        </button>
        <button
          onClick={handleDownloadBrochure}
          className="justify-center px-11 py-6 mx-auto mt-11 text-base tracking-wide leading-5 text-center text-white capitalize bg-zinc-900 rounded-[43.92px] max-md:px-5 max-md:mt-10"
        >
          Download brochure
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Plans