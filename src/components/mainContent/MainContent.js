import { Component } from "react";
import MovieList from "../movieList/MovieList";
//import MovieService from "../movieService/MovieService";

class MainContent extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=ffb98f22&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  // getResource = async (url) => { // async делает синхронный код. Вместе с await. не блокирует код подобие синхронного кода
  //   let result = await fetch(url);
  //   if (!result.ok) { // поскольку fetch не выдаёт ошибки и reject надо проверить на ошибки
  //       throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  //   }
  //   return await result.json();
  // }
  // getAllMovies = async () => {
  //   const res = await this.getResource(`http://www.omdbapi.com/?apikey=ffb98f22&s=matrix`);
  //   return res.Search;
  // }

  render() {
    const {movies} = this.state
    return(
      <main className="container content">
        {
          movies.length ? (<MovieList movies={this.state.movies} />) : 
          <h3>Loading...</h3> 
        }
        
      </main>
    )
  }
}

export default MainContent;