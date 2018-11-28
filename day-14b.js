const solvePuzzle = (input) => {

  const grid = [];

  for (let i = 0; i < 128; i++) {
    const hash = createKnotHash(`${input}-${i}`);
    const bits = convertHashToBits(hash);
    
    grid[i] = bits.split('').map((item, index) => ({
      x: i,
      y: index,
      used: item === '1',
      group: null
    }));
  }

  let groupId = 0;
  while (true) {
    groupId++;
    const blockWithoutGroup = getBlockWithoutGroup(grid);
    if (!blockWithoutGroup) break;

    blockWithoutGroup.group = groupId;
    addNeighboursToGroup(blockWithoutGroup, grid);
  }
  
  return groupId - 1;
}

const addNeighboursToGroup = (block, grid) => {
  if (block.x > 0) {
    const leftNeighbour = getBlockByCoords(grid, block.x - 1, block.y);
    tryAddBlockToGroup(leftNeighbour, block.group, grid);
  }
  if (block.x < grid.length - 1) {
    const rightNeighbour = getBlockByCoords(grid, block.x + 1, block.y);
    tryAddBlockToGroup(rightNeighbour, block.group, grid);
  }
  if (block.y > 0) {
    const upperNeighbour = getBlockByCoords(grid, block.x, block.y - 1);
    tryAddBlockToGroup(upperNeighbour, block.group, grid);
  }
  if (block.y < grid.length - 1) {
    const lowerNeighbour = getBlockByCoords(grid, block.x, block.y + 1);
    tryAddBlockToGroup(lowerNeighbour, block.group, grid);
  }
}

const tryAddBlockToGroup = (block, group, grid) => {
  if (block.used && !block.group) {
    block.group = group;
    addNeighboursToGroup(block, grid);
  }
}

const getBlockWithoutGroup = (grid) => {
  for (let row of grid) {
    for (let block of row) {
      if (block.used && !block.group) return block;
    }
  }
}

const getBlockByCoords = (grid, x, y) => {
  return grid[x][y];
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
console.log(result === 1069 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
