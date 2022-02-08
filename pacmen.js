let pos= 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // HOLD THE ALL PACMAN

// RETURNS AN OBJECT WITH RANDOM VALUES
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// MAKE PACMEN AT RANDOM POSITION AND RANDOM VELOCITY
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  // ADD IMAGE TO DIV ID = GAME
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // NEW PACMEN POSITION SET
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  // ADD NEW CHILD IMAGE 
  game.appendChild(newimg);

  // RETURN OBJECT
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // USING FOR LOOP MOVE PACMEN ONE AND MOVE IMAGE INDOM 
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 10);
}

function checkCollisions(item) {
  if ((item.position.x + item.velocity.x + item.newimg.width >= window.innerWidth) || (item.position.x + item.velocity.x < 0))
  {
    item.velocity.x = -item.velocity.x;
  }
  // COLLISION WITH WALLS AND MAKE PACMEN BOUNCE
  if ((item.position.y + item.velocity.y + item.newimg.height >= window.innerHeight) || (item.position.y + item.velocity.y < 0))
   {
     item.velocity.y = -item.velocity.y;
  }
}
  // ADD NEW PACMEN
function makeOne() {
  pacMen.push(makePac()); 
}

if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}