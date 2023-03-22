import React, { useEffect, useState } from "react";

export default function MovieCards(){
    
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState('James+Bond')
  
    const getMovies = async() => {
      const response = await fetch(`http://www.omdbapi.com/?s=${filter}&type=movie&apikey=bed90b0b`)
      const resultat = await response.json()
      setMovies(resultat)

      console.log(resultat)
  }

  useEffect(() => {
      getMovies()
    },[])
    
    
    return (
        <>
        </>
    )
}