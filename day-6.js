const previousResults = [];
let iterations = 0;

const solvePuzzle = (input) => {
  const banks = input.split(/\t/).map(b => parseInt(b));
  addPreviousResult(banks);

  while(true) {
    iterations++;
    console.log(iterations);
    const highestIndex = findHighestBankIndex(banks);
    spreadIndexValues(banks, highestIndex);
    
    if (findMatchingPreviousResult(banks)) break;
    
    addPreviousResult(banks);
  }

  return iterations;
}

const addPreviousResult = (banks) => {
  previousResults.push([...banks]);
}

const findMatchingPreviousResult = (banks) => {
  const banksString = banks.join(',');
  
  return previousResults.filter((prevBanks) => {
    prevBanksString = prevBanks.join(',');
    return banksString === prevBanksString;
  })[0];
}

const findHighestBankIndex = (banks) => {
  let highest = {
    index: 0,
    value: banks[0]
  };

  for (let i = 1; i < banks.length; i++) {
    if (banks[i] > highest.value) {
      highest = {
        index: i,
        value: banks[i]
      }
    }
  }

  return highest.index;
}

const spreadIndexValues = (banks, index) => {
  const value = banks[index];
  banks[index] = 0;
  for (let i = 1; i <= value; i++) {
    let newIndex = index + i;
    if (newIndex >= banks.length) newIndex -= banks.length;

    banks[newIndex]++;
  }
}

const result = solvePuzzle('10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6');

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 14029 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
