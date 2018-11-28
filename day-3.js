const solvePuzzle = (input) => {
  const board = generateBoard(input);
  const resultBrick = board[input - 1];

  return Math.abs(resultBrick.x) + Math.abs(resultBrick.y);
}


const generateBoard = (input) => {
  const board = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: -1 }
  ];
  let going = 'l';
  let steps = 2;

  while (board.length < input) {
    for (var j = 0; j < 2; j++) {
      for (var s = 0; s < steps; s++) {
        addBrick(board, going);
      }
      going = getNewDirection(going);
      console.log("Generating board:", Math.floor(board.length / input * 100), "%");
    }
    steps++;

  }

  return board;
}

const addBrick = (board, going) => {
  const lastBrick = board[board.length - 1];
  const newBrick = { x: lastBrick.x, y: lastBrick.y };
  
  if (going === 'r') newBrick.x += 1;
  if (going === 'l') newBrick.x -= 1;
  if (going === 'u') newBrick.y -= 1;
  if (going === 'd') newBrick.y += 1;

  board.push(newBrick);
}

const getNewDirection = (going) => {
  if (going === 'r') return 'u';
  if (going === 'u') return 'l';
  if (going === 'l') return 'd';
  if (going === 'd') return 'r';
};

const findBrick = (board, x, y) => {
  return board.filter(brick => brick.x === x && brick.y === y)[0];
}

const result = solvePuzzle(289326);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 419 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
