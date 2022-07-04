import React, { Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counting = () => {
  return (
    <Fragment>
      <section className=" bg-[#F8FBFE] py-16 text-secondary mb-10">

        <div className="custom_container flex justify-center ">
          
        <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-14 sm:gap-24 md:gap-44">
        <div className="text-7xl text-center font-semibold text-primary">
            <CountUp end={50} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1 className="text-[15px] text-gray-500 font-normal pt-3" >Happy Clients</h1>
          </div>

          <div className="text-7xl text-center font-semibold text-primary">
            <CountUp end={65} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1 className="text-[15px] text-gray-500 font-normal pt-3" >Project</h1>
          </div>

          <div className="text-7xl text-center font-semibold text-primary">
            <CountUp end={25} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1 className="text-[15px] text-gray-500 font-normal pt-3" >Year of Experience</h1>
          </div>

          <div className="text-7xl text-center font-semibold text-primary">
            <CountUp end={15} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1 className="text-[15px] text-gray-500 font-normal pt-3" >Awards</h1>
          </div>
        </div>


        </div>
      </section>
    </Fragment>
  );
};

export default Counting;
