import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieCards(){
    
    const [resultat, setResultat] = useState([])
    const [filter, setFilter] = useState('James+Bond')
  
    const getMovies = async() => {
      const response = await fetch(`http://www.omdbapi.com/?s=${filter}&type=movie&apikey=bed90b0b`)
      const resultat = await response.json()
      //setMovies(resultat)
      setResultat(resultat.Search)

      console.log(resultat.Search)
  }

  useEffect(() => {
      getMovies()
    },[])

    
    return (
        <>
        {resultat.length <= 10 ? resultat?.map((item, index) =>(
                <MovieCard key={index} Id={item.imdbID} Poster={item.Poster} Title={item.Title} Year={item.Year} />
            )) : resultat?.map((item, index) =>(
                <MovieCard key={index} Id={item.imdbID} Poster={item.Poster} Title={item.Title} Year={item.Year} />
            )) } 
        </> 
    )
}
    