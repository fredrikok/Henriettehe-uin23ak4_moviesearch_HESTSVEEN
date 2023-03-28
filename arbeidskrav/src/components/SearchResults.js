export default function Search({setFilter, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setFilter(event.target.value);
    }
    
    return (
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
    )
}