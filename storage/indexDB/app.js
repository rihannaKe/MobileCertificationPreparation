const movieData = [
    {
       title: 'Terminator 1',
       director: 'James Cameron',
       year: 1984,
       rating: 'R',
       stars : [ 'Arnold Schwarzengger', 'Linda Hamilton', 'Jean Jung']
  },
  {
     title: 'Terminator 2',
     director: 'James Cameron',
     year: 1986,
     rating: 'R',
     stars : [ 'Arnold Schwarzengger', 'Linda Hamilton', 'Jean Jung']
   }
]

let db;
let DBOpenRequest = window.indexedDB.open('perfStorage',4);
DBOpenRequest.onerror = function(event){
    console.log('error creating database');
}

DBOpenRequest.onsuccess = function(event){
  db=DBOpenRequest.result;
  console.log('success! created  db: '+db.name);
  getAllMovies();
}

DBOpenRequest.onupgradeneeded = function(event){
  let db= event.target.result;
  db.onerror = function(event) {
      console.log('Error loading database.');
  };
  let objectStore = db.createObjectStore("moviesList",{keyPath:'title'});
  for (let i in movieData){
    objectStore.add(movieData[i]);
  }
}

function appendTemplate(movieData){
  let target = document.getElementById('target');
  target.insertAdjacentHTML('beforeend',
  `<section class="card movie">
    <div class="text-column">
      <div class="card-text">
        <h1>${movieData.title}</h1>
        <ul>
          <li>directed by : ${movieData.director}</li>
          <li>release : ${movieData.year}</li>
          <li>staring : ${movieData.stars.toString()}</li>
          <li>rating : ${movieData.rating}</li>
        </ul>
      </div>
     </div>
  </section>
  `)
}


function getAllMovies(){
  let savedMovies = [];
  let objectStore = db.transaction("moviesList").objectStore("moviesList");
  objectStore.openCursor().onsuccess = function(event){
    let cursor = event.target.result;
    if(cursor){
      savedMovies.push(cursor.value);
      cursor.continue();
    } else {
      for(let i=0; i<savedMovies.length;i++){
        appendTemplate(savedMovies[i]);
      }
    }
  }
}

function addMovie(){

  let transaction = db.transaction(["moviesList"],"readwrite");
  transaction.oncomplete = function(evt){
    console.log("insert ok");
  }
  transaction.onerror = function(evt){
    console.log("insert ko");
  }

  let objectStore = transaction.objectStore('moviesList');
  let movie = {
    title: document.getElementById('title').value,
    director: document.getElementById('director').value,
    year: document.getElementById('year').value,
    rating: document.getElementById('rating').value,
    stars: document.getElementById('stars').value.split(',')
  }

  let insertRequest = objectStore.add(movie);
  insertRequest.onsuccess = function(){
    appendTemplate(movie);
  }
}

document.getElementById('addMovie').addEventListener('click',event => {
  event.preventDefault();
  addMovie();
})
