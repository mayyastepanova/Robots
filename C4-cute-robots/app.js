import { cuteRobotsData } from "./robots.js";

console.log(cuteRobotsData);
const tileContainer = document.getElementById("tile-container");
const searchBar = document.getElementById("search-input");

const renderRobotTiles = (cuteRobots) => {
    // remove current tiles
    tileContainer.innerHTML = "";
  
    cuteRobots.forEach((robot) => {
      // creates an HMTL for a tile
      // here we can also add tile css classes for styling as this is the HTML
      const tileInnerHTML = `
              <div class="tile">
                  <img class="tile-image" src="${robot.imageUrl}"></img>
                  <h2 class="tile-title">${robot.name}</h2>
                  <p>"${robot.description}"</p>
              </div>
          `;
  
      const tile = document.createElement("div"); // create a <div> for the tile
      tile.innerHTML = tileInnerHTML; // Add the tileInnerHTML created above to tile <div>
      tileContainer.append(tile); // Append the tile to the tileContainer
    });

  };

searchBar.addEventListener('keyup', (event) => {
 const userInput = event.target.value;
 console.log(userInput);

 const filterRobots = cuteRobotsData.filter((robot) => {
    return robot.name.includes(userInput);

})

renderRobotTiles(filterRobots)
})


renderRobotTiles(cuteRobotsData);


