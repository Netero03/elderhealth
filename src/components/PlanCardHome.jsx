import React from "react";
import MyLink from "./MyLink";

const PlanCardHome = ({ plan, imageSrc, moreText, buttonText }) => {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full transition duration-150 ease-in-out hover:scale-105">
            <MyLink to="plans" className="">
                <div
                    className={`flex flex-col grow items-center px-20 py-16 w-full text-base tracking-tight leading-5 text-center text-white ${!imageSrc ? "bg-red-700 rounded-xl" : "overflow-hidden relative aspect-[0.56]"
                        } max-md:px-5 max-md:mt-10`}
                >
                    {imageSrc && (
                        <img
                            loading="lazy"
                            src={imageSrc}
                            alt=""
                            className="object-cover absolute inset-0 size-full"
                        />
                    )}
                    <div className="justify-center px-6 py-4 border border-white border-solid rounded-[35px] max-md:px-5 relative">
                        {moreText}
                    </div>
                    <div
                        className={`self-stretch mt-80 px-1 text-4xl font-semibold tracking-tighter leading-8 max-md:mt-10 ${imageSrc ? "relative" : ""
                            }`}
                    >
                        {plan}
                    </div>
                    <div
                        className={`justify-center px-6 py-4 mt-9 bg-white shadow rounded-[35px] text-zinc-900 max-md:px-5 ${imageSrc ? "relative" : ""
                            }`}
                    >
                        {buttonText}
                    </div>
                </div>
            </MyLink>
        </div>
    );
}

export default PlanCardHome;