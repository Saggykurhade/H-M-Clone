import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Children, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;