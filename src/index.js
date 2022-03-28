import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Articles from './pages/Articles'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="artigos" element={<Articles />} />
      <Route path="sobre" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
