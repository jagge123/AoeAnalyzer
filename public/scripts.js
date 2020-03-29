fetch('/aoe')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    //Hämta ut 'root' och sedan försöka skriva till det
    //document finns metoder för hur man hittar element
    var element = document.getElementById('root');
    element.innerHTML = JSON.stringify(data);
    console.log(data);
  });

