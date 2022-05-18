import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Touch from "../layout/Touch";

function Main() {
  return (
    <>
      <Header />

      {/* Contents 안에 넣어서 children으로 넘어갈 수 있게 */}
      <Contents>
        <MainCont />
      </Contents>

      <Touch />
      <Footer />
    </>
  );
}

export default Main;

// Contents대신 들어있던 것 !!!! -> MainCont.js로 옮김

// {/* 언더바를 두개쓰면 사스에서 뒤에글자만 바꿔서 쓰면됨! */}
// <section className="main__cont">
// <div className="main__inner">
//   {textInfo.map((txt) => (
//     <Info text={txt.text} />
//   ))}
// </div>
// </section>
