// import { Component } from "react";
// import MovieService from "../movieService/MovieService";

import MovieItem from "../movieItem/MovieItem";
import './MovieList.css'

const MovieList = (props) => {
  const {movies = []} = props;
  return (
    <div className="movieList">
      {movies.length ? movies.map(movie => {
        return <MovieItem key={movie.imdbID} {...movie} />
      }) : <h4>Nothimg found</h4>
      }
    </div>
  ) 
}

export default MovieList;