import { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";
import PreLoader from "../preLoader/PreLoader";
import Search from "../search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
const MainContent = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moreMovies, setMoreMovies] = useState([])

  let page = 1

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== "all" ? `&type=${type}` : ""}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const getMoreMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&page=${page + 1}&s=${str}${type !== "all" ? `&type=${type}` : ""}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMoreMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=${2}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMoreMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} getMoreMovies={getMoreMovies} />
      {loading ? <PreLoader /> : <MovieList movies={movies} getMoreMovies={getMoreMovies} moreMovies={moreMovies} />}
    </main>
  );
};

export default MainContent;
