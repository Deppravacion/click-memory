const clickOrderArry = [];
const numTiles = document.querySelectorAll(".tile").length;

function onlyTiles(event) {
  if (!event.target.classList.contains('tile')) return;
}

function noDubs(event) {
  if(clickOrderArry.includes(event.target)) return;
}

function addClass(event, nam) {
  event.target.classList.add(nam);
}

function addToArry(event) {
  clickOrderArry.push(event.target);
}

function shiftArry() {
  const tile = clickOrderArry.shift();
  tile.classList.remove('selected');
}

function intervalFinished() {
  if (clickArryEmpty) {
    clearInterval(interval);
  }
}

function myInterval() {
  const interval = setInterval(() => {
    shiftArry();
    intervalFinished();
  }, 600)
}

function fillTiles(event) {
  onlyTiles(event);
  noDubs(event);
  addClass(event, 'selected');
  addToArry(event);
}

function emptyTiles() {
  let allBoxesClicked = clickOrderArry.length >= numTiles;
  let clickArryEmpty = clickOrderArry.length === 0;
  
  if (allBoxesClicked) { myInterval(); }
}

function startSetUp() {
  document.addEventListener('click', event => {
    fillTiles(event);
    emptyTiles();
  })
}

startSetUp();

