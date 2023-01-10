import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section className="bg-[#2a2a2a] text-white">
        <div className="mx-auto max-w-screen-xl px-4  lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-medium" id="name">
              Hello..! I am
            </h1>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl ">
              Yusuf Bin Imam
              <span className="sm:block "> Mern stack developer</span>
            </h1>

            <p
              id="text"
              className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed"
            >
              I love to create beautiful and performant products with delightful
              user experiences.!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://drive.google.com/file/d/1WAdTsZ8UrHGxjqIU8E2-VuezzIBcx4aH/view?usp=share_link">
                {" "}
                <button className="rounded py-3 px-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white  font-semibold">
                  Resume
                </button>
              </a>

              <Link
                to={"/contact"}
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
};
export default Home;
