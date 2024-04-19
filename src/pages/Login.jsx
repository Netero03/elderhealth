import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 w-full h-20 flex items-center justify-between px-5 text-white bg-zinc-900 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-w-full w-[1140px] max-md:flex-wrap">
                <Link to="/" className="flex-auto my-auto text-3xl font-extrabold leading-4 text-center">
                    ElderHealth
                </Link>
                <nav className="flex gap-5 text-base font-medium leading-4 max-md:flex-wrap max-md:max-w-full">
                    <ul className="flex flex-auto gap-5 my-auto">
                        <li className="grow">
                            <Link to="/plans">Plans</Link>
                        </li>
                        <li>
                            <Link to="/services">OurServices</Link>
                        </li>
                        <li>
                            <Link to="/mohtv">Moh TV</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link to="/media">Media</Link>
                        </li>
                    </ul>
                    <div className="flex gap-5 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81710bdb7ec54028125e3483fc70026e22b71ebe42bd5ba9037ade42011b304e?apiKey=17ae877e53e24efa98605986dde5cfcc&"
                            alt="User profile"
                            className="shrink-0 aspect-square w-[50px]"
                        />
                        <Link to="/login" className="justify-center px-6 py-4 my-auto border border-white border-solid rounded-[40px] max-md:px-5 cursor-pointer">
                            Log in
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function PhoneNumberForm() {
    return (
        <form className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-2xl font-medium tracking-tighter leading-[77px] text-zinc-900 max-md:max-w-full">
                Enter your number
            </h2>
            <div className="flex gap-5 items-start mt-6 text-base max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-start px-6 py-4 font-medium tracking-normal text-center whitespace-nowrap rounded-3xl bg-zinc-100 leading-[167%] text-zinc-900 max-md:px-5">
                    +91
                </div>
                <label htmlFor="phoneNumber" className="sr-only">
                    Phone number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className="grow justify-center items-start px-5 py-4 rounded-3xl bg-zinc-100 text-zinc-300 w-fit max-md:max-w-full"
                />
            </div>
            <div className="flex flex-col self-end mt-2.5 max-w-full text-xs font-semibold tracking-wide leading-5 text-center uppercase w-[215px]">
                <button
                    type="submit"
                    className="justify-center px-8 py-5 text-white bg-red-500 shadow rounded-[30px] max-md:px-5 cursor-pointer"
                >
                    Send OTP
                </button>
                <button
                    type="button"
                    disabled
                    className="justify-center px-8 py-5 mt-5 whitespace-nowrap bg-zinc-100 rounded-[30px] text-black text-opacity-30 max-md:px-5 max-md:mt-10 cursor-pointer"
                >
                    Next
                </button>
            </div>
            <label className="flex gap-5 self-start mt-5 text-base font-medium tracking-tight leading-3 text-black max-md:mt-10">
                <input type="checkbox" className="shrink-0 aspect-square w-[21px]" />
                <span className="flex-auto">
                    I accept to receive promotional updates
                </span>
            </label>
            <p className="mt-5 text-sm font-medium tracking-normal leading-3 underline text-zinc-900 max-md:mt-10 max-md:max-w-full">
                By continuing, you agree to our{" "}
                <a href="#" className="underline">
                    Terms & Conditions
                </a>
            </p>
        </form>
    );
}

const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center bg-white w-full h-auto">
                
                <main className="w-full max-md:max-w-full h-full">

                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2889e7f2858c435f594f9cce892e6f6a142b2da905cb07ba4fdad05600fa44f5?apiKey=17ae877e53e24efa98605986dde5cfcc&"
                                alt="Promotional image"
                                className="grow w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <PhoneNumberForm />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Login