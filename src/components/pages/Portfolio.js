import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Portfolio() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Portfolio", "book"]} />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Portfolio;
