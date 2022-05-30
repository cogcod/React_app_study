import React from "react";
import Imgfile from "../../assets/img/basicSpider.png";

function MovieItem(props) {
  const MovieImg = `${props.results.poster_path}`;

  // console.log(props);
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.results.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {MovieImg === "null" ? (
          <img src={Imgfile} alt={props.results.title} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.results.poster_path}`}
            alt={props.results.title}
          />
        )}
        <p>{props.results.title}</p>
      </a>
    </li>
  );
}
export default MovieItem;
