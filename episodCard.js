import { getData } from "./getData.js";
import { getAllShows } from "./shows.js";
let SearchBox = document.getElementById("inputSearch");
// Display all episodCard
export function episodCard(episodes) {
  navpart(episodes);
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  for (let i = 0; i < episodes.length; i++) {
    const dive = document.createElement("div");
    const pHeader = document.createElement("p");
    const img = document.createElement("img");
    const pSum = document.createElement("p");
    img.src = episodes[i].image ? episodes[i].image.medium : "";
    pHeader.innerText = `${episodes[i].name} - S01E0${i + 1}  `; // display heder and number of episod
    pHeader.id = "header-episode";
    dive.id = "contenar";
    pSum.innerHTML = episodes[i].summary;
    dive.appendChild(pHeader);
    dive.appendChild(img);
    dive.appendChild(pSum);
    rootElem.appendChild(dive);
  }
  let allCards = [...document.querySelectorAll("#contenar")];
  searhResult(allCards);
  //select episode
  selectepisodelist(allCards);
}
const display = document.createElement("p");
const nav = document.querySelector(".nav");
//display Nav
export function navpart(episodeList) {
  const allShows = getAllShows();
  const listOfHeder = [...document.querySelectorAll("#header-episode")];
  const select = document.getElementById("selectePisodes");

  select.innerText = "";
  for (let i = 0; i < listOfHeder.length; i++) {
    const option = document.createElement("option");

    option.innerText = listOfHeder[i].innerText;
    option.value = i;
    select.appendChild(option);
  }
  display.innerText = `Display 0 /${episodeList.length} episode `;
  nav.appendChild(display);
  //Show Selector
  const Showselector = document.getElementById("showSelector");
  showList(allShows, Showselector);
  Showselector.addEventListener("change", (e) => {
    let value = e.target.value;
    let url = `https://api.tvmaze.com/shows/${value}/episodes`;
    getData(url, episodCard);
  });
}
//select episode
function selectepisodelist(allCards) {
  const select = document.getElementById("selectePisodes");
  console.log(select);
  select.addEventListener("change", (ev) => {
    let val = ev.target.value;
    console.log(typeof val);
    allCards.forEach((item, index) => {
      if (index === val * 1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}
//search Function
function searhResult(allCards) {
  display.id = "display";
  SearchBox.addEventListener("input", (ev) => {
    let searchValue = ev.target.value.toLowerCase();
    allCards.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    let filterEpisodes = allCards.filter(
      (item) => item.style.display == "block"
    );
    display.innerText = `Display ${filterEpisodes.length}/${allCards.length} episode `;
  });
}
//display ShowAllList
function showList(allShow, showSelector) {
  allShow.forEach((element) => {
    let optionShow = document.createElement("option");
    optionShow.text = element.name;
    optionShow.value = element.id;
    showSelector.appendChild(optionShow);
  });
}
