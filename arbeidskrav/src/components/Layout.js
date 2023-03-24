//<i class="bi bi-search"></i> - vil gjerne ha et forstørrelse glass til senere, fra Bootstrap for søkefeltet. 
import React from "react";

export default function Layout({children}){
    return (
        <>
         <header>
                <h1>James Bond filmer:</h1> 
          </header>
          <main>
                {children}
          </main>
        </>
         
    )
}