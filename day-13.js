const solvePuzzle = (input) => {
  const layers = input
    .split(/\n/)
    .filter(row => row)
    .map((row) => {
      const parts = row.split(':');

      const index = parseInt(parts[0].trim());
      const range = parseInt(parts[1].trim());

      return {
        index,
        range,
        position: 0,
        goingDown: true
      };
    });
  
  let package = {
    pos: -1
  }

  let errorSeverity = 0;
  while (package.pos < layers[layers.length - 1].index) {
    errorSeverity += loop(package, layers);
  }

  return errorSeverity;
}

const loop = (package, layers) => {
  package.pos += 1;
  const currentLayer = getLayer(layers, package.pos);

  let errorSeverity = 0;
  if (currentLayer && currentLayer.position === 0) {
    errorSeverity = currentLayer.index * currentLayer.range;
  }

  moveLayers(layers);

  return errorSeverity;
}

const getLayer = (layers, index) => {
  return layers.filter(item => item.index === index)[0];
}

const moveLayers = (layers) => {
  for (var layer of layers) {
    if (layer.goingDown) {
      layer.position += 1;
      if (layer.position === layer.range - 1) layer.goingDown = false;
    } else {
      layer.position -= 1;
      if (layer.position === 0) layer.goingDown = true;
    }
  }
};

const result = solvePuzzle(`
  0: 3
  1: 2
  2: 4
  4: 4
  6: 5
  8: 6
  10: 6
  12: 6
  14: 6
  16: 8
  18: 8
  20: 8
  22: 8
  24: 10
  26: 8
  28: 8
  30: 12
  32: 14
  34: 12
  36: 10
  38: 12
  40: 12
  42: 9
  44: 12
  46: 12
  48: 12
  50: 12
  52: 14
  54: 14
  56: 14
  58: 12
  60: 14
  62: 14
  64: 12
  66: 14
  70: 14
  72: 14
  74: 14
  76: 14
  80: 18
  88: 20
  90: 14
  98: 17
`);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 1900 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
