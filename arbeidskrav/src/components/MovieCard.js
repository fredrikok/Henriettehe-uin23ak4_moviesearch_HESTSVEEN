import { Link } from "react-router-dom";

export default function MovieCard({Title, Year, Poster, Id, Plot}){

return (
        <>
        <Link to={Id} >
        <article className="movie-card">
        <img src={Poster} alt={Title} />
        <h3>{Title}</h3>
        <p>{Year}{Plot}</p>
        </article>
        </Link>
        </>
        
    )
}
