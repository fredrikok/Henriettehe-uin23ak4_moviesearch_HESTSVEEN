import './sass/main.scss';
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OneMovie from './pages/OneMovie';


function App() { 
  return (

    <>
    <Router>
      <Routes >
          <Route index element={<Home />} />
          <Route path='/:id' element={<OneMovie />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;