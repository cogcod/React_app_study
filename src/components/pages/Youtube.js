import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";

function Youtube() {
  // 리액트 훅
  // ES6 : destructuring 문법
  // useState : 변수는 {}안에 바인딩하거나, useState안에 담는 2가지 방법이 있다.
  // useState안에 배열로 데이터가 담긴다. [데이터(내가 작성한), 그 데이터를 변경하는 함수]
  // let [변수명, 변수명] = useState("데이터값"); => useState["데이터값", 변경함수]
  // useState에는 문자, 숫자, 배열, 객체 모두 저장 가능!
  // 수시로 바뀌는 데이터들을 변수로 담아 사용하기 유용하다.

  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyAUzErAatDrtkBsZ2ppLUKRmki7RPX6hgg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=React&key=AIzaSyAUzErAatDrtkBsZ2ppLUKRmki7RPX6hgg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "reference"]} />
        <section className="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeCont videos={videos} />
            </div>
          </div>
        </section>
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
