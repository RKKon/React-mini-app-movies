// import { Component } from "react";
// import MovieService from "../movieService/MovieService";

import { useState } from "react";
import MovieItem from "../movieItem/MovieItem";
import './MovieList.css'

const MovieList = (props) => {
  const { movies = [], moreMovies = [], } = props;
  const [loadMoreMovies, setLoadMoreMovies] = useState(false);
  let isMovie;

  const showMoreMovies = () => {
    return moreMovies.length ? moreMovies.map(movie => {
      return <MovieItem key={movie.imdbID} {...movie} />
    }) : <h4>Nothing found</h4>

  }

  const changeMoreMoviesState = () => setLoadMoreMovies(true);

  return (
    <>
      <div className="movieList">
        {movies.length ? movies.map(movie => {
          if (movie.Type === "movie") { isMovie = true }
          return <MovieItem key={movie.imdbID} {...movie} />
        }) : <h4>Nothing found</h4>
        }
        {loadMoreMovies ? showMoreMovies() : null}
      </div>
      {!loadMoreMovies ? <button onClick={changeMoreMoviesState} className="btn_more">
        {isMovie ? "More movies" : 'More series'}
      </button > : null}

    </>
  )
}

export default MovieList;