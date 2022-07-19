import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Articles from './pages/Articles'
import { SearchProvider } from './Components/Providers/search';

ReactDOM.render(
  <BrowserRouter>
    <SearchProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="artigos" element={<Articles />} />
        <Route path="sobre" element={<About />} />
      </Routes>
    </SearchProvider>
  </BrowserRouter>,
  document.getElementById('root')
);