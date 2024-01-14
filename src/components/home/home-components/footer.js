import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="virtu-hire__footer section__padding">
    <div className="virtu-hire__footer-heading">
      <h1 className="gradient__text">
        {" "}
        Stay ahead of the curve. Step into the future today.{" "}
      </h1>{" "}
    </div>
    <div className="virtu-hire__footer-btn">
      <p> Request Early Access </p>{" "}
    </div>
    <div className="virtu-hire__footer-links">
      <div className="virtu-hire__footer-links_logo">
        <h3 style={{ color: "white" }}> VirtuHire AI </h3>{" "}
        <p>
          {" "}
          VirtuHire AI Pvt Ltd, <br /> & copy; All Rights Reserved{" "}
        </p>{" "}
      </div>{" "}
      <div className="virtu-hire__footer-links_div">
        <h4> Links </h4> <p> About Us </p> <p> Social Media </p> <p> Stats </p>{" "}
        <p> Contact </p>{" "}
      </div>{" "}
      <div className="virtu-hire__footer-links_div">
        <h4> Company </h4> <p> Terms & Conditions </p> <p> Privacy Policy </p>{" "}
        <p> Contact </p>{" "}
      </div>{" "}
      <div className="virtu-hire__footer-links_div">
        <h4> Get in Touch </h4> <p> VirtuHire AI Pvt Ltd </p>{" "}
        <p> +91 - XXXXXXXX </p> <p> info @virtuhireai.com </p>{" "}
      </div>{" "}
    </div>
    <div className="virtu-hire__footer-copyright">
      <p> & copy; 2023 VirtuHire AI.All rights reserved. </p>{" "}
    </div>{" "}
  </div>
);

export default Footer;
