'use strict'

let CellEventListeners = (gameBoard) => {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener('click', (event) => CellClick(event, gameBoard));
    }
}

let CellClick = (event, gameBoard) => {
    const x = parseInt(event.currentTarget.dataset.row);
    const y = parseInt(event.currentTarget.dataset.col);
    const result = checkHit(x, y, gameBoard);

    displayHitMessage(result);
    decreaseLife(result);
}

let checkHit = (x, y, gameBoard) => {
    const cell = gameBoard.grid[x][y];
    if (cell === '4' || cell === '3' || cell === '2') {
        return true;
    } else {
        return false;
    }
}

let displayHitMessage = (isHit) => {
    console.log(isHit ? 'Treffer!' : 'Kein Treffer!');
}

export { CellEventListeners, CellClick, checkHit, displayHitMessage };
