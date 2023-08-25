import React, { useState, useEffect } from "react";
import { UilSearch } from '@iconscout/react-unicons';
import { MovieCard } from "./MovieCard";
import './App.css';

const API_URL = "https://www.omdbapi.com?apikey=731333ac";

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies('Avengers');
    },[])

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    return(
        <>
        <div className="app">

            <h1>MovieMingle</h1>
            <div className="search">
                <input 
                    value={searchTerm}
                    onChange = {(e) => {setSearchTerm(e.target.value)}}
                    placeholder="Search for Movies" 
                />
                <p onClick={() => searchMovies(searchTerm)}>
                     <UilSearch style={{color: "yellow"}}/>
                </p>
            </div>
            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
        </>
    )
    ;
}

export default App;