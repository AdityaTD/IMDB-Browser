/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { arrowDown, arrowUp } from '../assets/icons';
import { API_HOST } from '../config';

function MovieCard({ movie }) {
  const upvoteMovie = async () => {
    const fetch = await axios.get(`${API_HOST}/movies/${movie.id}/upvote`).then((res) => res.data);
    if (fetch.success) movie.upvotes = fetch.data.upvotes;
  };

  const downvoteMovie = async () => {
    const fetch = await axios.get(`${API_HOST}/movies/${movie.id}/downvote`).then((res) => res.data);
    if (fetch.success) movie.downVotes = fetch.data.downVotes;
  };

  return (
    <div className="grid justify-center content-center items-center p-2 text-center bg-white rounded-md shadow-xl">
      <Link to={`/movie/${movie.id}`} className="pointer">
        <img className="mx-auto rounded-lg" src={movie.poster !== 'N/A' ? movie.poster : 'https://picsum.photos/240/355'} alt="movie poster" height={355.2} width={240} />
        <p className="mt-4 text-md">{ movie.name }</p>
      </Link>
      <div className="flex gap-2 justify-center mt-2">
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
    </div>

  );
}

export default MovieCard;
