import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400">
        Contact
      </p>
      <h2 className="text-gray-500 mt-10 text-3xl font-bold">Lets talk</h2>
      <p className="text-gray-500 text-xl  mt-3">
        Fell free to contact with me via
        <a
          className="text-gray-500 hover:text-red-800 font-bold ml-2 text-xl"
          href="mailto:yusufbinemamstk@gmail.com"
        >
          yusufbinemamstk@gmail.com
        </a>
      </p>
      <p className="text-gray-500  text-xl ">
        or fill the from at
        <Link to={"/contactDetails"}>
          <p className="text-gray-500 hover:text-red-800 inline font-bold ml-2 text-xl">
            Contact Page
          </p>
        </Link>
      </p>
    </div>
  );
};

export default Contact;
