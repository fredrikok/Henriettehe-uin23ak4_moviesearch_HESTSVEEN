export default function Search({setFilter, filter, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }
    const handleSearch = (event) =>{
        setFilter(event.target.value);
        console.log(event.target.value)
    }



    const movieGet = (event) => {
        setFilter(event)
            getMovies()
    }
    
    return (

    <>

    <section>
        <h1>Filmer</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="search" 
            placeholder="James Bond" 
            onChange={handleSearch} 
            />
            <input 
            type="submit" 
            onClick={getMovies} 
            value="Søk"/>
        </form>
    </section>

    <div>
        <form onSubmit={handleSubmit}>
            <input
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            ></input>
        </form>
    </div>
    </>
    )
}