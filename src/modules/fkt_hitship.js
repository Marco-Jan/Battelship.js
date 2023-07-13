function checkHit() {
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener("click", function () {
      if (cell.box) {
        cell.style.backgroundColor = "red";
        console.log("Schiff getroffen!");
      } else {
        cell.style.backgroundColor = "gray";
        console.log("Kein Schiff getroffen!");
      }
    });
  }
}

export { checkHit };
