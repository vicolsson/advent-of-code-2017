const solvePuzzle = (input) => {
  let values = [0];
  let position = 0;

  while (values.length < 2018) {
    position = addValue(values, position, input);
  }

  const lastEntryIndex = values.indexOf(2017);

  return values[lastEntryIndex + 1];
}

const addValue = (values, position, stepsToMove) => {
  const oldValue = values[position];
  const newValue = oldValue + 1;

  let newPosition = ((position + stepsToMove) % values.length) + 1;

  values.splice(newPosition, 0, newValue);

  return newPosition;
}

const result = solvePuzzle(316);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 180 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
