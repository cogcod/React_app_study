import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function About() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["about", "me"]} />
        <AboutCont />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default About;
