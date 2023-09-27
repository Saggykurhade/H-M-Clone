import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Mens from './Components/Mens';
import Signin from './Components/Signin';
// import react from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/mens' element={<Mens />} />
        <Route exact path='/Signin' element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;