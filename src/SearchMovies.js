import React, {useState} from "react"
import MovieCard from "./MovieCard"
import Button from "./components/styles/Button.styled"
import Form from "./components/styles/Form.styled"
import Input from "./components/styles/Input.styled"
import Label from "./components/styles/Label.styled"
import CardList from "./components/styles/CardList.styled"

export default function SearchMovies() {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key={yourkeyhere}&language=en-US&query=${query}&page=1&include_adult=false`
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
            <Form onSubmit={searchMovies}>
                <Label htmlFor="query">Movie Name:</Label>
                <Input 
                    type="text" 
                    name="query" 
                    placeholder="e.g. Casablanca" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <Button type="submit">Search</Button>
            </Form>
            <CardList>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
            )
                )}</CardList>
        </>
    )
}
