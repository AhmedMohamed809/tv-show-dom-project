// // Display all episodCard
// export function episodCard(episodes, search = "") {
//   const rootElem = document.getElementById("root");
//   rootElem.innerHTML = "";
//   for (let i = 0; i < episodes.length; i++) {
//     const dive = document.createElement("div");
//     const pHeader = document.createElement("p");
//     const img = document.createElement("img");
//     const pSum = document.createElement("p");
//     img.src = episodes[i].image.medium; // display medium Img
//     pHeader.innerText = `${episodes[i].name} - S01E0${i + 1} `; // display heder and number of episod
//     pHeader.id = "header-episode";
//     dive.id = "contenar";
//     dive.className = `allSearch${
//       episodes[i].name.includes(search) || episodes[i].summary.includes(search)
//         ? "allEpisdes"
//         : "none"
//     }`;
//     pSum.innerHTML = episodes[i].summary;
//     rootElem.appendChild(dive);
//     dive.appendChild(pHeader);
//     dive.appendChild(img);
//     dive.appendChild(pSum);
//   }
// }

// // Nav bar section
// export function navpart(episodeList) {
//   const nav = document.querySelector(".nav");
//   const search = document.createElement("input");
//   const display = document.createElement("p");
//   const contenar = document.querySelector("#contenar");
//   search.id = "inputSearch";
//   display.id = "display";
//   let displayNumber = 0;
//   console.log(displayNumber);
  
//   //search section
//   search.addEventListener("input", (ev) => {
//     episodCard(episodeList, search.value);
//     let displySearch = document.getElementsByClassName(
//       "allSearchallEpisdes"
//     ).length;
//     console.log(displySearch);
//     display.innerText = `Display ${displySearch}/${episodeList.length} episode `;
//   });

//   //select section
//   for (let i = 0; i < episodeList.length; i++) {
//     const select = document.getElementById("selectePisodes");
//     const option = document.createElement("option");
//     option.innerText = `S01E0${i + 1} - ${episodeList[i].name}`;
//     select.appendChild(option);
//     nav.appendChild(search);
//     nav.appendChild(display);
//   }
// }
