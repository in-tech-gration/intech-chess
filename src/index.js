let btn = document.querySelector(".press")
btn.addEventListener("click", flip)

let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
  board.start()
})

function move2d4() {
  // board.move("d2-d6");
  board.move("wQ-e8")
}

function flip() {
  board.flip()
  console.log(board.orientation())
}

function whenDragStartsLogEverything(
  source,
  piece,
  position,
  orientation
) {
  console.log("Drag started:")
  console.log("Source: " + source)
  console.log("Piece: " + piece)
  // console.log("Position: " + Chessboard/.objToFen(position));
  console.log("Orientation: " + orientation)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}

function alsoLogEverythingOnDrop(
  source,
  target,
  piece,
  newPos,
  oldPos,
  orientation
) {
  console.log("Source: " + source)
  console.log("Target: " + target)
  console.log("Piece: " + piece)
  // console.log("New position: " + Chessboard.objToFen(newPos));
  // console.log("Old position: " + Chessboard.objToFen(oldPos));
  console.log("Orientation: " + orientation)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}

const config = {
  draggable: true,
  pieceTheme:
    "https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png",
  position: "start",
  onDragStart: whenDragStartsLogEverything,
  onDrop: alsoLogEverythingOnDrop
}

const board = Chessboard("daBoard", config)
const chess = new Chess()

while (!chess.game_over()) {
  const moves = chess.moves()
  console.log(JSON.stringify(moves))
  const move = moves[Math.floor(Math.random() * moves.length)]
  chess.move(move)
}


if(chess.game_over()) {
  document.querySelector(".darkSouls").style.display = "inline"
}

// console.log(chess.pgn())
// button. when you press it. you move the d2 pawn to d4;
