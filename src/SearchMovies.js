import React, {useState} from "react"
import MovieCard from "./MovieCard"

export default function SearchMovies() {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=520b68b845c5bf623749ce8cf9bbe8db&language=en-US&query=${query}&page=1&include_adult=false`
    try {
        const res = await fetch(url)
        const data  = await res.json()
        setMovies(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="e.g. Casablanca" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
            )
                )}</div>
        </>
    )
}