'use strict'
import { grid } from './fkt_gameBoard.js';
import { decreaseLife } from './fkt_placeships.js';

let CellEventListeners = () => {
    const cells = document.getElementsByClassName('cell');

    // Iteriere über alle Zellen und füge den Event Listener hinzu
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener('click', CellClick);
    }
}

let  CellClick = (event) => {
    const x = parseInt(event.currentTarget.dataset.row);
    const y = parseInt(event.currentTarget.dataset.col);
    const result = checkHit(x, y);


    displayHitMessage(result);
    decreaseLife(result)
}

let checkHit = (x, y) => {
    const cell = grid[x][y];
    console.log(grid[x][y]);
    if (cell === '4' || cell === '3' || cell === '2') {
        return true;
    }
    else {
        return false;
    }
}


let displayHitMessage = (isHit)  => {
    console.log(isHit ? 'Treffer!' : 'Kein Treffer!');
    console.log('klick');
    
}


export { CellEventListeners, CellClick, checkHit, displayHitMessage};
  