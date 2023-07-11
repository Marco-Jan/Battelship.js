//import section


//import section end

//Function section
const SIZE = 8;

const SHIP_SIZES = [4, 3, 3, 2, 2, 2];
// Funktion zum Erstellen des Spielfelds und Platzieren der Schiffe des NPC
function createNPCBoard() {
    // Spielfeld mit Nullen initialisieren
    const npc_board = [];

    // Schiffe platzieren
    for (let shipSize of SHIP_SIZES) {
        const ship = [];

        const direction = Math.floor(Math.random() * 2);//0 = horizontal, 1 = vertikal
        console.log(direction,'direction');
        console.log(shipSize,'shipSize');
        const x = Math.floor(Math.random() * (SIZE - shipSize));
        console.log(x,'x');
        
        const y = Math.floor(Math.random() * SIZE);
        console.log(y,'y');

        for (let i = 0; i < shipSize; i++) {
            let valid = true;
            if (direction === 0 && valid === true) {  
                ship.push([x + i, y]);
                valid = false
            } 
            else if (direction === 1 && valid === true) {
                ship.push([x, y + i]);
                valid = false
            } else {
                

        }
    }
        npc_board.push(ship);
        console.log(ship,'pushed ship');

    }
    console.log(npc_board,'npc_board');
    return npc_board;
   
}



// Funktion zeichnet das NPC-Spielfelds
  function renderNPCBoard(npc_board) {

  const cells = document.querySelectorAll('#playfield .cell');

  // Alle Zellen auf den Standardzustand zurücksetzen
  cells.forEach((cell) => {
      cell.style.backgroundColor = 'white';
  });

  // Gesetzte Schiffe farbig darstellen
  npc_board.forEach((ship) => {
      ship.forEach(([x, y]) => {
          const cellIndex = y * SIZE + x;
          cells[cellIndex].style.backgroundColor = 'blue';
      });
  });
}
  
  //expport section

    export {createNPCBoard,renderNPCBoard};

    //export section end