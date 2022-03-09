//import { Chess } from "chess.js";

//const { Chess } = require("chess.js");

//display  starts//

let btn = document.querySelector(".press");
btn.addEventListener("click", flip);
if (btn.addEventListener === true) {
  document.getElementById("pressbox").style.dispaly = "display";
}
function removeElement() {
  document.getElementById("pressbox").style.display = "none";
}

let reset = document.getElementById("resetAll");
reset.addEventListener("click", () => {
  board.start();

});
//display  ends//pl


//Play As box reset and display none starts//

function saveValue() {
  var x = document.querySelector(".pressbox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Play As box reset and display none ends//






/*Background color change starts*/

function green() { document.body.style.background = "rgb(104, 150, 100)"; }
function blueStar() { document.body.style.background = "rgb(10, 50, 50)"; }
function brown() { document.body.style.background = "rgb(104, 43, 19)"; }
/*Background color change ends*/



//Main board starts//


function flip() {
  board.flip();
  console.log(board.orientation());
}

function whenDragStartsLogEverything(source, piece, position, orientation) {
  console.log("Drag started:");
  console.log("Source: " + source);
  console.log("Piece: " + piece);
  // console.log("Position: " + Chessboard/.objToFen(position));
  console.log("Orientation: " + orientation);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

function alsoLogEverythingOnDrop(
  source,
  target,
  piece,
  newPos,
  oldPos,
  orientation
) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  // console.log("New position: " + Chessboard.objToFen(newPos));
  // console.log("Old position: " + Chessboard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

const config = {
  draggable: true,
  pieceTheme: "https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png",
  position: "start",
  onDragStart: whenDragStartsLogEverything,
  onDrop: alsoLogEverythingOnDrop
};

const board = Chessboard("daBoard", config);
const chess = new Chess();

while (!chess.game_over()) {
  const moves = chess.moves();
  console.log(JSON.stringify(moves));
  const move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
console.log(chess.pgn());

//Main board ends//


// The Stopwatch Starts//
var Stopwatch = function (elem, options) {

  var timer = createTimer(),
    startButton = createButton("start", start),
    stopButton = createButton("stop", stop),
    resetButton = createButton("reset", reset),
    offset,
    clock,
    interval;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements     
  elem.appendChild(timer);
  elem.appendChild(startButton);
  elem.appendChild(stopButton);
  elem.appendChild(resetButton);

  // initialize
  reset();

  // private functions
  function createTimer() {
    return document.createElement("span");
  }

  function createButton(action, handler) {
    var a = document.createElement("a");
    a.href = "#" + action;
    a.innerHTML = action;
    a.addEventListener("click", function (event) {
      handler();
      event.preventDefault();
    });
    return a;
  }

  function start() {
    if (!interval) {
      offset = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render(0);
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    timer.innerHTML = clock / 1000;
  }

  function delta() {
    var now = Date.now(),
      d = now - offset;
    offset = now;
    return d;
  }

  // public API
  this.start = start;
  this.stop = stop;
  this.reset = reset;
};

// basic examples
var elems = document.getElementsByClassName("basic");

for (var i = 0, len = elems.length; i < len; i++) {
  new Stopwatch(elems[i]);
}
// The Stopwatch ends//


// Clock starts//

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ms = today.getMilliseconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };
  return i;
}
                                           // Clock ends//
