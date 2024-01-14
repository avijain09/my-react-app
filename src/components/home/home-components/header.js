import React from "react";
import ai from "../../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="virtu-hire__header section__padding" id="home">
    <div className="virtu-hire__header-content">
      <h1 className="gradient__text">
        Transforming the Recruitment Process through AI Innovation{" "}
      </h1>{" "}
      <p>
        Bid farewell to manual resume screening and extended waiting periods.
        VirtuHire AI harnesses the capabilities of AI to assist recruiters in
        efficiently identifying the ideal candidates, while candidates receive
        immediate feedback on their applications.{" "}
      </p>
      <div className="virtu-hire__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button"> Get Started </button>{" "}
      </div>
      <div className="virtu-hire__header-content__people">
        {" "}
        {/* <img src={people} /> */}
        <p className="gradient__text">
          Unlock the capabilities of VirtuHire AI and optimize your hiring
          procedures today!
        </p>{" "}
      </div>{" "}
    </div>
    <div className="virtu-hire__header-image">
      <img src={ai} />{" "}
    </div>{" "}
  </div>
);

export default Header;
