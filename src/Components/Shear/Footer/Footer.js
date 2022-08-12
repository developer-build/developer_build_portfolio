/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../../../Assets/Images/nav-footer/logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer p-10 bg-white  text-base-content mt-20">
        <div className="footer text-base-content custom_container">
          <div>
            <a className="text-2xl text-gray-500 font-normal mb-2">
              Developer Build
            </a>
            <a className="text-gray-400">Polashbari, Ashulia</a>
            <a className="text-gray-400">Savar, Dhaka-1344</a>
            <a className="text-gray-400">Bangladesh</a>

            <a className=" text-gray-400 pt-5">
              {" "}
              <span className="font-bold text-md text-gray-500">
                Phone:
              </span>{" "}
              +8801998839126
            </a>
            <a className="text-gray-400">
              <span className="font-bold text-md text-gray-500">Email:</span>{" "}
              developerbuild62@gmail.com
            </a>
          </div>
          <div>
            <a className="text-xl text-gray-700 font-semibold mb-2">
              Useful Links
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Home
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              About us
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Services
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Team of Service
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              privacy policy
            </a>
          </div>
          <div>
            <a className="text-xl text-gray-700 font-semibold mb-2">
              Our Services
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Web Design
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Web Development
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Product Management
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Marketing
            </a>
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Graphic Design
            </a>
          </div>
          <div>
            <span className="text-gray-700 text-xl font-semibold">
              Join Our Newsletter
            </span>
            <div className="form-control ">
              <label className="label mb-5">
                <span className="label-text text-gray-500">
                  Stay with us by subscribing to get our daily newsletter. thank
                  you
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="input input-bordered border-blue-300 w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-8  text-black ">
        <div className="items-center grid-flow-col">
          <img className="h-[50px] w-[50px]" src={logo} alt="" />
          <p className="text-gray-500">
            © Copyright <span className="font-bold">Developer Build.</span> All
            Rights Reserved <br />
            Designed by <span className="text-blue-400">Developer-Build</span>
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div className="social-links text-center flex justify-center items-center pt-1">
              <a href="#" className="twitter">
                <i className="fa-brands  fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fa-brands  fa-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="fa-brands  fa-skype"></i>
              </a>
              <a
                target="black"
                href="https://www.linkedin.com/company/developer-build/"
                className="linkedin"
              >
                <i className="fa-brands  fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
