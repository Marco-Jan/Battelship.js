'use strict'


module.exports = class GameBoard {
  constructor(gridSizex, gridSizey) {
    this.gridSizex = gridSizex;
    this.gridSizey = gridSizey;
    this.grid = [];
  }

  createField() {
    for (let i = 0; i < this.gridSizey; i++) {
      const row = [];
      for (let j = 0; j < this.gridSizex; j++) {
        row.push('0');
      }
      this.grid.push(row);
    }
  }

  displayGrid() {
    const container = document.getElementById('grid-container');

    container.innerHTML = '';


  for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');

      for (let j = 0; j < row.length; j++) {
          const cell = row[j];
          const cellElement = document.createElement('div');
          cellElement.classList.add('cell');
          cellElement.textContent = cell;
          cellElement.dataset.row = i.toString();
          cellElement.dataset.col = j.toString();

          rowElement.appendChild(cellElement);
      }

      container.appendChild(rowElement);
  }
  }
}


// export { createField, grid, displayGrid };
