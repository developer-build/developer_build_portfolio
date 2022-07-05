import React from "react";
import "./Team.css";
import { TeamData } from "./FakeData/TeamSection";

const TeamSection = () => {
  return (
    <div className="bg-[#f8fbfe] my-10">
      <div className="custom_container  px-10">
        <p className="uppercase text-accent text-[32px] font-bold pt-[50px] pb-[20px] text-center">
          team
        </p>
        <p className="text-[#919191] text-[14px] text-center ">
          Our team members and their details. You can contact us to learn more
          about our team members. Our team members are always active and ready
          to jump when they get a job. They are always ready for the project
        </p>
        <div className="lg:pb-[100px] pb-0 md:pb-[0px] mt-5 text-center ">
          {" "}
          <progress className="progress mx-auto w-56 progress-primary bg-black "></progress>
        </div>
        <div className="relative grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:pb-[100px] md:pb-0 pb-[0px] gap-4 ">
          {TeamData.map((team, i) => (
            <div
              key={team.id}
              className="team_member mt-[100px] md:mt-[100px] lg:mt-0"
            >
              <div className="team_member_img">
                <img src={team.img} alt="Team Member" />
              </div>
              <p className="text-white text-3xl text-center font-extrabold">
                {team.name}
              </p>
              <p className="text-white text-base text-center font-bold">
                {team.position}
              </p>
              <p className="text-white text-center py-5">{team.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
