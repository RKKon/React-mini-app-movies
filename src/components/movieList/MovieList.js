// import { Component } from "react";
// import MovieService from "../movieService/MovieService";

import MovieItem from "../movieItem/MovieItem";
import './MovieList.css'

const MovieList = (props) => {
  const {movies} = props;
  return (
    <div className="movieList">
      {movies.map(movie => {
        return <MovieItem key={movie.imdbID} {...movie} />
      })}
    </div>
  ) 
}

export default MovieList;