import React from 'react';
import './Team.css'
import { TeamData } from './FakeData/TeamSection';

const TeamSection = () => {
  return (
    <div className='bg-[#f8fbfe]'>
      <div className='custom_container px-10'>
        <p className='uppercase text-accent text-[32px] font-bold pt-[50px] pb-[20px] text-center'>team</p>
        <p className='text-[#919191] text-[14px] text-center lg:pb-[100px] pb-0 md:pb-[0px]'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className='relative grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:pb-[100px] md:pb-0 pb-[0px] gap-4 '>
          {TeamData.map((team, i) =>
            <div key={team.id} className='team_member mt-[100px] md:mt-[100px] lg:mt-0'>
              <div className='team_member_img'>
                <img src={team.img} alt="Team Member" />
              </div>
              <p className='text-white text-3xl text-center font-extrabold'>{team.name}</p>
              <p className='text-white text-base text-center font-bold'>{team.position}</p>
              <p className='text-white text-center py-5'>{team.des}</p>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default TeamSection;
