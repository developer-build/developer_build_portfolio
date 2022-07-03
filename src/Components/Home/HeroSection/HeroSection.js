import React from "react";
import "./Hero.css";

const HeroSection = () => {
  const iconsBox = [
    {
      _id: "1",
      icon: "fa-solid fa-layer-group",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      _id: "2",
      icon: "fa-solid fa-layer-group",
      title: "Lorem Ipsum",
      description:
        "Voluptatum delenit atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      _id: "3",
      icon: "fa-solid fa-layer-group",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      _id: "4",
      icon: "fa-solid fa-layer-group",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
  ];
  return (
    <section className="hero_section flex justify-center">
      <div className="hero_container w-10/12 m-auto">
        <div className="grid justify-center lg:w-10/12 xl:w-8/12  mx-auto">
          <div className="text-center xl:col-span-7  lg:col-span-9">
            <h1>Welcome to the web Development Agency</h1>
            <h2>We are team of talented Developers</h2>
          </div>
        </div>
        <div className="text-center mx-auto">
          <button className="hero_button bg-primary text-white">
            Get Started
          </button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  py-20">
          {iconsBox.map((icons) => (
            <article key={icons?._id} className="flex items-stretch ">
              <div className="icon-box">
                <div className="icon">
                  <i className={icons?.icon}></i>
                </div>
                <h4 className="title">{icons?.title}</h4>
                <p className="description">{icons?.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
