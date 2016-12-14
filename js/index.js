var board =  new Board();

function addTile (event) {
  var position = board.insertTile(event.currentTarget.dataset.column);
  if(position) {
    renderTile(position);
    board.checkWinner();
    board.takeTurns();
  }
}

function renderTile (position) {
  var boardElement= document.getElementById("game-board");
  var rowElement = boardElement.getElementsByClassName("row")[position[0]];
  var cellElement= rowElement.getElementsByTagName("div")[position[1]];
  cellElement.classList += (" tile-" + board.turn);

}

window.onload = function () {
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addTile);
  }
};
