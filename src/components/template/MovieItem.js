import { Component } from 'react';

import MovieService from '../movieService/MovieService';

import './MovieItem.css'

class MovieItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" alt="movie" />               
              </div>
              <div className="card-title text-align">The Matrix</div>
              <div className="card-content">
                <span>movie</span>
                <span>1999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItem;