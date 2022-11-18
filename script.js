//You can edit ALL of the code here
import { episodCard, navpart } from "./episodCard.js";
import { getData } from "./getData.js";
import { getAllShows } from "./shows.js";
const allShows = getAllShows();
function setup() {
  makePageForShows(allShows);
  // let url = `https://api.tvmaze.com/shows/82/episodes`;
  // getData(url, makePageForEpisodes);
}
function makePageForShows(allShow) {
  const bodyOfShow = document.getElementById("bodyOfShow");
  // bodyOfShow.id = "allShows";
  const root = document.getElementById("root");
  allShow.forEach((show) => {
    const divOfShows = document.createElement("div");

    const imgOfShow = document.createElement("img");
    const summaryOfShow = document.createElement("p");
    const nameOfShow = document.createElement("h1");
    nameOfShow.id = "nameOfShow";
    const divOfRite = document.createElement("div");
    const rating = document.createElement("p");
    const genres = document.createElement("p");
    const status = document.createElement("p");
    const runtime = document.createElement("p");
    const hederNav = document.querySelector(".nav");
    hederNav.style.display = "none";
    status.id = "statusOfShow";
    divOfRite.id = "divOfreat";
    nameOfShow.innerText = show.name;
    nameOfShow.value = show.name;
    rating.innerText = `Rating: ${show.rating.average}`;
    genres.innerText = `Genres: ${show.genres}`;
    status.innerText = `Status: ${show.status}`;
    runtime.innerText = `Runtime: ${show.runtime}`;
    divOfShows.className = "contenerOfShow";
    imgOfShow.src = show.image ? show.image.medium : "";
    summaryOfShow.innerHTML = show.summary;
    divOfShows.id = show.id;
    divOfShows.addEventListener("click", (e) => {
      const showID = show.id;
      hederNav.style.display = "flex";
      if (showID) {
        bodyOfShow.innerHTML = "";
        let url = `https://api.tvmaze.com/shows/${showID}/episodes`;
        getData(url, makePageForEpisodes);
      }
      console.log(showID);
    });
    // bodyOfShow.appendChild(olListOFShows);
    // olListOFShows.appendChild(listOfTheShows);
    bodyOfShow.appendChild(divOfShows);
    divOfShows.appendChild(nameOfShow);
    divOfShows.appendChild(imgOfShow);
    divOfShows.appendChild(summaryOfShow);
    divOfShows.appendChild(divOfRite);
    divOfRite.appendChild(rating);
    divOfRite.appendChild(genres);
    divOfRite.appendChild(status);
    divOfRite.appendChild(runtime);
  });
}
function makePageForEpisodes(episodeList) {
  // display episodCard
  const header = document.querySelector(".nav");
  const homeButton = document.createElement("button");
  homeButton.innerText = "Home Page";
  header.appendChild(homeButton);
  homeButton.addEventListener("click", (e) => {
    makePageForShows(allShows);
    homeButton.remove();
  });
  episodCard(episodeList);
  navpart(episodeList);
}

window.onload = setup;
