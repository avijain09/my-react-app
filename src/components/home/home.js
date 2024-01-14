import React from "react";
import Header from "./home-components/header";
import AboutVirtuiaihire from "./home-components/aboutvirtuiaihire";
import Service from "./home-components/service";
import CTA from "./home-components/cta";
import Footer from "./home-components/footer";

const Home = () => {
  return (
    <>
      <div className="gradient__bg_header">
        <Header />
      </div>{" "}
      <AboutVirtuiaihire />
      <Service />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
