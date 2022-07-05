import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="custom_container text-secondary flex lg:flex-row flex-col items-center gap-10 lg:px-0 px-5 py-10"
    >
      {/* video part */}
      <div className="video-div relative lg:w-1/2 w-full">
        <img
          className="w-full"
          src="https://cosmic-eclair-0d5e30.netlify.app/assets/img/about-video.jpg"
          alt=""
        />

        <div className="play-icon">
          <img
            src="https://icon-library.com/images/video-player-icon-transparent/video-player-icon-transparent-1.jpg"
            alt=""
            width={70}
            height={70}
          />
        </div>
      </div>

      {/* text part */}
      <div className="lg:w-1/2 w-full  flex flex-col gap-5 about-content">
        <h3 className="mb-0 capitalize">
          How we work, How our members manage team projects and details about us
        </h3>
        <p className=" text-gray-500 italic m-0 ">
          We are an agency of web developers & digital marketers. There are 10+
          members in this agency with 2 years of experience in this field.
        </p>
        <ul>
          <li>
            <i className="fa-solid text-primary mt-1 fa-check-double"></i>
            Front End Developer
          </li>
          <li>
            <i className="fa-solid text-primary mt-1 fa-check-double"></i>
            Back End Developer
          </li>
          <li>
            {" "}
            <i className="fa-solid text-primary mt-1 fa-check-double"></i>
            Full Stack Developer
          </li>
          <li>
            {" "}
            <i className="fa-solid text-primary mt-1 fa-check-double"></i>
            Project Management Development
          </li>
          <li>
            <i className="fa-solid text-primary mt-1 fa-check-double"></i>
            UI UX Designer
          </li>
          <li>
            <i className="fa-solid text-primary mt-1  fa-check-double"></i>
            Digital Marketing
          </li>
        </ul>
        <p className="text-gray-600 text-justify">
          {" "}
          We have experienced developers working in different companies and
          marketplaces. Our team does very good research on a project, and how
          the project can be done well. We have worked for many companies now,
          everyone has praised us. Our team is ready to take on any programming
          challenge
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
