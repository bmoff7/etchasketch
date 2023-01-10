function populateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplatesColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplatesRows = `repeat(${size}, 1fr)` ;

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16)