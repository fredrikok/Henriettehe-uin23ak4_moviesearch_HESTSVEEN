import './App.css';
import './css/main.css';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [movies, setMovies] = useState([])
  const [resultat, setResultat] = useState([])
  const [filter, setFilter] = useState('James Bond')
  
  const getMovies = async() => {
      const response = await fetch(`http://www.omdbapi.com/s=${filter}&type=movie&apikey=bed90b0b`)
      const resultat = await response.json()
      setMovies(resultat.Search)
  }

  useEffect(() => {
      getMovies()
    },[])

  console.log(movies)


  return (
    <>
     <Layout />
      <Main />
    </>
  );
}

export default App;
