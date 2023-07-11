//import section


//import section end

//Function section
const SIZE = 8;

const SHIP_SIZES = [4, 3, 3, 2, 2, 2];
// Klasse zum Erstellen des Spielfelds und Platzieren der Schiffe des NPC
class CreateNPCBoard {
    constructor() {
        this.ships = [];
        this.valid = false;
        this.gameboard = [];

        this.createBoard();
        this.placeShips();
    }

    createBoard() {
        for (let i = 0; i < SIZE; i++) {
            this.gameboard[i] = [];
            for (let j = 0; j < SIZE; j++) {
                this.gameboard[i][j] = 0;
            }
        }
    }

    placeShips() {
        for (let shipSize of SHIP_SIZES) {
            let ship = [];
            let direction = Math.floor(Math.random() * 2);
            let x = Math.floor(Math.random() * (SIZE - shipSize));
            let y = Math.floor(Math.random() * SIZE);

            for (let i = 0; i < shipSize; i++) {
                if (direction === 0) {
                    this.gameboard[x + i][y] = 1;
                    ship.push({ x: x + i, y: y, length: shipSize, valid: false });
                } else {
                    this.gameboard[x][y + i] = 1;
                    ship.push({ x: x, y: y + i, length: shipSize, valid: false });
                }
            }

            this.ships.push(ship);
        }
    }
}

const npcBoard = new CreateNPCBoard();
const renderedBoard = renderNPCBoard(npcBoard.ships);

// Funktion zeichnet das NPC-Spielfeld
function renderNPCBoard(ships) {
    const cells = document.querySelectorAll('#playfield .cell');

    // Alle Zellen auf den Standardzustand zurücksetzen
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });

    // Gesetzte Schiffe farbig darstellen
    ships.forEach((ship) => {
        ship.forEach(({ x, y }) => {
            const cellIndex = y * SIZE + x;
            cells[cellIndex].style.backgroundColor = 'blue';
        });
    });
}

//export section
export { CreateNPCBoard, renderNPCBoard };
//export section end
