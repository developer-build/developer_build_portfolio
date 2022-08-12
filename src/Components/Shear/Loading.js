import React from "react";
import spinner from "../../Assets/Icons/spinner.gif";

const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div>
        <img src={spinner} alt="" />
      </div>
    </div>
  );
};

export default Loading;
