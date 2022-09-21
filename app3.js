const clickOrder = [];
const numTiles = document.querySelectorAll(".tile").length;


document.addEventListener('click', event => {
  if (!event.target.classList.contains('tile')) return;
  if(clickOrder.includes(event.target)) return;
  console.log(event.target);
  event.target.classList.add('selected');
  clickOrder.push(event.target);

  if (clickOrder.length >= numTiles) {
    const interval = setInterval(() => {
      const tile = clickOrder.shift();
      tile.classList.remove('selected');
      if (clickOrder.length === 0) {
        clearInterval(interval);
      }
    }, 600)
  }
})
