const solvePuzzle = (input) => {
  const board = generateBoard(input);
  const resultBrick = board[board.length - 1];

  return resultBrick.v;
}


const generateBoard = (input) => {
  const board = [
    { x: 0, y: 0, v: 1 }
  ];
  let going = 'r';

  while (board[board.length - 1].v < input) {
    addBrick(board, going);
    going = getNewDirection(board, going);

    const lastBrick = board[board.length - 1];
    console.log("Generating board:", Math.floor(lastBrick.v / input * 100), "%");
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

  newBrick.v = getValue(board, newBrick.x, newBrick.y);

  board.push(newBrick);
}

const getValue = (board, x, y) => {
  let value = 0;
  
  value += (findBrick(board,   x + 1,  y     ) || {}).v || 0;
  value += (findBrick(board,   x + 1,  y - 1 ) || {}).v || 0;
  value += (findBrick(board,   x,      y - 1 ) || {}).v || 0;
  value += (findBrick(board,   x - 1,  y - 1 ) || {}).v || 0;
  value += (findBrick(board,   x - 1,  y     ) || {}).v || 0;
  value += (findBrick(board,   x - 1,  y + 1 ) || {}).v || 0;
  value += (findBrick(board,   x,      y + 1 ) || {}).v || 0;
  value += (findBrick(board,   x + 1,  y + 1 ) || {}).v || 0;

  return value;
};

const getNewDirection = (board, going) => {
  const lastBrick = board[board.length - 1];

  if (going === 'r' && !findBrick(board, lastBrick.x, lastBrick.y - 1)) return 'u';
  if (going === 'u' && !findBrick(board, lastBrick.x - 1, lastBrick.y)) return 'l';
  if (going === 'l' && !findBrick(board, lastBrick.x, lastBrick.y + 1)) return 'd';
  if (going === 'd' && !findBrick(board, lastBrick.x + 1, lastBrick.y)) return 'r';

  return going;
};

const findBrick = (board, x, y) => {
  return board.filter(brick => brick.x === x && brick.y === y)[0];
}

const result = solvePuzzle(289326);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 295229 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
