//You can edit ALL of the code here
import {episodCard,navpart} from "./DisplayCard/episodCard.js"
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  // nav section
  navpart(episodeList);
  // display episodCard
  episodCard(episodeList);
}

window.onload = setup;
