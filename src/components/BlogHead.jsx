import React from "react";
import Images from "../images/image";

const BlogHead = () => {
  return (
    <section className="Blog container">
      <img src={Images.woods} alt="" className="sample_pics" />
      <div className="blog_txt">
        <h5>
          Ac malesuada fames ipsum, dolor proin. In vitae pellentesque mi a,
          leo.
        </h5>
        <p>
          Hendrerit feugiat malesuada at lectus. Libero nibh amet elementum
          eget. Quam vitae, ac odio elementum et, nunc, arcu. Neque, duis
          ultricies facilisi eget nisi. Odio imperdiet enim et quam diam.{" "}
        </p>
        <button className="native-btn align_txt">Read More</button>
      </div>
    </section>
  );
};
export default BlogHead;
