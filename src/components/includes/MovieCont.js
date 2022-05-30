import React from "react";
import MovieItem from "./MovieItem";

function MovieCont(props) {
  const movieNofound = `${props.videos}`;
  console.log(movieNofound);

  return (
    <ul>
      {movieNofound === "" ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        props.videos.map((list, index) => (
          <MovieItem key={index} results={list} />
        ))
      )}
    </ul>
  );
}

export default MovieCont;
