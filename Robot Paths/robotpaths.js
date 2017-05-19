function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

function robotPaths (n) {
  let board = makeBoard(n);
  let count = 0;

  function traverse (row, col) {
    if (row === n - 1 && col === n - 1) {
      count++;
      return;
    }

    if (row < 0 || row >= n || col < 0 || col >= n) {
      return;
    }

    if (board.hasBeenVisited(row, col)) {
      return;
    } else {
      board.togglePiece(row, col);
      traverse(row, col + 1);
      traverse(row + 1, col);
      traverse(row, col - 1);
      traverse(row - 1, col);
      board.togglePiece(row, col);
    }
  }

  traverse(0, 0);

  return count;
}
