import { React, ChangeEventHandler } from "react";
import Images from "../images/image";
import "../assets/mini/style.min.css";
import "./control.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("dark-theme", "dark");
};

let sun = Images.sun;
let moon = Images.moon;
const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("dark-theme", "light");
};

// Store Users Last Mode
let storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

// defaultDark ? setDark

if (defaultDark) {
  setDark();
}

const ToggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
    document.getElementById("ChangeThis").src = sun;
  } else {
    setLight();
    document.getElementById("ChangeThis").src = moon;
  }

  // } else {
  //   setLight();
  // }
};

const DarkMode = () => {
  return (
    <>
      <div className="wrap_moon">
        <input
          type="checkbox"
          className="tg_omori toggle_it"
          onClick={ToggleTheme}
          onMouseMove={ToggleTheme}
          // defaultChecked
        />
        <img src={Images.moon} alt="" id="ChangeThis" className="toggle_it" />
      </div>
    </>
  );
};

export default DarkMode;
