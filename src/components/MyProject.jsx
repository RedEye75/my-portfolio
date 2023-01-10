import React from "react";
import smartzone from "../image/smartzone.png";
import skillshare from "../image/skillshare.png";
import plumboy from "../image/plumboy.png";

const MyProject = () => {
  return (
    <div className="mt-28">
      <p
        data-aos="flip-right"
        data-aos-duration="3000"
        className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400"
      >
        Projects
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-11 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden  bg-white rounded shadow-sm">
            <img
              src={smartzone}
              className="object-cover transform transition duration-500 hover:scale-110  w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Nov 23
                </a>
                <span className="text-gray-600"> — 30 Nov 2022</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                SmartZone
              </a>
              <br />
              <a
                href="https://plumboy-37ca4.web.app/"
                aria-label=""
                className="inline-flex border px-3 py-1 rounded border-cyan-600 items-center font-semibold transform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Live_view
              </a>
              <a
                href="https://github.com/RedEye75/SmartZone-client"
                aria-label=""
                className="inline-flex ml-3 border px-3 py-1 rounded border-cyan-600 items-center font-semibold transform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Client_repo
              </a>
              <a
                href="https://github.com/RedEye75/SmartZone-Server"
                aria-label=""
                className="inline-flex ml-3 border px-3 py-1 rounded border-cyan-600 items-center font-semibold transform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Server_repo
              </a>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded shadow-sm">
            <img
              src={plumboy}
              className="object-cover  transform transition duration-500 hover:scale-110  w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Nov 7
                </a>
                <span className="text-gray-600"> — 10 Nov 2022</span>
              </p>
              <a
                href="https://plumboy-37ca4.web.app/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                PlumBoy
              </a>
              <br />
              <a
                href="https://plumboy-37ca4.web.app/"
                aria-label=""
                className="inline-flex transform transition duration-500 hover:scale-110  border px-3 py-1 rounded border-cyan-600 items-center font-semibold  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Live_view
              </a>
              <a
                href="https://github.com/RedEye75/plumboy-client"
                aria-label=""
                className="inline-flex ml-3 border px-3 py-1 rounded border-cyan-600 items-center font-semibold transform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Client_repo
              </a>
              <a
                href="https://github.com/RedEye75/plumboy-server"
                aria-label=""
                className="inline-flex ml-3 border px-3 py-1 rounded border-cyan-600 items-center font-semibold transform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Server_repo
              </a>
            </div>
          </div>
          <div className="overflow-hidden transform  bg-white rounded shadow-sm">
            <img
              src={skillshare}
              className="object-cover transform transition duration-500 hover:scale-110  w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Oct 27
                </a>
                <span className="text-gray-600"> — 30 Oct 2022</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                SkillShare
              </a>
              <br />
              <a
                href="https://skillshare-authentication.web.app/"
                aria-label=""
                className="inline-flex border px-3 py-1 rounded border-cyan-600 items-center font-semibold transform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Live_view
              </a>
              <a
                href="https://github.com/RedEye75/SkillShare_Client"
                aria-label=""
                className="inline-flex ml-3 border px-3 py-1 rounded border-cyan-600 items-center font-semiboldtransform transition duration-500 hover:scale-110  text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Client_repo
              </a>
              <a
                href="https://github.com/RedEye75/SkillShare_Server"
                aria-label=""
                className="inline-flex ml-3 border px-3 py-1 rounded transform transition duration-500 hover:scale-110  border-cyan-600 items-center font-semibold text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Server_repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
