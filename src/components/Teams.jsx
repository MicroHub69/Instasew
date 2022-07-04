import React from "react";
import Images from "../images/image";
const Test = () => {
  return (
    <section className="our_stars container">
      <h3 className="Majorheading align_txt mb-1">Meet our Stars</h3>
      <p className="align_txt heading_p">
        Quis sagittis phasellus tristique scelerisque vel viverra et pulvinar
        purus. Dolor pretium vulputate purus, libero enim in enim.{" "}
      </p>

      <div className="the_stars">
        <div className="p_star align_text">
          <img src={Images.star1} alt="" />
          <h4>Star Name</h4>
          <p>Stars Position</p>
        </div>
        <div className="p_star align_text">
          <img src={Images.star1} alt="" />
          <h4>Star Name</h4>
          <p>Stars Position</p>
        </div>
        <div className="p_star align_text">
          <img src={Images.star1} alt="" />
          <h4>Star Name</h4>
          <p>Stars Position</p>
        </div>
        <div className="p_star align_text">
          <img src={Images.star1} alt="" />
          <h4>Star Name</h4>
          <p>Stars Position</p>
        </div>
        <div className="p_star align_text">
          <img src={Images.star1} alt="" />
          <h4>Star Name</h4>
          <p>Stars Position</p>
        </div>
        <div className="p_star align_text">
          <img src={Images.star1} alt="" />
          <h4>Star Name</h4>
          <p>Stars Position</p>
        </div>
      </div>
    </section>
  );
};
export default Test;
