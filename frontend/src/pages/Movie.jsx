/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { API_HOST } from '../config';
import { arrowDown, arrowUp } from '../assets/icons';

function Movie() {
  const [movie, setMovie] = React.useState({});

  const params = useParams();

  if (!params.id) {
    return <div>No movie selected</div>;
  }

  const upvoteMovie = async () => {
    const fetch = await axios.get(`${API_HOST}/movies/${params.id}/upvote`).then((res) => res.data);
    if (fetch.success) setMovie({ ...movie, upvotes: fetch.data.upvotes });
  };

  const downvoteMovie = async () => {
    const fetch = await axios.get(`${API_HOST}/movies/${params.id}/downvote`).then((res) => res.data);
    if (fetch.success) setMovie({ ...movie, downVotes: fetch.data.downVotes });
  };

  const getMovie = async () => {
    const fetch = await axios.get(`${API_HOST}/movies/${params.id}`).then((res) => res.data);
    if (fetch.success) setMovie(fetch.data);
  };

  getMovie();

  return (
    <div>
      <div className="m-auto mt-32 w-4/5 bg-white rounded-xl shadow-xl lg:w-1/3">
        <div className="grid justify-center p-4">
          <h1 className="text-3xl text-center text-bold">{movie.name}</h1>
          <h3 className="text-xl text-center text-bold">
            {movie.year}
            {' '}
            -
            {' '}
            {movie.genre}
          </h3>
          <div className="grid grid-flow-col gap-2 justify-center m-6">
            <button className="p-2 text-center bg-green-400 shadow-md" onClick={() => upvoteMovie()}>
              {arrowUp}
              {' '}
              {movie.upvotes}
            </button>
            <button className="p-2 text-center bg-red-400 shadow-md" onClick={() => downvoteMovie()}>
              {arrowDown}
              {' '}
              {movie.downVotes}
            </button>
          </div>
          <img src={movie.poster !== 'N/A' ? movie.poster : 'https://picsum.photos/240/355'} alt="movie poster" height={355.2} width={240} className="mx-auto rounded-xl shadow-md" />
          <Link className="p-2 mt-4 text-center bg-purple-400 rounded-lg shadow-md hover:shadow-lg" to="/">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
