import { useState } from "react";
import Main from "./Main";

export default function MovieCard ({title, img, category}){
    
    const [movies, setMovies] = useState([])
    const [resultat, setResultat] = useState([])
    const [filter, setFilter] = useState('James Bond')
    
    const getMovies = async() => {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bed90b0b`)
        const data = await response.json()
        getMovies(data)
        setResultat(movies?.filter(items => items?.source?.name === filter))
    }

    console.log(resultat.hits)
    
    
    return (
        <article classname="movie-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </article>
    )
}

