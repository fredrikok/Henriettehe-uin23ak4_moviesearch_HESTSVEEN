

export default function MovieCard({title, year, poster}){

return (
        <article classname="movie-card">
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <p>{year}</p>
        <a href="#">Les mer</a>
        </article>
    )
}
