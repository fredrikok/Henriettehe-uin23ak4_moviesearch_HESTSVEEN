import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <h3>{movies.Title}</h3>
        <img src={movies.Poster} alt={movies.Title} />
        <p>Story: {movies.Plot}</p>
        <p>Actors: {movies.Actors}</p>
        <p>Released : {movies.Released}</p>
        <p>Year: {movies.Year}</p>
        </>
    )
}