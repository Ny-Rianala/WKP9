import MovieGenerator from "./MovieGenerator.js";
import React, { useState, useEffect } from "react";
import randomId from "random-id";


//Fetch all of the data
function App() {
    const [allMovies, setAllMovie] = useState([]);

 async function fetchMovies() {
        const result = await fetch('https://ghibliapi.herokuapp.com/films');
        let response = await result.json();
        setAllMovie(response);
    }

useEffect(() => {
    fetchMovies();
}, []);
    const id = allMovies.map(idMovie => idMovie.id)
    return (
        <MovieGenerator key={randomId()} movie = {allMovies}/>
    )
}


export default App;