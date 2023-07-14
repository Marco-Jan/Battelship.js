'use strict'


class Ship {
  constructor(length) {
    this.length = length;
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

const ships = [new Ship(4), new Ship(3), new Ship(3), new Ship(2), new Ship(2), new Ship(2)];

let pushShip = grid => {
  for (let i = 0; i < ships.length; i++) {
    const ship = ships[i];
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

    const [row, col] = ship.position;
    if (ship.direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        grid[row][col + i] = ship.toString();
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        grid[row + i][col] = ship.toString();
      }
    }
  }

  return grid;
}

let isValidPlacement = (grid, ship) => {
  const [row, col] = ship.position;

  if (ship.direction === 'horizontal') {
    for (let i = 0; i < ship.length; i++) {
      if (col + i >= 10 || grid[row][col + i] !== '0') {
        return false;
      }
    }
  } else {
    for (let i = 0; i < ship.length; i++) {
      if (row + i >= 10 || grid[row + i][col] !== '0') {
        return false;
      }
    }
  }

  return true;
}

export { pushShip };





