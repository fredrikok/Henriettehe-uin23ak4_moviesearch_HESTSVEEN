import './App.css';
import './css/main.css';
//import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import MovieCards from './components/MovieCards';

function App() { 
  return (
    <>
     <Layout>
      <MovieCards />
     </Layout>
    </>
  );
}

export default App;
