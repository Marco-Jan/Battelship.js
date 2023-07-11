import _ from 'lodash';
import './style.css';
// import Icon from './icon.png';
import {createNPCBoard,renderNPCBoard} from './modules/function_game.js';
let count = 50;
let count_ships = 16;


// NPC-Board erstellen
const npcBoard = createNPCBoard();

function init(){
    createNPCBoard();
    renderNPCBoard(npcBoard);
  }
  
  init();