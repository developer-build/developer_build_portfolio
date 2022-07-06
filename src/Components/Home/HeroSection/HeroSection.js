import React from "react";
import "./Hero.css";

const HeroSection = () => {
  const iconsBox = [
    {
      _id: "1",
      icon: "fa-solid fa-layer-group",
      title: "Experience ",
      description:
        "Our team has been working for marketplace and different company for 1 year",
    },
    {
      _id: "2",
      icon: "fa-solid fa-cubes",

      title: "Skils",
      description:
        "We have skilled developers on both front and back, who can take on any challenge",
    },
    {
      _id: "3",
      icon: "fa-solid fa-people-group",

      title: "Team Employer",
      description:
        "10 members are working actively, who are ready to work both front and back end",
    },
    {
      _id: "4",
      icon: "fa-solid fa-holly-berry",

      title: "Benefited",
      description:
        "If you work with us, we will help you in any way at the end of the work",
    },
  ];
  return (
    <section id="home" className="hero_section flex justify-center">
      <div className="hero_container custom_container m-auto">
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
