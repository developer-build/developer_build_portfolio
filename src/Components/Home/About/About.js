import React from "react";
import "./about.css";

const About = () => {
  return (
    <div data-aos="fade-up" id="about" className="w-10/12 mx-auto my-20">
      <h1 className="text-4xl font-bold text-center uppercase mb-4 text-[#124265]">
        About us
      </h1>
      <p className="text-center text-gray-400 mb-7">
        What a developer build agency and how their team works
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <p className="text-gray-700 mb-3">
            We try to keep all the products released by the developer. We have
            Expert developers on our products
          </p>

          <ul>
            <li className="text-gray-700">
              <i className="fa-solid fa-check-double text-blue-500"></i>
              <span className="ml-1">
                {" "}
                Our team is front-end related and can do anything work.
              </span>
            </li>
            <li className="text-gray-700 my-3">
              <i className="fa-solid fa-check-double text-blue-500"></i>
              <span className="ml-1">
                {" "}
                We have some back end and full-stack developers
              </span>
            </li>
            <li className="text-gray-700">
              <i className="fa-solid fa-check-double text-blue-500"></i>
              <span className="ml-1">
                {" "}
                We provide our services with integrity
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-700">
            When we get project work done, we first discuss the project with all
            our team members and we try to do the project with the framework and
            library that is at the top. We as a user think, how can a user
            easily understand the functions of the website. We aim to make the
            website user friendly
          </p>
          <button className="py-2 mt-5 px-7 rounded-md font-semibold hover:bg-[#265df2] hover:text-white border-2 border-[#265df2] text-[#265df2]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
