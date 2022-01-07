/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/App.css';

function Movie() {
  const params = useParams();

  if (!params.id) {
    return <div>No movie selected</div>;
  }

  return (
    <div className="App">
      { params.id }
    </div>
  );
}

export default Movie;
