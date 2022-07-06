import React, { useRef, useState } from "react";
import { TeamData } from "./FakeData/TeamSection";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Team.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const TeamSection = () => {
  return (
    <>
      <section className="team_container">
        <div className="team_slider bg-[#f8fbfe] my-10 py-5 ">
          <div className="conent-aria text-center pt-5">
            <h1 className="text-[#124265] pt-5 font-bold text-3xl mt-4 uppercase">
              Our Team Member
            </h1>
            <p className="mt-4 w-[90%] mx-auto text-[#919191]">
              {" "}
              Our Active & Expert Developer. Those who are always ready for the
              project
            </p>
          </div>
          <div className="  custom_container mx-auto py-10 px-5 ">
            <Swiper
              slidesPerView={3}
              spaceBetween={25}
              slidesPerGroup={3}
              loop={true}
              centerSlide={"true"}
              fade={"true"}
              grabCursor={"true"}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 2,
                },
                950: {
                  slidesPerView: 3,
                },
              }}
            >
              {TeamData.map((team) => (
                <SwiperSlide>
                  <div className="team_member w-[320px] mb-10">
                    <div className="img_content">
                      <span class="overlay"></span>
                      <div className="team_member_img">
                        <img src={team?.img} alt="" />
                      </div>
                    </div>
                    <div class="team-content">
                      <h2 class="name">{team?.name}</h2>
                      <p class="description">{team.des}</p>

                      {/* <button class="button">View More</button> */}
                      <div className="social_icon">
                        <i class="fa-brands fa-facebook-square"></i>
                        <i class="fa-brands fa-twitter-square"></i>
                        <i class="fa-brands fa-instagram-square"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github-square"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
