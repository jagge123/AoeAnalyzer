// File for callback and requests
const civElement = document.getElementById('displayCivilizations');
const leaderboardElement = document.getElementById('displayLeaderboardTypes');
const mapTypesElement = document.getElementById('displayMapTypes');
const lastestGameElement = document.getElementById('displayLatestGame');
const latestMatchButton = document.getElementById("latestMatchButton");
const latestMatchesButton = document.getElementById("latestMatchButton");


document.getElementById("latestMatchButton").addEventListener("click", function(){
  let latestMatchInput = document.getElementById("steamid")
  getLastMatch(latestMatchInput.value);
});

function getCivilizations(){
  getOverallData()
  .then((data) => {
    console.log(data);
    civElement.innerHTML = JSON.stringify(data.civ);
    let container = document.getElementById("responseContainer");
    let outputHTML = '<ul class="list-group"> \n'
    

    for(civ of data['civ']){
      outputHTML += '<li class="list-group-item">' + civ['id'] + ': ' +  civ['string'] + '</li> \n'
    }
    outputHTML += '</ul>'
    container.innerHTML = outputHTML;
    console.log(data['civ'])
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

function getLastGame(id){
  return fetch(`/aoe/games/recent/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    lastestGameElement.innerHTML = JSON.stringify(data);
  })

  function getLastGames(id){
    return fetch(`/aoe/games/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //latestMatchesButton.innerHTML = JSON.stringify(data);
    })
  
}


/**function hej() {
  getCivilizations()
  .then((data) => {  
    civElement.innerHTML = JSON.stringify(data.civ);
}**/

