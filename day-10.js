let inputNumbers,
  list, listIndex, skipSize;

const solvePuzzle = (input) => {
  inputNumbers = input.split(',').map(item => parseInt(item));
  
  list = new Array(256).fill(undefined).map((item, index) => index);
  listIndex = 0;

  skipSize = 0;

  for (let input of inputNumbers) {
    loop(input);
  }
  
  return list[0] * list[1];
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

  listIndex += input + skipSize;
  if (listIndex > list.length) listIndex -= list.length;

  skipSize++;
}

const result = solvePuzzle('34,88,2,222,254,93,150,0,199,255,39,32,137,136,1,167');

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 54675 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
