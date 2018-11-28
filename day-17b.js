const solvePuzzle = (input) => {
  let position = 0;
  let zeroPosition = 0;
  let valueAfterZero;

  for (let i = 1; i < 50000000; i++) {
    position = ((position + input) % i) + 1;
    if (position < zeroPosition) {
      zeroPosition += 1;
    } else if (position === zeroPosition + 1) {
      valueAfterZero = i;
    }
  }

  return valueAfterZero;
}

const result = solvePuzzle(316);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 13326437 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
