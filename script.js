const baseEndPoint = 'https://ghibliapi.herokuapp.com/films';
const listOfMovies = document.querySelector('.movies');

//fetch data from the url
async function fetchMovies () {
    let response = await fetch(`${baseEndPoint}?q=`);
    console.log(`${baseEndPoint}?q=`);
    const movies = await response.json();
    //add it in html
    const  html = movies
    .sort(function(a, b) {
        return b.rt_score - a.rt_score;
    })
    .map(movie => {
        return`
        <div class="list-of-movies">
          <h1>${movie.title}</h1>
          <ul class= "first-list">
              <li>${movie.release_date}</li>
              <li class= "score">${movie.rt_score}</li>
          </ul>
          <p>${movie.description}</p>
          <ul class= "second-list">
              <li>${movie.director}</li>
              <li>${movie.producer}</li>
          </ul>
       </div>
  `;
      });
      listOfMovies.innerHTML = html.join('');
}

fetchMovies();


