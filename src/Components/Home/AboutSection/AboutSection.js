import React from "react";
import './AboutSection.css'

const AboutSection = () => {
  return (
    <section id="about-section" className="custom_container text-secondary flex lg:flex-row flex-col items-center gap-10 lg:px-0 px-5 py-10">

      {/* video part */}
      <div className="video-div relative lg:w-1/2 w-full">
        <img className="w-full" src="https://cosmic-eclair-0d5e30.netlify.app/assets/img/about-video.jpg" alt="" />

        <div className="play-icon">
          <img src="https://icon-library.com/images/video-player-icon-transparent/video-player-icon-transparent-1.jpg" alt="" width={70} height={70} />
        </div>
      </div>

      {/* text part */}
      <div className="lg:w-1/2 w-full flex flex-col gap-5">
        <h1 className='text-3xl text-primary'>Let's get to know about our team</h1>
        <p>We are an agency of web developers & digital marketers. There are 10+ members in this agency with 2 years of experience in this field.</p>
        <ul>
          <li> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716299.png" alt="" /> UI/UI design</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716299.png" alt="" /> Web Development</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716299.png" alt="" /> Pixel-perfect Design</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716299.png" alt="" /> Digital Marketing</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716299.png" alt="" /> On-time delivery</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716299.png" alt="" /> 100% satisfaction</li>
        </ul>
        <p> We started our journey from 2020. We make <b>React</b> based frontend and <b>Node</b> based backend. We are experienced in HTML5, CSS, Bootstrap, Tailwind, JavaScript, React, DaisyUI, NodeJS, ExpressJS, MongoDB, NextJS, TypeScript, Stripe and more.</p>
      </div>
    </section>);
};

export default AboutSection;