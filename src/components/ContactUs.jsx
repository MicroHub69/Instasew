import React from "react";
import Images from "../images/image";

const ContactUs = () => {
  return (
    <section className="container contact_us mini_flex">
      <div className="thanks">
        <h2>
          Thanks for your interest in <span>Instasew!</span>{" "}
        </h2>
        <p>
          Want to learn more about the end-to-end business automation platform?
          Submit this form and our representative will contact you soon.
        </p>
        <img src={Images.Grid} alt="Video" />
      </div>

      <div className="the_form">
        <form action="">
          <input type="text" placeholder="FullName*" />
          <input type="email" placeholder="Email Address*" />
          <textarea
            name=""
            id=""
            placeholder="Enter your enquiry here"
          ></textarea>
          <button className="native-btn">Submit </button>
          <p>
            By clicking “Submit form” you agree to receiving Marketing
            communications from us in accordance with our{" "}
            <a href="">Privacy policy.</a>
          </p>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
