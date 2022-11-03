//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  for(let i = 0 ; i < episodeList.length ; i ++ ){
    const rootElem = document.getElementById("root");
    const dive = document.createElement("div")
    const pHeader = document.createElement("p");
    const img = document.createElement("img");
    const pSum = document.createElement("p");
    img.src = episodeList[i].image.medium; // display medium Img
    pHeader.innerText = `${episodeList[i].name} - S01E0${i + 1} `; // display heder and number of episod
    pHeader.id="header-episode";
    dive.id="contenar"
    pSum.innerHTML = episodeList[i].summary; // display summary
    rootElem.appendChild(dive)
    dive.appendChild(pHeader);
    dive.appendChild(img);
    dive.appendChild(pSum);
  }}

window.onload = setup;
