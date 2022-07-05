/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../Assets/Images/logo.png";

const Footer = () => {
  return (
    <>
      <footer class="footer p-10 bg-white text-base-content mt-16">
        <div>
          <a className="text-2xl text-gray-700 font-semibold mb-2">OnePage</a>
          <a class="text-gray-500">1216 By Dhaka</a>
          <a class="text-gray-500">Mirpur, Dhaka 1216</a>
          <a class="text-gray-500">Bangladesh</a>
          <a></a>
          <a></a>
          <a class=" text-gray-500">
            {" "}
            <span className="font-semibold text-xl">Phone:</span> 01998839126
          </a>
          <a class="text-gray-500">
            <span className="font-semibold text-xl">Email:</span>{" "}
            developerbuild62@gmail.com
          </a>
        </div>
        <div>
          <a className="text-2xl text-gray-700 font-semibold mb-2">
            Useful Links
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> Home
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> About
            us
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
            Services
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> Team of
            Service
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> privacy
            policy
          </a>
        </div>
        <div>
          <a className="text-2xl text-gray-700 font-semibold mb-2">
            Our Services
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> Web
            Design
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> Web
            Development
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> Product
            Management
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
            Marketing
          </a>
          <a class="text-gray-500 hover:text-blue-500 cursor-pointer">
            <i class="fa-solid fa-chevron-right text-blue-500 mr-1"></i> Graphic
            Design
          </a>
        </div>
        <div>
          <span class="text-gray-700 text-2xl font-semibold">
            Join Our Newsletter
          </span>
          <div class="form-control w-80">
            <label class="label mb-5">
              <span class="label-text text-gray-500">
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </span>
            </label>
            <div class="relative">
              <input
                type="text"
                class="input input-bordered border-blue-300 w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t text-black border-gray-200">
        <div class="items-center grid-flow-col">
          <img className="h-20 w-20" src={logo} alt="" />
          <p>
            © Copyright OnePage. All Rights Reserved <br />
            Designed by <span className="text-blue-400">Developer-Build</span>
          </p>
        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <div className="bg-green-500 h-12 w-12 rounded-xl text-center">
              <div className="mt-1.5">
                <a
                  className="text-white font-bold text-3xl"
                  target="blank"
                  href="https://www.fiverr.com/popy_marketer?public_mode=true"
                >
                  fi
                </a>
              </div>
            </div>
            <div className="bg-blue-500 h-12 w-12 rounded-xl text-center">
              <div className="mt-2">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/developer-build/"
                >
                  <i class="fa-brands fa-linkedin-in text-3xl text-white"></i>
                </a>
              </div>
            </div>

            <div className="bg-gray-700 h-12 w-12 rounded-xl text-center">
              <div className="mt-2">
                <a target="blank" href="https://github.com/developer-build">
                  <i class="fa-brands fa-github text-3xl text-white"></i>
                </a>
              </div>
            </div>
            <div className="bg-green-500 h-12 w-12 rounded-xl text-center">
              <div className="mt-1.5">
                <a
                  className="text-white font-bold text-2xl"
                  target="blank"
                  href="https://www.upwork.com/freelancers/~01ba628056760f5bc6?fbclid=IwAR0vAJeLZyxncXt_IJda-TJzX3foiIP0VaTfY8hEmN9pyf84AvP0Rwb4d7k"
                >
                  Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
