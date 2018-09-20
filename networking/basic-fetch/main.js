let textUrl = 'resources/my-image.jpg';
let jsonUrl = 'resources/colors.json';
let imageUrl = 'resources/text';



function fetchText(){
  return fetch(jsonUrl)
      .then( response => response.text() )
      .then( myText =>  drawText(myText) )
      .catch(() => console.log('catched') );
}

function fetchJson(){
  return fetch(jsonUrl)
      .then( response => response.json() )
      .then( myJson =>  drawJson(myJson) )
      .catch(() => console.log('catched') );
}

function fetchImage(){
  return fetch(imageUrl)
        .then( response => response.blob())
        .then( response => drawImage(response) )
        .catch( () => console.log('catched') );
}

function drawImage(bulbImage){
   var imgElem = document.getElementsByClassName('my-image');
   var imgUrl = URL.createObjectURL(bulbImage);
   imgElem.src = imgUrl;
}

function drawText(text){
  document.getElementsByClassName('my-json').innerHTML=text;
}

function drawJson(json){
  document.getElementsByClassName('my-json').innerHTML=JSON.stringify(json);
}


function showError(){

}


// document.addEventListener('DOMContentLoaded', function() {
//     fetchImage(imageUrl);
//     fetchJson(jsonUrl);
//     fetchText(textUrl);
// }, false);
