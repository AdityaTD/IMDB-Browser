import React from 'react';
import axios from 'axios';
import { API_HOST } from '../config';
import MovieCard from '../components/MovieCard';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const getMovies = async () => {
    const fetch = await axios.get(`${API_HOST}/movies`).then((res) => res.data);
    setMovies(fetch.data);
  };

  getMovies();

  return (
    <div>
      <div className="grid justify-center p-4">
        <h1 className="text-3xl font-bold text-center text-gray-900">IMDB Browser</h1>
        <form>
          <div className="relative">
            <input type="text" className="pr-8 pl-5 m-4 w-96 h-14 rounded focus:outline-none shadow-lg focus:shadow-xl" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search for a movie..." />
            <div className="absolute top-4 right-3">
              <i className="z-20 text-gray-400 hover:text-gray-500 fa fa-search" />
            </div>
          </div>
        </form>
      </div>

      {search}

      <div className="grid grid-cols-5 grid-flow-row gap-8 px-8 mx-16 mb-8">
        { movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        )) }
      </div>
    </div>
  );
}

export default App;
