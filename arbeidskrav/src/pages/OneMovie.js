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
        <p>{movies.Plot}</p>
        <p>{movies.Year}</p>
        <a href={movies.id}>Les mer</a>
        </>
    )
}