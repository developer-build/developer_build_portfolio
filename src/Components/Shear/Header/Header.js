import React from "react";
import "./header.css";
import logo from "../../../Assets/Images/nav-footer/logo.png";
const Header = () => {
  return (
    <div>
      <div class="relative z-20 custom-shadow bg-white">
        <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
          <div class="flex  relative z-20 items-center justify-between ">
            <div class="relative z-20 flex items-center gap-3">
              <img src={logo} alt="logo-tailus" class="h-10 lg:h-12" />
              <span className="text-accent  font-bold text-2xl lg:text-3xl">
                DevBuild
              </span>
            </div>

            <div class="flex items-center justify-end ">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                class="peer"
                hidden
              />
              <label
                for="hamburger"
                class="peer-checked:hamburger block relative z-30 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  class="m-auto h-0.5 w-8 rounded bg-gradient-to-r from-primary to-cyan-500  transition duration-300"
                ></div>
                  <div
                    aria-hidden="true"
                    class="m-auto mt-2 h-0.5 w-8 rounded bg-gradient-to-r from-primary to-cyan-500  transition duration-300"
                  ></div>
                <div
                  aria-hidden="true"
                  class="m-auto mt-2 h-0.5 w-8 rounded bg-gradient-to-r from-primary to-cyan-500  transition duration-300"
                ></div>
              </label>

              <div class="peer-checked:translate-x-0 fixed inset-0 w-[250px] md:w-[300px] translate-x-[-100%] bg-white   shadow-lg transition duration-500  lg:w-auto lg:static lg:shadow-none lg:translate-x-0 z-[-1000] lg:z-0">
                <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-6 lg:space-y-0 lg:flex xl:space-x-12 lg:pt-0">
                    <li>
                      <span class="transition-all duration-300  cursor-pointer text-accent hover:text-primary">
                        Home
                      </span>
                    </li>
                    <li>
                      <span class="transition-all duration-300 cursor-pointer text-accent hover:text-primary">
                        Services
                      </span>
                    </li>
                    <li>
                      <span class="transition-all duration-300 cursor-pointer text-accent hover:text-primary">
                        Portfolio
                      </span>
                    </li>
                    <li>
                      <span class="transition-all duration-300 cursor-pointer text-accent hover:text-primary">
                        About
                      </span>
                    </li>
                    <li>
                      <span class="transition-all duration-300 cursor-pointer text-accent hover:text-primary">
                        Contact
                      </span>
                    </li>
                  </ul>

                  <div class="border-t p-6  lg:border-t-0  lg:py-0 lg:pr-0 lg:pl-6">
                    <button
                      href="#"
                      class="block w-full px-6 py-3 rounded-md bg-gradient-to-r from-primary to-cyan-400 text-center text-white"
                    >
                      Get started
                    </button>
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
