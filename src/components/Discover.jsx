import React from "react";
import Images from "../images/image";

const Discover = () => {
  return (
    <>
      <section className=" container" id="discover_container">
        <div className=" discover">
          <h2>Discover the unique Features of The brand name.</h2>
          <p>
            Quis sagittis phasellus tristique scelerisque vel viverra et
            pulvinar purus. Dolor pretium vulputate purus, libero enim in enim.
            Vel facilisis porttitor cursus bibendum aliquam a morbi morbi.{" "}
          </p>
          <button className="btn_only">Become a Creator</button>
        </div>

        {/* Add Customer Service */}
        <div className="support">
          <div className="p_support">
            <img src={Images.custom} alt="measure" />
            <h3>Custom Measurement</h3>
            <p>
              At Brand name we take to heart product perfection, either custom
              or standard Vitals.
            </p>
          </div>
          <div className="p_support efcc">
            <img src={Images.support} alt="support" />
            <h3>Support 24/7</h3>
            <p>
              Our customer Experience team is available around the clock to
              answer your questions.
            </p>
          </div>
          <div className="p_support">
            <img src={Images.universe} alt="universe" />
            <h3>+1000 Creators Worldwide</h3>
            <p>
              At Brand name we offer easy and verted Creator, to help achieve
              your ideas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Discover;
