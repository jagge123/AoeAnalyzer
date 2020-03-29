

function getData(){
    getOverallData();
}
var input = document.getElementById('getData');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function getOverallData(){
  fetch('/aoe')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    //Hämta ut 'root' och sedan försöka skriva till det
    //document finns metoder för hur man hittar element
    var ageElement = document.getElementById('age');
    var civElement = document.getElementById('civ');
    var leaderBoardElement = document.getElementById('leaderBoard');


    ageElement.innerHTML = JSON.stringify(data.age);
    civElement.innerHTML = JSON.stringify(data.civ);
    leaderBoardElement.innerHTML = JSON.stringify(data.leaderboard);
  });
}

