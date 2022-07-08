/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <div className="bg-[white]/60 py-24 lg:px-8 px-0 custom_container">
      <div className="custom_container px-10 lg:px-0 md:px-5">
        <header className="text-center mb-16">
          <h1 className="text-[#124265] font-bold text-3xl mt-4 uppercase">
            Our Package
          </h1>
          <p className="leading-normal mt-3 text-gray-500   md:mx-auto md:w-[600px]">
            We tried to give our best packages. Feel free to contact us if you
            have any packages of your own without this package. We are always
            ready to help you
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end justify-center">
          <div className="our-package-card p-[24px] rounded-[8px]">
            <h3 className="font-bold pb-[8px] text-[32px] text-accent ">
              $100
            </h3>
            <h4 className="font-bold text-[24px] text-black ">
              Basic Services
            </h4>
            <p className="pt-4 pb-3">
              Single page application. The Home page will have 10+ sections and
              5+ pages
            </p>
            <div className="our-package-list">
              <p className="pb-3">
                <i className="fas fa-check"></i>Responsive design
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>Design customization
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>Content upload
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>Include source code
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>2 Days Delivery
              </p>
            </div>
            <button className="our-package-btn">Book Now</button>
          </div>
          <div className="our-package-card p-[24px] rounded-[8px]">
            <h3 className="font-bold pb-[8px] text-[32px] text-accent ">
              $350
            </h3>
            <h4 className="font-bold text-[24px] text-black ">
              Standard Services
            </h4>
            <p className="pt-4 pb-3">
              Completed front end project, design exactly according to your
              Figma file
            </p>
            <div className="our-package-list">
              <p className="pb-3">
                <i className="fas fa-check"></i>Responsive design
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i> API integration
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>Design customization
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>SEO friendly code
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>7 Days Delivery
              </p>
            </div>
            <button className="our-package-btn">Book Now</button>
          </div>
          <div className="our-special-package p-[24px] text-white rounded-[8px]">
            <h4 className="font-bold pb-3  text-[32px] text-[18px]">$600</h4>
            <h4 className="font-bold pb-2 h3 text-[24px]">Premium Services</h4>
            <p className="text-white pt-4 pb-3">
              The full-stack project: E-commerce, Warehouse, Education,
              Hospital, etc.
            </p>
            <div className="our-package-list">
              <p className="text-white pb-3">
                <i className="fas fa-check"></i>Responsive design
              </p>
              <p className="text-white pb-3">
                <i className="fas fa-check"></i>Admin and User panel
              </p>
              <p className="text-white pb-3">
                <i className="fas fa-check"></i>Bug fixing
              </p>
              <p className="text-white pb-3">
                <i className="fas fa-check"></i>10 days free support
              </p>
              <p className="text-white pb-3">
                <i className="fas fa-check"></i>15 Days Delivery{" "}
              </p>
            </div>
            <button className="our-package-btn  px-5">Book Now</button>
            <span className="best-sell">Best Sell</span>
          </div>
          <div className="our-package-card p-[24px] rounded-[8px]">
            <h3 className="font-bold pb-[8px] text-[32px] text-accent ">
              $1500
            </h3>
            <h4 className="font-bold text-[24px] text-black ">
              Advance Services{" "}
            </h4>
            <p className="pt-4 pb-3">
              I will manage an entire site or your project for you for 1 month
            </p>
            <div className="our-package-list">
              <p className="pb-3">
                <i className="fas fa-check"></i>Adding new features
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>24 hour website monitor
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>Bug fixing
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>12 days free support
              </p>
              <p className="pb-3">
                <i className="fas fa-check"></i>30 Days Delivery
              </p>
            </div>
            <button className="our-package-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
