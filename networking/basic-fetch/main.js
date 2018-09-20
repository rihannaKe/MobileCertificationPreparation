let imageUrl = 'resources/my-image.jpg';
let jsonUrl = 'resources/colors.json';
let textUrl  = 'resources/words.txt';

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function showError(error){
  console.log('Looks like there was a problem: \n', error)
}


function fetchText(){
  fetch(textUrl)
    .then( response => validateResponse(response) )
    .then( response => response.text() )
    .then( myText =>  drawText(myText) )
    .catch( error =>  showError(error) );
}

function fetchJson(){
  fetch(jsonUrl)
    .then( response => validateResponse(response) )
    .then( response => response.json() )
    .then( myJson =>  drawJson(myJson) )
    .catch( error =>  showError(error) );
}

function fetchImage(){
  fetch(imageUrl)
    .then( response => validateResponse(response) )
    .then( response => response.blob() )
    .then( response => drawImage(response) )
    .catch( error => showError(error) );
}

function drawImage(bulbImage){
  var container = document.getElementById('image-container');
  container.innerHTML=''
  var imgElem = document.createElement('img');
  container.appendChild(imgElem);
  var imgUrl = URL.createObjectURL(bulbImage);
  imgElem.src = imgUrl;
}

function drawText(text){
  document.getElementById('myText').innerHTML=text;
}

function drawJson(json){
  document.getElementById('myJson').innerHTML=JSON.stringify(json);
}
