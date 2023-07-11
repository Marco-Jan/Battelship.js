//import section


//import section end

//Function section

// Funktion zum Erstellen des Spielfelds und Platzieren der Schiffe des NPC
function createNPCBoard() {
    // Spielfeld mit Nullen initialisieren
    npc_board = new Array(SIZE).fill(0).map(() => new Array(SIZE).fill(0));
  
    // Schiffe platzieren
    for (let size of SHIP_SIZES) {
      let placed = false;
      while (!placed) {
        let x = Math.floor(Math.random() * SIZE);
        let y = Math.floor(Math.random() * SIZE);
        let orientation = Math.floor(Math.random() * 2); // 0 = horizontal, 1 = vertikal
  
        // Überprüfen, ob das Schiff auf dem Spielfeld platziert werden kann
        if (orientation === 0 && x + size <= SIZE) {
          let valid = true;
          for (let i = 0; i < size; i++) {
            if (npc_board[x + i][y] !== 0) {
              valid = false;
              break;
            }
          }
          if (valid) {
            for (let i = 0; i < size; i++) {
              npc_board[x + i][y] = size;
            }
            npc_ships.push({ size, x, y, orientation });
            placed = true;
          }
        } else if (orientation === 1 && y + size <= SIZE) {
          let valid = true;
          for (let i = 0; i < size; i++) {
            if (npc_board[x][y + i] !== 0) {
              valid = false;
              break;
            }
          }
          if (valid) {
            for (let i = 0; i < size; i++) {
              npc_board[x][y + i] = size;
            }
            npc_ships.push({ size, x, y, orientation });
            placed = true;
          }
        }
      }
    }
  }
  function onClick(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
  
    let fieldX = Math.floor(x / 50); // Berechne die Spalte im Raster
    let fieldY = Math.floor(y / 50); // Berechne die Zeile im Raster
  
    // Überprüfe, ob das Kästchen innerhalb des Rasters liegt
    if (fieldX >= 0 && fieldX < SIZE && fieldY >= 0 && fieldY < SIZE) {
      // Überprüfe, ob ein Schiff getroffen wurde
      if (npc_board[fieldY][fieldX] === 0) {
        npc_board[fieldY][fieldX] = 'X'; // Setze den Wert im npc_board Array auf "X", um anzuzeigen, dass das Feld schon getroffen wurde
      } else if (npc_board[fieldY][fieldX] === 'X' || npc_board[fieldY][fieldX] === 'Y') {
        if (npc_board[fieldY][fieldX] === 'Y') {
          alert('Du hast schon hier geschossen');
        } else if (npc_board[fieldY][fieldX] === 'X') {
          alert('Du hast schon hier geschossen');
        }
      } else {
        npc_board[fieldY][fieldX] = 'Y'; // Setze 'Y' in ein getroffenes Schiff, um es zu markieren
        console.log(`Treffer  Spalte: ${fieldX} Zeile: ${fieldY}`);
        count_ships--;
        console.log(count_ships);
      }
  
      context.fillStyle = npc_board[fieldY][fieldX] === 'Y' ? 'green' : 'red';
      context.fillRect(fieldX * 50, fieldY * 50, 50, 50);
  
      if (count_ships === 0) {
        alert('Du hast gewonnen');
        document.removeEventListener('click', onClick);
      } else {
        count--;
        alert(`Du hast noch ${count} Versuche`);
        if (count === 0) {
          alert('Du hast verloren');
          document.removeEventListener('click', onClick);
        }
      }
  
      // Printe das neue Spielfeld in die Konsole
      for (let line of npc_board) {
        console.log(line.join(' '));
      }
    }
  }

  function init(){
    createNPCBoard();
    drawGrid();
  }
  
  init();
  
  //expport section

    export {createNPCBoard, onClick};

    //export section end