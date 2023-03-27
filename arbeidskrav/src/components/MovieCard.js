import { Link } from "react-router-dom";

export default function MovieCard({Title, Year, Poster, Id}){

return (
        <>
        <Link to={Id} >
        <article className="movie-card">
        <img src={Poster} alt={Title} />
        <h3>{Title}</h3>
        <p>{Year}</p>
        <a href="#">Les mer</a>
        </article>
        </Link>
        </>
        
    )
}
