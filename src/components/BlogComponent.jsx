import React from "react";
import Images from "../images/image";

const Blog = () => {
  return (
    <section className="container">
      <h3 className="blog_head mt-5">Recommended</h3>
      <div className="card_flex">
        <div className="each_card">
          <div className="blog_post">
            <img src={Images.woods} alt="" />
            <div className="blog_desc">
              <h3>The definitive guide to setting up your.....</h3>
              <p>
                Sed velit quis magna pharetra gravida sagittis morbi congue.
                Arcu porttitor sed posuere vulputate pretium.
              </p>

              <span>8 Sep, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
