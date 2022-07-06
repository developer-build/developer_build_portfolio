import React from "react";
import "./Team.css";
import { TeamData } from "./FakeData/TeamSection";

const TeamSection = () => {
  return (
    <>
      <section className="team_container">
        <div className="team_slider bg-[#f8fbfe] my-10">
          <div className="grid  custom_container mx-auto py-10 px-5 grid-cols-3 justify-center items-center">
            <div className="team_member w-[320px]">
              <div className="img_content">
                <span class="overlay"></span>
                <div className="team_member_img">
                  <img src="https://i.ibb.co/vBCwvvt/team-1.jpg" alt="" />
                </div>
              </div>
              <div class="team-content">
                <h2 class="name">David Dell</h2>
                <p class="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button class="button">View More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
