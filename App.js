import MovieGenerator from "./MovieGenerator.js";
import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import randomId from "random-id";



//Fetch all of data
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
        <div>
            <Header />
            <MovieGenerator key={randomId()} movie = {allMovies}/>
        </div>
    )
}


export default App;