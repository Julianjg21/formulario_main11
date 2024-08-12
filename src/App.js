import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageWeb from './modules/PageWeb';
import Hola from './modules/Hola';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWeb />} />
        <Route path="/page2/hola" element={<Hola />} />
      </Routes>
    </Router>
  );
}

export default App;
