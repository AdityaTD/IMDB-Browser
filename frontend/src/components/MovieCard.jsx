/* eslint-disable react/prop-types */
import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="grid justify-center content-center items-center p-2 text-center bg-white rounded-md shadow-xl">
      <img className="mx-auto rounded-lg" src={movie.poster !== 'N/A' ? movie.poster : 'https://picsum.photos/240/355'} alt="movie poster" height={355.2} width={240} />
      <p className="mt-4 text-md">{ movie.name }</p>
    </div>
  );
}

export default MovieCard;
