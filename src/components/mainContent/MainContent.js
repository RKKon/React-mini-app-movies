import { Component } from "react";
import MovieList from "../movieList/MovieList";
//import MovieService from "../movieService/MovieService";
import PreLoader from "../preLoader/PreLoader";
import Search from "../search/Search";

const API_KEY = process.env.REACT_APP_API_KEY
class MainContent extends Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    const {movies, loading} = this.state
    return(
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {
          loading ? ( <PreLoader />) : 
          (<MovieList movies={movies} />)
          
        }
      </main>
    )
  }
}

export default MainContent;