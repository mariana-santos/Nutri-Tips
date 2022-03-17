import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="artigos" element={<Articles />} />
      <Route path="sobre" element={<About />} />
      <Route path="contato" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
