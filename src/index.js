import _ from 'lodash';
import './style.css';
import { createfield } from './modules/fkt_gameBoard.js';
import { canPlaceShip, createShips } from './modules/fkt_placeships.js';
import { checkHit } from './modules/fkt_hitship.js';

const ships = [4];
const selectedColors = ["blue", "red", "green"];


function init() {
    createfield(selectedColors);
    canPlaceShip(0, ships[0], "horizontal");
    createShips();
    checkHit();
}

init();




