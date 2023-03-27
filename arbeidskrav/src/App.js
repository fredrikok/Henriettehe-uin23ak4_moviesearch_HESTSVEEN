import './sass/main.scss';
import Layout from './components/Layout';
import MovieCards from './components/MovieCards';
import React from 'react';
import MovieCard from './components/MovieCard';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { Container, Row, Col } from 'react-boostrap';

function App() { 
  return (
     <Layout >
      <MovieCard />
      <MovieCards />
     </Layout>
  );
}

export default App;
