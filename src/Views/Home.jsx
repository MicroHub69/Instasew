import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Numbers from "../components/Numbers";
import Choose from "../components/Choose";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Partners />
      <Discover />
      <Numbers />
      <Choose />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
