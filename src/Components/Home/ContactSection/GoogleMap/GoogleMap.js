import React from "react";

const GoogleMap = () => {
  const data = {
    w: "100%",
    h: "300px",
    src: "https://maps.google.com/maps?q=Polashbari,%20Ashulia,%20savar&t=&z=15&ie=UTF8&iwloc=&output=embed",
    frameborder: "0",
    scrolling: "no",
    marginheight: "0",
    marginwidth: "0",
  };
  return (
    <>
      <div class="gmap_canvas">
        <iframe
          width={data.w}
          height={data.h}
          src={data.src}
          frameborder={data.frameborder}
          scrolling={data.scrolling}
          marginheight={data.marginheight}
          marginwidth={data.marginheight}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default GoogleMap;
