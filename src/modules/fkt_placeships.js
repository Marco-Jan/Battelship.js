'use strict'



class Ship {
  constructor(length, life) {
    this.length = length;
    this.life = life;
    this.position = [];
    this.direction = '';


  }

  setPosition(position) {
    this.position = position;

  }

  setDirection(direction) {
    this.direction = direction;
  }

  toString() {
    return this.length.toString();

  }

}



const ships = [new Ship(4, 4), new Ship(3, 3), new Ship(3, 3), new Ship(2, 2), new Ship(2, 2), new Ship(2, 2)];

console.log(ships, 'shipbefore');


let pushShip = grid => {
  for (let i = 0; i < ships.length; i++) {
    const ship = ships[i];
    console.log(ship,'ship');
    let randomIndexOut;
    let randomIndexInner;
    let direction;

    do {
      randomIndexOut = Math.floor(Math.random() * 10);
      randomIndexInner = Math.floor(Math.random() * 10);
      direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      ship.setPosition([randomIndexOut, randomIndexInner]);
      ship.setDirection(direction);
    } while (!isValidPlacement(grid, ship));

    const [x, y] = ship.position;
    if (ship.direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        grid[x][y + i] = ship.toString();
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        grid[x + i][y] = ship.toString();
      }

    }  
  }

  return grid;
}

let isValidPlacement = (grid, ship) => {
  const [x, y] = ship.position;

  if (ship.direction === 'horizontal') {
    for (let i = 0; i < ship.length; i++) {
      if (y + i >= 10 || grid[x][y + i] !== '0') {
        return false;
      }
    }
  } else {
    for (let i = 0; i < ship.length; i++) {
      if (x + i >= 10 || grid[x + i][y] !== '0') {
        return false;
      }
    }
  }


  return true;
}

let decreaseLife = (result) => {

  for (let i = 0; i < ships.life; i++) {
    const ships = ships[i];
    console.log(lifes, 'i');
  

  if (result === true) {
    console.log("isHit ist true");
    // ship.life--;
    // console.log(ships.life, 'life');
    // console.log(ships, 'shipafter');
  } else {
    console.log("isHit ist false");
  }
}

}
  export { pushShip, ships, decreaseLife };





