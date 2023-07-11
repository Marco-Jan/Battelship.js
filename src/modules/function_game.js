//import section


//import section end

//Function section
//Function section
const SIZE = 8;

const SHIP_SIZES = [4, 3, 3, 2, 2, 2];
// Funktion zum Erstellen des Spielfelds und Platzieren der Schiffe des NPC
function createNPCBoard() {
    // Spielfeld mit Nullen initialisieren
    const npc_board = [];

    // Schiffe platzieren
    for (let shipSize of SHIP_SIZES) {
        let shipPlaced = false;
        let ship;

        while (!shipPlaced) {
            ship = [];

            const direction = Math.floor(Math.random() * 2); // 0 = horizontal, 1 = vertikal
            const x = Math.floor(Math.random() * (SIZE - shipSize));
            const y = Math.floor(Math.random() * SIZE);

            let valid = true;

            for (let i = 0; i < shipSize; i++) {
                if (direction === 0) {
                    for (let j = 0; j < npc_board.length; j++) {
                        for (let k = 0; k < npc_board[j].length; k++) {
                            if (npc_board[j][k][0] === x + i && npc_board[j][k][1] === y) {
                                valid = false;
                                break;
                            }
                        }
                        if (!valid) {
                            break;
                        }
                    }
                } else if (direction === 1) {
                    for (let j = 0; j < npc_board.length; j++) {
                        for (let k = 0; k < npc_board[j].length; k++) {
                            if (npc_board[j][k][0] === x && npc_board[j][k][1] === y + i) {
                                valid = false;
                                break;
                            }
                        }
                        if (!valid) {
                            break;
                        }
                    }
                }

                if (!valid) {
                    break;
                }
            }

            if (valid) {
                for (let i = 0; i < shipSize; i++) {
                    if (direction === 0) {
                        ship.push([x + i, y]);
                    } else if (direction === 1) {
                        ship.push([x, y + i]);
                    }
                }

                shipPlaced = true;
            }
        }

        npc_board.push(ship);
    }

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

export { createNPCBoard, renderNPCBoard };

//export section end