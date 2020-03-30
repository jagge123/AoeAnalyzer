const civElement = document.getElementById('displayCivilizations');

function getCivilizations(id){
  fetch(`/aoe/${id}`)
  .then((response) => {
      return response.json();
  })
  .then((data) => {  
    civElement.innerHTML = JSON.stringify(data.civ);
});
}

function hej() {
  getCivilizations()
  .then((data) => {  
    civElement.innerHTML = JSON.stringify(data.civ);
}

