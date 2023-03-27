//Kilde: Alternativt brukt: https://icons.getbootstrap.com/icons/search/ - for en kodebit. Bare for testing.
//<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//</svg>

//<i class="bi bi-search"></i> - vil gjerne ha et forstørrelse glass til senere, fra Bootstrap for søkefeltet. 
import React from "react";
import MovieCards from "./MovieCards";
import SearchResults from "./SearchResults";


export default function Layout({setResultat, getMovies}){
    return (
        <>
         <header>
                <h1>Filmer: </h1> 
                <SearchResults setResultat={setResultat} getMovies={getMovies} />
          </header>
          <main className="content">
                <MovieCards setResultat={setResultat} />
          </main>
        </>
         
    )
}