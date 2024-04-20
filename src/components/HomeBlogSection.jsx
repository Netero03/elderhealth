import * as React from "react";
import { Link } from "react-router-dom";
import MyLink from "./MyLink";

const BlogCard = ({ blog }) => {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full cursor-pointer shadow-pink transition duration-300 hover:shadow-pink-hover rounded-3xl">
            <div className="flex flex-col grow text-zinc-900 max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col items-start px-3.5 pt-6 pb-20 w-full text-xs font-medium tracking-wide leading-5 text-center capitalize whitespace-nowrap aspect-[0.94] max-md:pr-5">
                    <img loading="lazy" src={blog.image} alt={blog.imageAlt} className="object-cover absolute inset-0 size-full" />
                    <Link className="relative justify-center px-6 py-3 mb-40 bg-white shadow rounded-[40px] max-md:px-5 max-md:mb-10">
                        {blog.category}
                    </Link>
                </div>
                <div className="flex flex-col justify-center py-1.5 mx-5 mt-7 text-2xl font-semibold tracking-tighter leading-8 max-md:mx-2.5">
                    <div className="justify-center" dangerouslySetInnerHTML={{ __html: blog.title }}></div>
                </div>
            </div>
            <button className="justify-center px-9 py-4 bg-red-500 shadow rounded-[40px] max-md:px-5 w-[50%] ml-20 mb-5">
                Read More 
            </button>
        </div>
    );
}

const HomeBlogSection = () => {
    const blogs = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/849c8d12f242ab0603340348e6689286bf7edeaba19a7eea0add826d6a65bfdb?apiKey=fdc97f1298d9417ba73f632a312daddd&",
            imageAlt: "The Impressive Story of Winning Medals in Athletics",
            category: "play",
            title: "The Impressive Story of <br /> Winning Medals in Athletics…"
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/403b7acd279e293e0c0f12f984a38c0d3af10bcc7ccd6c275f5ee3e75371a31c?apiKey=fdc97f1298d9417ba73f632a312daddd&",
            imageAlt: "Simple and Effective Natural Home Remedies",
            category: "health",
            title: "Simple and Effective Natural <br /> Home Remedies for…"
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9026c5a892b84912f6608ce5bf609a172bd071af3a4cad17fa10e6977c32b903?apiKey=fdc97f1298d9417ba73f632a312daddd&",
            imageAlt: "The Top 10 Home Remedies for Ringworm",
            category: "health",
            title: "The Top 10 Home Remedies <br /> for Ringworm"
        }
    ];

    return (
        <section className="flex justify-center items-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-9 mb-14 max-w-full w-[1147px] max-md:mb-10">
                <h2 className="text-4xl font-semibold tracking-tighter leading-9 text-zinc-900 max-md:max-w-full">
                    Read our latest blogs
                </h2>
                <div className="flex gap-5 mt-9 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                    <p className="flex-auto text-lg tracking-tighter leading-10 max-md:max-w-full">
                        Get the latest information on everything your parents need.
                    </p>
                    <MyLink to="/blogs" className="text-base font-medium tracking-normal leading-7 text-center">
                        View all →
                    </MyLink>
                </div>
                <div className="flex flex-col mt-11 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {blogs.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default HomeBlogSection