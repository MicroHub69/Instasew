import React from "react";
import Images from "../images/image";

const Banner = () => {
  const myStyle = {
    backgroundImage:
      "url('https://github.com/instincthub/yourpass/blob/main/images/Pray.jpg?raw=true')",
    height: "100vh",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section className="banner" style={myStyle}>
        <div className="container">
          <div className="banner_txt">
            <h1>
              The world’s First Custom Fashion measurement and Fashion designers
              freelance platform
            </h1>
            <p>
              We take the stress of always having to retaking your measurement
              vitals and dealing with dissapointing designers with a central
              data base for all new enquiry.
            </p>
          </div>

          <div className="get_started_with">
            <button className="btn_only">Get Started</button>
            <img src={Images.laptop} alt="MockUp" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
