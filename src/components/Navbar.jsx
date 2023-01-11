// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 bg-transparent">
//       <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <Link
//             to={"/"}
//             className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent uppercase font-serif sm:text-5xl "
//           >
//             <span>Yusuf </span>
//           </Link>
//           <nav className="md:ml-auto text-white   md:mr-auto font-bold  uppercase flex flex-wrap items-center text-base justify-center">
//             <Link to={"/"} className="mr-5  hover:text-rose-700">
//               Home
//             </Link>
//             <Link to={"/about"} className="mr-5 hover:text-rose-700">
//               About
//             </Link>
//             <Link to={"/project"} className="mr-5 hover:text-rose-700">
//               Projects
//             </Link>
//             <Link to={"blogs"} className="mr-5 hover:text-rose-700">
//               Blogs
//             </Link>
//           </nav>
//           <Link to={"/contact"}>
//             <button className="inline-flex text-black font-bold uppercase dark:bg-violet-400 rounded-full items-center border-0 px-5 focus:outline-none hover:bg-gray-200  py-3 text-base mt-4 md:mt-0">
//               Contact
//             </button>
//           </Link>
//           {/* <SiLinkedin className="text-5xl mt-3 hover:bg-blue-800" />
//           <BsGithub className="text-5xl mt-3 ml-5 hover:" /> */}
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink to={"/"} className="mr-5 font-bold  hover:text-green-800">
        Home
      </NavLink>

      <NavLink to={"/about"} className="mr-5 font-bold hover:text-green-800">
        About
      </NavLink>

      <NavLink to={"/project"} className="mr-5 font-bold hover:text-green-800">
        Projects
      </NavLink>

      <NavLink to={"blogs"} className="mr-5 font-bold hover:text-green-800 ">
        Blogs
      </NavLink>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl h-24 border-none   bg-[#2a2a2a] py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to={"/"}>
            <span id="name" className="font-serif text-5xl   font-bold">
              Yusuf
            </span>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          className="rounded-full hidden lg:inline-block py-3 px-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white  font-semibold"
          variant="gradient"
          size="sm"
        >
          {/* <Link to={"/contact"}>
            <span>Contact</span>
          </Link> */}
          <a href="#contact">contact</a>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
