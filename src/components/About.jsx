import React from "react";

const About = () => {
  return (
    <div className="mt-10">
      <p
        data-aos="flip-left"
        data-aos-duration="3000"
        className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400"
      >
        About
      </p>
      <div className=" mt-10 grid grid-cols-2">
        <div data-aos="fade-right" data-aos-duration="3000" className="mx-auto">
          <img
            className="w-72 mx-auto ml-10 mb-32"
            src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png"
            alt=""
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="mt-5">
          <p className="text-gray-500 text-start font-mono text-xl">
            Hi there..! I’m Yusuf Bin Imam. I’m a junior Front-end developer.
            last 1 year I am working in this field. During this time for
            learning purposes, I have made some projects. Some projects are
            full-stack projects. I want to build my career as a web developer
            and it’s my goal also. To reach my goal I am continuously contribute
            my full effort and dedication here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
