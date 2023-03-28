

export default function Search({setResultat, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setResultat(event.target.value)
        console.log(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Søk etter film her.." onChange={handleSearch} />
            <button type="submit" onClick={getMovies}></button>
        </form>
    )
}