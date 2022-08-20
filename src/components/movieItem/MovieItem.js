//import { Component } from 'react';
//import MovieService from '../movieService/MovieService';

import imgNotFount from '../../img/image_not_found.png'

import './MovieItem.css'

const MovieItem = (props) => {
  const { Poster,
        Title,
        Type,
        Year ,    
        imdbID} = props;
  return (
    <div id={imdbID} className="padding">
      <div className="card">
        <div className="card-image">
          {
            Poster === 'N/A' ? <img src={imgNotFount} alt={Title} /> :
            <img src={Poster} alt={Title} />
          }            
        </div>
        <div className="card-title text-align">{Title}</div>
        <div className="card-content">
          <p>{Type} <span className='right'>{Year}</span></p> 
        </div>
      </div>
    </div>
  )
}

export default MovieItem;