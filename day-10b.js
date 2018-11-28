let inputNumbers,
  list, listIndex, skipSize;

const solvePuzzle = (input) => {
  inputNumbers = input
    .split('')
    .map(item => item.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);
  
  list = new Array(256).fill(undefined).map((item, index) => index);
  listIndex = 0;

  skipSize = 0;

  for (let i = 0; i < 64; i++) {
    for (let j = 0; j < inputNumbers.length; j++) {
      const input = inputNumbers[j];
      loop(input);
    }
  }
  
  return getHashFromList();
}

const loop = (input) => {
  let endIndex = listIndex + input;

  let workingList = list;
  if (endIndex > list.length) {
    workingList = list.concat(list);
  }
  
  let beforeSplit = workingList.slice(0, listIndex);
  let afterSplit = workingList.slice(endIndex, workingList.length);
  let reversedPart = workingList.slice(listIndex, endIndex).reverse();

  workingList = beforeSplit.concat(reversedPart, afterSplit);

  if (workingList.length > list.length) {
    let endOfNew = workingList.slice(listIndex, list.length);
    let startOfNew = workingList.slice(list.length, list.length + listIndex);
    workingList = startOfNew.concat(endOfNew);
  }

  list = workingList;

  listIndex += (input + skipSize);
  listIndex %= list.length;
  skipSize++;
}

const getHashFromList = () => {
  let res = '';
  for (let i = 0; i < 16; i++) {
    const numbers = list.slice(i * 16, (i + 1) * 16);
    
    const subOutput = numbers.reduce((acc, num) => acc ^ num);

    const hex = subOutput.toString(16).padStart(2, '0');
    res += hex;
  }

  return res;
};

const result = solvePuzzle('34,88,2,222,254,93,150,0,199,255,39,32,137,136,1,167');

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 'a7af2706aa9a09cf5d848c1e6605dd2a' ? 'Test success' : 'Test fail');
console.log('\n---------------------');
