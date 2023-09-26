import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Mens from './Components/Mens'
// import react from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/Mens' element={<Mens />} />
      </Routes>
    </div>
  );
}

export default App;