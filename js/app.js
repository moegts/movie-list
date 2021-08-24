// eslint-disable-next-line quotes
"use strict";

if(localStorage.movileList == null){
  localStorage.movileList = JSON.stringify([]);
}

let imgArray =
`action.png,
adventure.png,
animation.png,
comedy.png,
detective.png,
fantasy.png,
history.png,
horror.png,
musical.png,
pirate.png,
romantic.png,
sci-fi.png,
war.png,
western.png`;

let formMovieID = document.getElementById('formMovie');
let sideListID = document.getElementById('sideList');


let MovieBoss = function(nameNew, imageNew , releaseNew, imageSrc){
  this.nameNew = nameNew;
  this.imageNew = imageNew;
  this.releaseNew = releaseNew;
  this.imageSrc = imageSrc;
  MovieBoss.all.push(this);
};

MovieBoss.all=[];

MovieBoss.prototype.Render = function(){
  let divMain = document.createElement('div');
  sideListID.appendChild(divMain);

  let removeOnClick = document.createElement('a');
  divMain.appendChild(removeOnClick);
  removeOnClick.textContent = 'X';

  let ImageCat = document.createElement('img');
  ImageCat.src = './img/' + this.imageSrc;
  divMain.appendChild(ImageCat);

  let nameNew = document.createElement('p');
  divMain.appendChild(nameNew);
  nameNew.textContent = this.nameNew;

  let releaseNew = document.createElement('p');
  divMain.appendChild(releaseNew);

};

formMovieID.addEventListener('submit', getData);

function getData(e){
  e.preventDefault();
  let nameNew = document.getElementById('nameNew').value;
  let imageNew = document.getElementById('imageNew').value;
  let releaseNew = document.getElementById('releaseNew').value;
  let imageSrc = imageNew + '.png';
  new MovieBoss(nameNew, imageNew , releaseNew, imageSrc).Render();
  console.log(MovieBoss.all);
}

function MemoryCard(){
  localStorage.movileList = JSON.stringify(MovieBoss.all);
}
