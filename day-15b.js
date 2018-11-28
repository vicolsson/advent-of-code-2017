const solvePuzzle = (input) => {

  let judgeValue = 0;

  let previousValues = {
    a: input['a'].startValue,
    b: input['b'].startValue
  }

  for (let i = 0; i < 5*1000*1000; i++) {
    i % 50000 === 0 && console.log(Math.round(i / 5000000 * 100) + '%');

    const resA = generate(input, 'a', previousValues.a);
    const resB = generate(input, 'b', previousValues.b);

    previousValues = {
      a: resA.value,
      b: resB.value
    };
  
    if (resA.bits.substr(16, 16) === resB.bits.substr(16, 16)) {
      judgeValue++;
    }
  }

  return judgeValue;
}

const generate = (input, generator, previousValue) => {
  const newValue = generateNextValue(input[generator], previousValue);

  if (newValue % (generator === 'a' ? 4 : 8) === 0) {
    return {
      value: newValue,
      bits: getBitsOfValue(newValue)
    };
  }
  
  return generate(input, generator, newValue);
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
console.log(result === 313 ? 'Test success' : 'Test fail');
console.timeEnd('Time');
console.log('\n---------------------');
