//You can edit ALL of the code here
import { episodCard, navpart } from "./episodCard.js";
import { getData } from "./getData.js";
function setup() {
  let url = `https://api.tvmaze.com/shows/82/episodes`;
  getData(url, makePageForEpisodes);
}

function makePageForEpisodes(episodeList) {
  // display episodCard
  episodCard(episodeList);
  navpart(episodeList);
}

window.onload = setup;
