function Board () {
  this.matrix = [[null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null]];
  this.winner = null;
}

Board.prototype.insertTile = function (color, column) {
  var row  = null;
  var cells = this._getColumn(column);

  var i = cells.length - 1;
  while (i >= 0 && row === null) {
    if (cells[i] === null) {row = i;}

    i--;
  }
  if (row) {this.matrix[row][column] = color;}
  else {console.log("Column filled up!!!");}
};

Board.prototype.chkLine = function(a,b,c,d) {
   // Check first cell non-zero and all cells match
   return ((a !== 0) && (a ===b) && (a === c) && (a === d));
};

Board.prototype._checkDownRight = function() {
  for (var row = 0; row < 3; row++)
    for (var column = 0; column < 4; column++)
      if (this.chkLine(this.matrix[row][column],
                       this.matrix[row + 1][column + 1],
                       this.matrix[row + 2][column + 2],
                       this.matrix[row + 3][column + 3]))
      this.winner = this.matrix[row][column];
};

Board.prototype._checkDownLeft = function() {
  for (row = 3; row < 6; row++)
    for (column = 0; column < 4; column++)
      if (this.chkLine(this.matrix[row][column],
                       this.matrix[row - 1][column + 1],
                       this.matrix[row - 2][column + 2],
                       this.matrix[row - 3][column + 3]))

      this.winner = this.matrix[row][column];

};

Board.prototype._checkDown = function() {
  for (row = 0; row < 3; row++)
    for (column = 0; column < 7; column++)
      if (this.chkLine(this.matrix[row][column],
                       this.matrix[row + 1][column],
                       this.matrix[row + 2][column],
                       this.matrix[row + 3][column]))

      this.winner = this.matrix[row][column];
};

Board.prototype._checkRight = function() {
  for (row = 0; row < 6; row++)
    for (column = 0; column < 4; column++)
      if (this.chkLine(this.matrix[row][column],
                       this.matrix[row][column + 1],
                       this.matrix[row][column + 2],
                       this.matrix[row][column + 3]))
      this.winner = this.matrix[row][column];
};

Board.prototype.checkWinner = function() {
  this._checkRight();
  this._checkDown();
  this._checkDownLeft();
  this._checkDownRight();
  if (this.winner)  {console.log("The winner is " + this.winner);}
};

var b =  new Board();
console.log(b.checkWinner());
