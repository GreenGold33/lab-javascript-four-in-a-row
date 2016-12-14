function Board () {
  this.matrix = [[null, "red", null, null, null, null, null],
                 [null, "red", null, null, null, null, null],
                 [null, "red", null, null, null, null, null],
                 [null, "red", null, null, null, null, null],
                 [null, "red", null, null, null, null, null],
                 [null, "red", "red", "red", null, null, "red"]];
}

Board.prototype._getColumn = function(column){
  var cells = [];

  this.matrix.forEach(function(row) {
      cells.push(row[column]);
  });

  return cells;
};

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

Board.prototype._check = function(cellsToCheck) {
  var i          = 0;
  var inRow      = 1;

  while( (inRow < 4) && (i < cellsToCheck.length-1) ) {
    if(cellsToCheck[i] !== cellsToCheck[i + 1]) {
      inRow      = 1;
      console.log("inRow", inRow);
    } else {
      if (cellsToCheck[i] !== null) {inRow++;}
      console.log("inRow", inRow);
    }
    i++;
  }
  return inRow === 4;
};

Board.prototype.checkHorizontally = function(row) {
  return this._check(this.matrix[row]);
};

Board.prototype.checkVertically = function(column) {
  var cells = this._getColumn(column);
  return this._check(cells);
};

Board.prototype.checkDiagonally = function() {
  return this._check(cells);
};

var b =  new Board();
