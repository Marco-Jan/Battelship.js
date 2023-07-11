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
        const direction = Math.floor(Math.random() * 2);
        const x = Math.floor(Math.random() * (SIZE - shipSize));
        const y = Math.floor(Math.random() * SIZE);
        for (let i = 0; i < shipSize; i++) {
            if (direction === 0) {
                ship.push([x + i, y]);
            } else {
                ship.push([x, y + i]);
            }
        }
        npc_board.push(ship);
        console.log(ship,'pushed ship');

    }
    console.log(npc_board,'npc_board');

  }


 
  
  //expport section

    export {createNPCBoard};

    //export section end