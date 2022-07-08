import React from "react";
import "./header.css";
import logo from "../../../Assets/Images/nav-footer/logo.png";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <div className="relative z-20 custom-shadow bg-white">
        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
          <div className="flex  relative z-20 items-center justify-between ">
            <div className="relative z-20 flex items-center gap-3">
              <img src={logo} alt="logo-tailus" className="h-10 lg:h-12" />
              <span className="text-accent  font-bold text-2xl lg:text-3xl">
                DevBuild
              </span>
            </div>

            <div className="flex items-center justify-end ">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-30 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-8 rounded bg-gradient-to-r from-primary to-blue-500  transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-8 rounded bg-gradient-to-r from-primary to-cyan-500  transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-8 rounded bg-gradient-to-r from-primary to-cyan-500  transition duration-300"
                ></div>
              </label>

              <div className="peer-checked:translate-x-0 fixed inset-0 w-[250px] md:w-[300px] translate-x-[-100%] bg-white   shadow-lg transition duration-500  lg:w-auto lg:static lg:shadow-none lg:translate-x-0 z-[-1000] lg:z-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-6 lg:space-y-0 lg:flex xl:space-x-12 lg:pt-0">
                    <li>
                      <Link
                        to="home"
                        className="transition-all duration-300  cursor-pointer text-accent hover:text-primary"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="services"
                        className="transition-all duration-300 cursor-pointer text-accent hover:text-primary"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <span className="transition-all duration-300 cursor-pointer text-accent hover:text-primary">
                        Portfolio
                      </span>
                    </li>
                    <li>
                      <Link
                        to="about"
                        className="transition-all duration-300 cursor-pointer text-accent hover:text-primary"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        className="transition-all duration-300 cursor-pointer text-accent hover:text-primary"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <div className="border-t p-6  lg:border-t-0  lg:py-0 lg:pr-0 lg:pl-6">
                    <Link
                      to="contact"
                      className="block cursor-pointer w-full px-6 py-3 rounded-md bg-gradient-to-r from-primary to-cyan-400 text-center text-white"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
