'use strict'


import _ from 'lodash';
import './style.css';
import { createField, grid, displayGrid } from './modules/fkt_gameBoard.js';
import { pushShip } from './modules/fkt_placeships.js'; // Füge die Dateiendung ".js" hinzu
import { CellEventListeners } from './modules/fkt_hitship.js';

const gridSizex = 10;
const gridSizey = 10;

function init() {
    createField(gridSizex, gridSizey);
    pushShip(grid);
    displayGrid();
    CellEventListeners();
}

init();
