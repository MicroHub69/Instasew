import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHead from "../components/BlogHead";
import Blog from "../components/BlogComponent";
// import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <Navbar />
      <BlogHead />
      <Blog />
      <Footer />
    </div>
  );
};
export default About;
