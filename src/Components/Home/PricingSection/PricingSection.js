/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-[white]/60 py-24 lg:px-8 px-0 custom_container">
<div className="custom_container">
      <header className="text-center mb-16">
        <h1 className="text-5xl mb-4 text-black uppercase">Pricing</h1>
        <p className="leading-normal text-gray-900 md:w-1/2 md:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam, repellat expedita velit incidunt laborum consequuntur iure
          quisquam blanditiis. Voluptate.
        </p>
      </header>

      <div className="lg:flex lg:items-center lg:-mx-2">
        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
          <div style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }} className="text-center text-gray-800 p-10 rounded">
            <h2 className="text-lg mb-4">FREE</h2>
            <div className="mb-6">
              <span className="block text-5xl pb-2">$22</span>
              <span className="text-sm text-gray-800">Monthly</span>
            </div>
            <ul className="text-gray-800 leading-loose list-none mb-6">
              <li>1 core</li>
              <li>1GB RAM</li>
              <li>5GB Storage</li>
              <li>2 Containers</li>
            </ul>
            <a
              className="text-sm tracking-wide uppercase inline-block font-bold w-full p-3 rounded no-underline text-primary border  border-primary hover:text-white hover:bg-primary transition duration-200"
              href="#"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
          <div style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }} className="text-center p-10 lg:py-16 rounded bg-primary text-white  lg:shadow-lg">
            <h2 className="text-lg mb-4">BUSINESS</h2>
            <div className="mb-6">
              <span className="block text-5xl pb-2">$49</span>
              <span className="text-sm text-grey">Monthly</span>
            </div>
            <ul className="text-grey-dark leading-loose list-reset mb-6">
              <li>2 core</li>
              <li>2GB RAM</li>
              <li>20GB Storage</li>
              <li>20 Containers</li>
            </ul>
            <a
              className="text-sm tracking-wide uppercase inline-block font-bold w-full p-3 rounded no-underline text-white border border-white hover:text-primary hover:bg-white transition duration-200"
              href="#"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
          <div  style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }} className="text-center text-gray-800 p-10 rounded">
            <h2 className="text-lg mb-4">DEVELOPER</h2>
            <div className="mb-6">
              <span className="block text-5xl pb-2">$79</span>
              <span className="text-sm text-grey">Monthly</span>
            </div>
            <ul className="text-grey leading-loose list-reset mb-6">
              <li>4 core</li>
              <li>4GB RAM</li>
              <li>40GB Storage</li>
              <li>40 Containers</li>
            </ul>
            <a
              className="text-sm tracking-wide uppercase inline-block font-bold w-full p-3 rounded no-underline text-primary border border-primary hover:text-white hover:bg-primary transition duration-200"
              href="#"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingSection;
