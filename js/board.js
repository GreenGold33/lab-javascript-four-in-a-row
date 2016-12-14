function Board () {
  this.matrix = [[null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null]];
  console.log(this.matrix);

}

Board.prototype.insertTile = function (color, column) {
  var cell  = null;
  var cells = [];

  this.matrix.forEach(function(row) {
      cells.push(row[column]);
  });

  var i = cells.length - 1;
  while (i >= 0 && cell === null) {
    if (cells[i] === null) {cell = i;}

    i--;
  }
  if (cell) {this.matrix[cell][column] = color;}
  else {console.log("Column filled up!!!");}
  console.log("erui");
};

var b =  new Board();
