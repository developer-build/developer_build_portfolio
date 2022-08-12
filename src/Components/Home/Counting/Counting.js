import React, { Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./count.css";

const Counting = () => {
  return (
    <Fragment>
      <section
        data-aos="fade-up"
        className=" bg-[#F8FBFE] py-16 text-secondary mb-10"
      >
        <div className="custom_container flex justify-center ">
          <div className=" grid grid-cols-2  lg:grid-cols-4 gap-14 sm:gap-24 md:gap-44 justify-center items-center">
            <div className="count-title">
              <CountUp end={80} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <h2 className="count-para">Happy Clients</h2>
            </div>

            <div className="count-title">
              <CountUp end={95} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <h1 className="count-para">Project</h1>
            </div>

            <div className="count-title">
              <CountUp end={25} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <h1 className="count-para">Year of Experience</h1>
            </div>

            <div className="count-title">
              <CountUp end={15} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <h1 className="count-para">Awards</h1>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Counting;
