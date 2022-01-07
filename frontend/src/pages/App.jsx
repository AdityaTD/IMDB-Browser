import React from 'react';
import axios from 'axios';
import { API_HOST } from '../config';
import MovieCard from '../components/MovieCard';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [sMovies, setSMovies] = React.useState([]);
  const [search, setSearch] = React.useState('');

  let searchTimeout;

  const getMovies = async () => {
    const fetch = await axios.get(`${API_HOST}/movies`).then((res) => res.data);
    if (fetch.success) setMovies(fetch.data);
  };

  const searchMovies = async () => {
    const fetch = await axios.get(`${API_HOST}/search?name=${search}`).then((res) => res.data);
    if (fetch.success) setSMovies(fetch.data);
  };

  const handleSearch = (e) => {
    if (e.target.value < 1) setSMovies([]);
    else {
      setSearch(e.target.value);

      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchMovies();
      }, 1000);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      await searchMovies();
    }
  };

  getMovies();

  return (
    <div>
      <div className="grid justify-center p-4">
        <h1 className="text-3xl font-bold text-center text-gray-900">IMDB Browser</h1>
        <div className="relative">
          <input type="text" onKeyDown={handleEnter} className="pr-8 pl-5 m-4 w-96 h-14 rounded focus:outline-none shadow-lg focus:shadow-xl" onChange={handleSearch} placeholder="Search for a movie..." />
          <div className="absolute top-4 right-3">
            <i className="z-20 text-gray-400 hover:text-gray-500 fa fa-search" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 grid-flow-row gap-8 px-8 mx-16 mb-8">
        {sMovies.length > 0 ? (
          sMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
