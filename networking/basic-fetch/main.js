let textUrl = 'resources/my-image.jpg';
let jsonUrl = 'resources/colors.json';
let imageUrl = 'resources/words.txt';



function fetchText(){
  fetch(textUrl)
      .then( response => response.text() )
      .then( myText =>  drawText(myText) )
      .catch( error =>  showError(error) );
}

function fetchJson(){
  fetch(jsonUrl)
      .then( response => response.json() )
      .then( myJson =>  drawJson(myJson) )
      .catch( error =>  showError(error) );
}

function fetchImage(){
  fetch(imageUrl)
        .then( response => response.blob() )
        .then( response => drawImage(response) )
        .catch( error => showError(error) );
}

function drawImage(bulbImage){
   var imgElem = document.getElementById('myImage');
   var imgUrl = URL.createObjectURL(bulbImage);
   imgElem.src = imgUrl;
}

function drawText(text){
  document.getElementById('myText').innerHTML=text;
}

function drawJson(json){
  document.getElementById('myJson').innerHTML=JSON.stringify(json);
}


function showError(error){
  console.log('Looks like there was a problem: \n', error)
}


// document.addEventListener('DOMContentLoaded', function() {
//     fetchImage(imageUrl);
//     fetchJson(jsonUrl);
//     fetchText(textUrl);
// }, false);
