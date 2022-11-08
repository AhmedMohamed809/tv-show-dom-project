//You can edit ALL of the code here
import { episodCard, navpart } from "./episodCard.js";
function setup() {
  const getDataFromApi = fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((resp) => resp.json())
    .then((data) => makePageForEpisodes(data))
    .catch((error) => console.log(error));
}

function makePageForEpisodes(episodeList) {
  // nav section
  navpart(episodeList);
  // display episodCard
  episodCard(episodeList);
}

window.onload = setup;
