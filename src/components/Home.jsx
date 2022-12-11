import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className=" dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              HI..! I'm Yusuf Bin
              <span className="dark:text-violet-400"> Imam</span>
            </h1>
            <p className="mt-6 mb-8 text-4xl font-bold sm:mb-12">
              Front-end Developer
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                Resume
              </Link>
              <Link className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                Hire Me
              </Link>
            </div>
            <div className="flex mt-5">
              <SiLinkedin className="text-4xl mt-3 hover:bg-blue-800" />
              <FaGithubSquare className="text-4xl mt-3 ml-3 hover:bg-blue-800" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
