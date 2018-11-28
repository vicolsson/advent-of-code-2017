const solvePuzzle = (input) => {
  let usedBits = 0;
  for (let i = 0; i < 128; i++) {
    const hash = createKnotHash(`${input}-${i}`);
    const bits = convertHashToBits(hash);
    usedBits += bits.match(/1/g).length;
  }

  return usedBits;
}

const createKnotHash = (input) => {
  let inputNumbers = input
    .split('')
    .map(item => item.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);
  
  let list = new Array(256).fill(undefined).map((item, index) => index);
  let listIndex = 0;
  let skipSize = 0;

  for (let i = 0; i < 64; i++) {
    for (let j = 0; j < inputNumbers.length; j++) {
      const input = inputNumbers[j];
      
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
  }
  
  return getHashFromList(list);
}

const getHashFromList = (list) => {
  let res = '';
  for (let i = 0; i < 16; i++) {
    const numbers = list.slice(i * 16, (i + 1) * 16);
    
    const subOutput = numbers.reduce((acc, num) => acc ^ num);

    const hex = subOutput.toString(16).padStart(2, '0');
    res += hex;
  }

  return res;
}

const convertHashToBits = (hash) => {
  return hash.split('').reduce((acc, char) => acc + convertCharToBits(char), '');
}

const convertCharToBits = (char) => {
  return parseInt(char, 16).toString(2).padStart(4, '0');
}

const result = solvePuzzle('ugkiagan');

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 8292 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
