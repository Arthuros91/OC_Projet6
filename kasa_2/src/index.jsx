import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
//import ErrorPage from './pages/404';
import Location from './pages/location';
import About from './pages/about';

import Header from './components/Header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

