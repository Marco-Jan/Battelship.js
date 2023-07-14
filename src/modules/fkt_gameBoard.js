'use strict'

const grid = [];
console.log(grid);

let createField = (gridSizex, gridSizey) => {
  for (let i = 0; i < gridSizey; i++) {
    const row = [];
    for (let j = 0; j < gridSizex; j++) {
      row.push('0');
    }
    grid.push(row);
  }
}

function displayGrid() {
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

export { createField, grid, displayGrid };
