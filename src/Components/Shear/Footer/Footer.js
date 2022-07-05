/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../Assets/Images/logo.png";

const Footer = () => {
  return (
    <>
      <footer class="footer p-10 bg-white text-base-content mt-16">
        <div>
          <a className="text-2xl text-gray-700 font-semibold mb-2">OnePage</a>
          <a class="link link-hover text-gray-500">A108 Adam Street</a>
          <a class="link link-hover text-gray-500">New York, NY 535022</a>
          <a class="link link-hover text-gray-500">United States</a>
          <a class="link link-hover"></a>
          <a class="link link-hover"></a>
          <a class="link link-hover text-gray-500">
            {" "}
            <span className="font-bold text-xl">Phone:</span> 01998839126
          </a>
          <a class="link link-hover text-gray-500">
            <span className="font-bold text-xl">Email:</span>{" "}
            developerbuild62@gmail.com
          </a>
        </div>
        <div>
          <a className="text-2xl text-gray-700 font-semibold mb-2">
            Useful Links
          </a>
          <a class="link link-hover text-gray-500">Home</a>
          <a class="link link-hover text-gray-500">About us</a>
          <a class="link link-hover text-gray-500">Services</a>
          <a class="link link-hover text-gray-500">Team of Service</a>
          <a class="link link-hover text-gray-500">privacy policy</a>
        </div>
        <div>
          <a className="text-2xl text-gray-700 font-semibold mb-2">
            Our Services
          </a>
          <a class="link link-hover text-gray-500">Web Design</a>
          <a class="link link-hover text-gray-500">Web Development</a>
          <a class="link link-hover text-gray-500">Product Management</a>
          <a class="link link-hover text-gray-500">Marketing</a>
          <a class="link link-hover text-gray-500">Graphic Design</a>
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
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
