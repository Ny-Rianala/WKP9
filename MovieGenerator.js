import React from "react";
// import "./index.css";
import randomId from "random-id";


function MovieGenerator(props) {
    const movies = props.movie;
    const html = movies.map(film => {return (
        <div key={randomId()}>
            <div className="list-of-movies">
                <div className="cards"> 
                    <h1>{film.title}</h1>  
                    <ul className= "first-list">
                        <li>{film.releaseDate}</li>
                        <li>{film.rt_score}</li>
                    </ul>
                    <p>{film.description}</p>
                    <ul className= "second-list">
                        <li>{film.director}</li>
                        <li>{film.producer}</li>
                    </ul>
                </div>
            </div>
        </div>  
)
})
  
    console.log(html);
    return(
    <div>{html}</div>
    )
}

export default MovieGenerator;
