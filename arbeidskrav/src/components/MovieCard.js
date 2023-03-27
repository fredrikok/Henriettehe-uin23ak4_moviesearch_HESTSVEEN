
export default function MovieCard({Title, Year, Poster}){

return (
        <article classname="movie-card">
        <img src={Poster} alt={Title} />
        <h3>{Title}</h3>
        <p>{Year}</p>
        <a href="#">Les mer</a>
        </article>
    )
}
