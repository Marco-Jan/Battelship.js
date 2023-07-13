function canPlaceShip(startIndex, shipSize, orientation) {
    const cells = document.getElementsByClassName("cell");
    const gridSize = 8;
  
    if (orientation === "horizontal" && startIndex % gridSize + shipSize > gridSize) {
      return false;
    } else if (orientation === "vertical" && startIndex + (shipSize - 1) * gridSize >= gridSize * gridSize) {
      return false;
    }
  
    if (orientation === "horizontal") {
      for (let i = startIndex; i < startIndex + shipSize; i++) {
        if (cells[i].box) {
          return false;
        }
      }
    } else if (orientation === "vertical") {
      for (let i = startIndex; i <= startIndex + (shipSize - 1) * gridSize; i += gridSize) {
        if (cells[i].box) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  function createShips() {
    class Ship {
      constructor(name) {
        this.name = name;
        this.placed = true;
      }
    }
  
    const ships_box = document.getElementsByClassName("cell");
  
    for (let i = 0; i < ships.length; i++) {
      const shipSize = ships[i];
      let randomStartIndex = 0;
      let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
  
      do {
        randomStartIndex = Math.floor(Math.random() * (ships_box.length - shipSize + 1));
      } while (!canPlaceShip(randomStartIndex, shipSize, orientation));
  
      if (orientation === "horizontal") {
        for (let j = randomStartIndex; j < randomStartIndex + shipSize; j++) {
          const shipCell = ships_box[j];
          const box = new Ship("Ship " + (i + 1));
          shipCell.box = box;
          shipCell.style.backgroundColor = selectedColors[2];
          console.log(box, 'box');
        }
      } else if (orientation === "vertical") {
        for (let j = randomStartIndex; j <= randomStartIndex + (shipSize - 1) * 8; j += 8) {
          const shipCell = ships_box[j];
          const box = new Ship("Ship " + (i + 1));
          shipCell.box = box;
          shipCell.style.backgroundColor = selectedColors[2];
          console.log(box, 'box');
        }
      }
    }
  }
  
  export { canPlaceShip, createShips };