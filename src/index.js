'use strict'


import _, { } from 'lodash';
import './style.css';
import { createField, grid, displayGrid } from './modules/fkt_gameBoard.js';
import { pushShip,decreaseLife } from './modules/fkt_placeships.js'; 
import { CellEventListeners,displayHitMessage } from './modules/fkt_hitship.js';

const gridSizex = 10;
const gridSizey = 10;



function init() {
    createField(gridSizex, gridSizey);
    pushShip(grid);
    displayGrid();
    CellEventListeners();
    displayHitMessage();
    decreaseLife();
}

init();
