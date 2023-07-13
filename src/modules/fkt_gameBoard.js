//import section

//import section end


//Function section


function createfield(selectedColors) {
  class Box {
    constructor(name) {
      this.name = name;
      this.placed = false;
    }
  }

  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const box = new Box("Name " + (i + 1));
    cell.box = box;
    cell.style.backgroundColor = selectedColors[0];
  }
}

//Function section end
export { createfield };

//export section end


