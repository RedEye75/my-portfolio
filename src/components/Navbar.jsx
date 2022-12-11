import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3  uppercase font-serif font-bold text-white text-3xl">
              Yusuf Bin <span className=" dark:text-violet-400 ">Imam</span>
            </span>
          </a>
          <nav className="md:ml-auto text-white   md:mr-auto font-bold  uppercase flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5  hover:text-rose-700">
              Home
            </Link>
            <Link to={"/skill"} className="mr-5 hover:text-rose-700">
              Skill
            </Link>
            {/* <Link to={"contact"} className="mr-5 hover:text-rose-700">
              Contact
            </Link> */}
            <Link to={"/project"} className="mr-5 hover:text-rose-700">
              Projects
            </Link>
          </nav>
          <button className="inline-flex text-black font-bold uppercase dark:bg-violet-400 rounded-full items-center border-0 px-5 focus:outline-none hover:bg-gray-200  py-3 text-base mt-4 md:mt-0">
            Contact
          </button>
          {/* <SiLinkedin className="text-5xl mt-3 hover:bg-blue-800" />
          <BsGithub className="text-5xl mt-3 ml-5 hover:" /> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
