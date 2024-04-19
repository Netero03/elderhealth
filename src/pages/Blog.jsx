import * as React from "react";
import { Footer, Navbar } from "../components";

const Blog = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative overflow-hidden flex flex-col justify-center items-start self-stretch px-16 pt-96 pb-72 w-full text-white capitalize leading-[56px] min-h-[852px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
        <img
          loading="lazy"
          srcSet="/assets/images/blog-bg.jpg"
          className="object-cover absolute inset-0 w-full h-full"
          alt="Blog background"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-medium tracking-tighter mb-4">Unveiling Elder Care:</h1>
          <h2 className="text-3xl font-medium tracking-tighter">Stories, Tips, and Resources</h2>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog

