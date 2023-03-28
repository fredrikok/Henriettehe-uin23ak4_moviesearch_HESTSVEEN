export default function Search({setResultat, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        if(event.target.value > 2){
            setResultat(event.target.value)
            console.log(event.target.value)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Søk etter film her.." onChange={handleSearch} />
            <input type="submit" onClick={getMovies} value="Søk"/>
        </form>
    )
}