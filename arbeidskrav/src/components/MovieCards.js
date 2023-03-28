import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Search from "./SearchResults";



export default function MovieCards( ){ 
    const [resultat, setResultat] = useState([])
    const [filter, setFilter] = useState('James-Bond')
  
    const getMovies = async() => {
      const response = await fetch(`http://www.omdbapi.com/?s=${filter}&type=movie&apikey=bed90b0b`)
      const resultat = await response.json()
      setResultat(resultat.Search)
      console.log(resultat.Search)
  }
  useEffect(() => {
      getMovies()
    },[])
    
    return (
        <>
        <Search setFilter={setFilter} getMovies={getMovies}></Search>
        {resultat.length <= 10 ? resultat?.map((item, index) =>(
                <MovieCard key={index} Id={item.imdbID} Poster={item.Poster} Title={item.Title} Plot={item.Plot} Actors={item.Actors} Released={item.Released} Year={item.Year} />
            )) : resultat?.map((item, index) =>(
                <MovieCard key={index} Id={item.imdbID} Poster={item.Poster} Title={item.Title} Plot={item.Plot} Actors={item.Actors} Released={item.Released} Year={item.Year} />
            )) } 
        </> 
    )
    }