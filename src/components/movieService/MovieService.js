class MovieService {
  _apiBase = "http://www.omdbapi.com/?";
  //_apiKey = 'apikey=ffb98f22';

  getResource = async (url) => {
    // async делает синхронный код. Вместе с await. не блокирует код подобие синхронного кода
    let result = await fetch(url);
    if (!result.ok) {
      // поскольку fetch не выдаёт ошибки и reject надо проверить на ошибки
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json();
  };

  getAllMovies = async () => {
    const res = await this.getResource(`http://www.omdbapi.com/?apikey=ffb98f22&s=matrix`);
    return res.Search;
  };

  getMovie = async (id) => {
    const res = await this.getResource(`http://www.omdbapi.com/?apikey=ffb98f22&i=${id}`);
    return res;
  };

  // _transformMovie = (movie) => {
  //   return {
  //     poster: movie.poster.path + '.' + movie.poster.extension,
  //     title: movie.title,
  //     type: movie.movie,
  //     year: movie.year,
  //     id: movie.imdbID,
  //   }
  // }
  // getAllMovies = async () => {
  //   const res = await this.getResource(`http://www.omdbapi.com/?apikey=ffb98f22&s=matrix`);
  //   return res.data.results.map(this._transformCharacter)
  // }

  // getCharacter = async (id) => {
  //   const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
  //   return this._transformCharacter(res.data.results[0])
  // }

  // _transformCharacter = (character) => {
  //   return {
  //     id: character.id,
  //     name: character.name,
  //     thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
  //     homepage: character.urls[0].url,
  //     wiki: character.urls[1].url,
  //     comics: character.comics.items,
  //   }
  // }
}

export default MovieService;
