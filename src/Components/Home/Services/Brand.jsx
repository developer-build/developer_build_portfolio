/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import "./barand.css";
import freelancer from "../.../../../../Assets/Images/brand/fee.png";
import fiveer from "../.../../../../Assets/Images/brand/fiv.png";
import linkdeing from "../.../../../../Assets/Images/brand/link.png";
import upwork from "../.../../../../Assets/Images/brand/up.png";
const Brand = () => {
  return (
    <Fragment>
      <div className=" my-10 bard-aria  bg-[#f8fbfe]">
        <div className="grid custom_container py-2 mx-auto grid-cols-1 lg:grid-cols-4  md:grid-cols-2 items-center justify-center ">
          <img
            id="bradnimg"
            className="w-[150px] my-2 lg:mt-0 mt-4 mx-auto"
            src={upwork}
          />
          <img
            id="bradnimg"
            className="w-[200px] my-2 mx-auto"
            src={freelancer}
          />
          <img id="bradnimg" className="w-[120px] my-2 mx-auto" src={fiveer} />
          <img
            id="bradnimg"
            className="w-[140px] my-2 lg:mt-2 mt-3 mx-auto"
            src={linkdeing}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Brand;
