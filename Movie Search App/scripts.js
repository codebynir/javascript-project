// most popular movies api (initially show)
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// bash url of images
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// search api
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//   html Access
const movieBox = document.querySelector("#movie-box");
const search = document.getElementById("search");

const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  showMovies(data.results);
};

const showMovies =(data) => {
    movieBox.innerHTML="";
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        
        <img src="${IMGPATH + item.poster_path}" alt="">
        <div class="overlay">
            <div class="title">
                <h2>${item.title}</h2>
                <span>⭐ ${item.vote_average}</span>
            </div>
            <h3>Overview</h3>
           
            <p>${item.overview}</p>
            <h2 style="color:red; text-align:center;>Top Movie</h2>
            <h2 style="bottom:0px; color:red; text-align:center;>Top Movie</h2>
        </div>
        `;
    movieBox.appendChild(box);
  });
};
search.addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    getMovies(SEARCHAPI+e.target.value)
  } else {
    getMovies(APIURL);

  }
});
//   initial call(on page load)
getMovies(APIURL);
