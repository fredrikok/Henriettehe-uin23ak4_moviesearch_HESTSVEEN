import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieCards(){
    
    const [resultat, setResultat] = useState([])
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState('James+Bond')
  
    const getMovies = async() => {
      const response = await fetch(`http://www.omdbapi.com/?s=${filter}&type=movie&apikey=bed90b0b`)
      const resultat = await response.json()
      setMovies(resultat)
      setResultat(movies)

      console.log(resultat)
  }

  useEffect(() => {
      getMovies()
    },[])

    
    return (
        <>
        {resultat.length === 10 ? resultat?.map((item, index) =>(
                <MovieCard key={index} poster={item.urlToImage} title={item.title} year={item.year} />
            )) : resultat?.map((item, index) =>(
                <MovieCard key={index} poster={item.urlToImage} title={item.title} year={item.year} />
            )) }
        </> 
    )
}
    