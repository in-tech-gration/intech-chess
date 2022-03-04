//import { Chess } from "chess.js";

//const { Chess } = require("chess.js");

let btn = document.querySelector(".press"); 
btn.addEventListener("click", flip);

function move2d4() {         
  // board.move("d2-d6");
  board.move("wQ-e8");
}

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
// button. when you press it. you move the d2 pawn to d4;









// The New Codes Starts//
var Stopwatch = function(elem, options) {

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
    a.addEventListener("click", function(event) {
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

//..........................DATE TIME

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ms=today.getMilliseconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s ;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



function brown(){ document.body.style.background = "white"; }
function darkBrown(){ document.body.style.background = "rgb(104, 43, 19)"; }




/* movenemt <codes*/
//document.body.style.backgroundColor = "red";//     change the body color //






/* box in js*/
el=document.getElementById("box1");
width=window.innerWidth +50;
height=window.innerHeight+50;
el.style.left=width*Math.random();
el.style.top=height*Math.random();
