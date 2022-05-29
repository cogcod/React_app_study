import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import YoutubeCont from "../includes/YoutubeCont";

function Youtube() {
  // 리액트 훅
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&key=AIzaSyBFUhhtFuOFZf2GyYLOQRyGFtSoQQ2gdUU&type=video",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "reference"]} />
        <YoutubeCont videos={videos} />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
