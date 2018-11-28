const solvePuzzle = (input) => {

  let judgeValue = 0;

  let valueA = input['a'].startValue;
  let valueB = input['b'].startValue;

  for (let i = 0; i < 40*1000*1000; i++) {
    i % 400000 === 0 && console.log(Math.round(i / 40000000 * 100) + '%');

    valueA = generateNextValue(input['a'], valueA);
    const bitsA = getBitsOfValue(valueA);

    valueB = generateNextValue(input['b'], valueB);
    const bitsB = getBitsOfValue(valueB);
  
    if (bitsA.substr(16, 16) === bitsB.substr(16, 16)) {
      judgeValue++;
    }
  }

  return judgeValue;
}

const getBitsOfValue = (value) => {
  return value.toString(2).padStart(32, "0")
}

const generateNextValue = (generator, previous) => {
  return (previous * generator.factor) % 2147483647;
}

console.time('Time');
const result = solvePuzzle({
  a: {
    startValue: 699,
    factor: 16807
  },
  b: {
    startValue: 124,
    factor: 48271
  }
});

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 600 ? 'Test success' : 'Test fail');
console.timeEnd('Time');
console.log('\n---------------------');
