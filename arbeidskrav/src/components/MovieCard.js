import { useEffect, useState } from "react";
import Main from "./Main";

export default function MovieCard ({title, img, category}){
    return (
        <article classname="movie-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </article>
    )
}

