import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './assets/index.css';

import App from './pages/App';
import Movie from './pages/Movie';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
