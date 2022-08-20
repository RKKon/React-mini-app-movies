import { Component } from "react";

import MovieItem from "../movieItem/MovieItem";
import MovieService from "../movieService/MovieService";

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poster: null,
      title: null,
      type: null,
      year: null ,    
      id: null,
    }
  }

  movieService = new MovieService();

  componentDidMount() {this.getMovies('tt0133093') }
 
  getMovies = async () => {
    await this.movieService
      .getAllMovies()
      .then(res => console.log(res))
      // .getMovie('tt0133093')
      // .then(res => {
      //   this.setState({      
      //     poster: res.Poster,
      //     title: res.Title,
      //     type: res.Type,
      //     year: res.Year ,    
      //     id: res.imdbID,
      //   })
      // })
  }
  render() {
    const {poster, title, type, year, id} = this.state;

    return (
      <div key={id} className="container">
        <div className="row">
          {/* <div className="col s12 m6"> */}
            <div className="card">
              <div className="card-image">
                <img src={poster} alt={title} />               
              </div>
              <div className="card-title text-align">{title}</div>
              <div className="card-content">
                <span>{type}</span>
                <span>{year}</span>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default MovieList;