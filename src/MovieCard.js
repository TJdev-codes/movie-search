import React from "react";
import Card from "./components/styles/Card.styled";
import CardImage from "./components/styles/CardImage.styled";

export default function MovieCard({movie}) {
    
    return (
        <Card>
            <CardImage
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                alt={movie.title + "poster"} 
                />
            <div>
                <h3>{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p>{movie.overview}</p>
            </div>
        </Card>
    )
}