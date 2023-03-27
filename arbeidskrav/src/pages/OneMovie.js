import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function OneMovie() {

    const {id} = useParams();
    const [movies, setMovies] = useState("");

    const filmSlug = async () => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=bed90b0b`;
        const response = await fetch(url); 
        const responseJSON = await response.json();
        setMovies(responseJSON);
    };

    useEffect(() => {
        filmSlug();
    }, [id]);


    console.log(movies)

    return(
        <>
        <p>{movies.Title}</p>
        <img src={movies.Poster} alt={movies.Title} />
        <h3>{movies.Title}</h3>
        <p>{movies.Year}</p>
        <a href="#">Les mer</a>
        </>
    )
}