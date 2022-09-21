const clickOrder = []; 
const numTiles = document.querySelectorAll(".tile").length;

function addClass(elm, prop) {
  elm.target.classList.add(prop);
}

function pushFunc(elm) {
  clickOrder.push(elm.target);
}

function shiftFunc(prop) {
  clickOrder.shift().classList.remove(prop);
}

function siphonFunc() {
  let clickTotal = clickOrder.length;
 
  if (clickTotal >= numTiles) {
    const interval = setInterval(() => {
      shiftFunc('selected');
      if (clickOrder.length === 0) {
        clearInterval(interval);
      }
    }, 600)
  }
}

function eventFunc() {
  document.addEventListener('click', event => {
    if (!event.target.classList.contains('tile')) return;
    if(clickOrder.includes(event.target)) return;
  
    addClass(event, 'selected');
    pushFunc(event);
    siphonFunc();
  })
}

eventFunc();
