'use strict'

import './style.css';
import GameBoard from './modules/fkt_gameBoard';
import { pushShip, decreaseLife } from './modules/fkt_placeships.js'; 
import { CellEventListeners, displayHitMessage } from './modules/fkt_hitship.js';

const gridSizex = 10;
const gridSizey = 10;

function init() {
    const gameBoard = new GameBoard(gridSizex, gridSizey);
    gameBoard.createField();
    pushShip(gameBoard.grid);
    gameBoard.displayGrid();
    CellEventListeners(gameBoard);
    displayHitMessage();
    decreaseLife();
}

init();
