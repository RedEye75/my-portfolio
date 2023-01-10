import React from "react";

const Footer = () => {
  return (
    <div className="mt-36 ">
      <footer className="text-gray-600 body-font ">
        {" "}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://web.facebook.com/profile.php?id=100032670966425"
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/yusuf-bin-imam/"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
        <p
          id="text"
          className="text-xl text-gray-500 sm:ml-4 sm:pl-4  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
        >
          Copyright © 2023 - All right reserved by yusufbinimam.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
