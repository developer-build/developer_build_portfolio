import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="w-10/12 mx-auto my-10">
      <h1 className="text-4xl text-center uppercase mb-4 text-[#124265]">
        About us
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-gray-700 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul>
            <li className="text-gray-700">
              <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </li>
            <li className="text-gray-700 my-3">
              <i class="ri-check-double-line"></i> Duis aute irure dolor in
              reprehenderit in voluptate velit
            </li>
            <li className="text-gray-700">
              <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-700">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="py-2 mt-5 px-7 rounded-md font-semibold hover:bg-[#2487CE] hover:text-white border-2 border-[#2487CE] text-[#2487CE]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
