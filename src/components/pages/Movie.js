import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieCont from "../includes/MovieCont";
import Touch from "../layout/Touch";
import MovieSearch from "../includes/MovieSearch";

function Movie(props) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=spiderman",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(onSearch.ref);
  // console.clear();

  const movieNofound = `${props.videos}`;

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "search"]} />
        <section className="movie__cont">
          <div className="container">
            <div className="movie__inner">
              <MovieSearch onSearch={search} />
              <MovieCont videos={videos} />

              {/* {movieNofound === "" ? (
                <p>대체 텍스트가 없습니다.</p>
              ) : (
                <MovieCont videos={videos} />
              )} */}

              {/* if({movieNofound === ''} ){
                return <p>대체 텍스트가 없습니다.</p>;
                }else
              { 
              return <MovieCont videos={videos} />;
              } */}
            </div>
          </div>
        </section>
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
