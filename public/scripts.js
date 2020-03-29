const civElement = document.getElementById('displayCivilizations');

function getCivilizations(){
  fetch('/aoe')
  .then((response) => {
      return response.json();
  })
  .then((data) => {  
    civElement.innerHTML = JSON.stringify(data.civ);
});
}

