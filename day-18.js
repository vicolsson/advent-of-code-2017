let playedFrequency;

const solvePuzzle = (input) => {
  const commands = input
    .split(/\n/)
    .filter(row => row)
    .map(row => {
      const parts = row.trim().split(' ');
      return {
        action: parts[0],
        x: parts[1],
        y: isNumeric(parts[2]) ? parseInt(parts[2]) : parts[2]
      }
    });
  
  const registers = {};
  for (command of commands) {
    if (command.x && !registers[command.x] && !isNumeric(command.x)) {
      registers[command.x] = 0;
    }
  }

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    const res = performCommand(registers, command);
    if (res && res.skips) i += res.skips;
    if (res && res.recovered) return playedFrequency;
  }
}

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const performCommand = (registers, command) => {
  switch (command.action) {
    case 'snd': {
      playedFrequency = registers[command.x];
      return;
    }
    case 'set': {
      registers[command.x] = isNumeric(command.y) ? command.y : registers[command.y];
      return;
    }
    case 'add': {
      registers[command.x] += isNumeric(command.y) ? command.y : registers[command.y];
      return;
    }
    case 'mul': {
      registers[command.x] *= isNumeric(command.y) ? command.y : registers[command.y];
      return;
    }
    case 'mod': {
      registers[command.x] %= isNumeric(command.y) ? command.y : registers[command.y];
      return;
    }
    case 'rcv': {
      if (registers[command.x] === 0) return;
      return {
        recovered: playedFrequency
      };
    }
    case 'jgz': {
      if (registers[command.x] === 0) return;
      const value = isNumeric(command.y) ? command.y : registers[command.y];
      return {
        skips: value - 1
      };
    }

  }
}

const result = solvePuzzle(`
  set i 31
  set a 1
  mul p 17
  jgz p p
  mul a 2
  add i -1
  jgz i -2
  add a -1
  set i 127
  set p 316
  mul p 8505
  mod p a
  mul p 129749
  add p 12345
  mod p a
  set b p
  mod b 10000
  snd b
  add i -1
  jgz i -9
  jgz a 3
  rcv b
  jgz b -1
  set f 0
  set i 126
  rcv a
  rcv b
  set p a
  mul p -1
  add p b
  jgz p 4
  snd a
  set a b
  jgz 1 3
  snd b
  set f 1
  add i -1
  jgz i -11
  snd a
  jgz f -16
  jgz a -19
`);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 2951 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
