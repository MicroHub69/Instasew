import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useTransition, animated } from "react-spring";

const BurgerDrop = () => {
  const [showMenu, setShowMenu] = useState(true);
  //   let menu;
  //   let menuMask;

  //   if (showMenu) {
  //     menu = (
  //       <ul className="navlinks ">
  //         <h2 className="on_nav">instasew</h2>
  //         <Link to="/about">
  //           <li>About</li>
  //         </Link>
  //         <Link to="/contact">
  //           <li>Contact</li>
  //         </Link>
  //         <Link to="/blog">
  //           <li>Blog</li>
  //         </Link>
  //         <Link to="/about">
  //           <button className="btn_only">Login</button>
  //         </Link>
  //       </ul>
  //     );

  //     menuMask = <div className="backgroundMask"></div>;
  //   }

  return (
    <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default BurgerDrop;
