import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import ReferDetail from "./components/pages/ReferDetail";

function App() {
  return (
    // React 6버전용 (5버전은 Router,Route 태그/ component 속성 사용)
    // path는 주소창에 나오는 주소!
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="reference/refer-detail" element={<ReferDetail />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
