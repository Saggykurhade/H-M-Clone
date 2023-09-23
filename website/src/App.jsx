import './App.css';
import Homepage from './Clone/Homepage';
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