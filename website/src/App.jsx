import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Mens from './Components/Mens';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
// import react from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/mens' element={<Mens />} />
        <Route exact path='/Signin' element={<Signin />}/>
        <Route exact path='/Signup' element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;