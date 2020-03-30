const civElement = document.getElementById('displayCivilizations');
const leaderboardElement = document.getElementById('displayLeaderboardTypes');
const mapTypesElement = document.getElementById('displayMapTypes');
const lastestGameElement = document.getElementById('displayLatestGame');
const latestMatchButton = document.getElementById("latestMatchButton");


document.getElementById("latestMatchButton").addEventListener("click", function(){
  let latestMatchInput = document.getElementById("steamid")
  getLastMatch(latestMatchInput.value);
});

function getCivilizations(){
  getOverallData()
  .then((data) => {
    console.log(data);
    civElement.innerHTML = JSON.stringify(data.civ);
  })
}

function getLeaderboardTypes(){
  getOverallData()
  .then((data) => {
    console.log(data);
    leaderboardElement.innerHTML = JSON.stringify(data.leaderboard);
  })
}

function getMapTypes(){
  getOverallData()
  .then((data) => {
    mapTypesElement.innerHTML = JSON.stringify(data.map_type);
  })
}

function getOverallData(){
  return fetch('/aoe')
  .then((response) => {
    return response.json();
  });
}

function getLastMatch(id){
  return fetch(`/aoe/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    lastestGameElement.innerHTML = JSON.stringify(data);
  })
  
}


/**function hej() {
  getCivilizations()
  .then((data) => {  
    civElement.innerHTML = JSON.stringify(data.civ);
}**/

