let programOneSent = 0;

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
  
  const copy1 = new Copy(0, commands);
  const copy2 = new Copy(1, commands);

  copy1.setSibling(copy2);
  copy2.setSibling(copy1);

  while(true) {
    copy1.run();
    copy2.run();

    if ((copy1.waitingForQueueItem && copy2.waitingForQueueItem) || copy1.stopped || copy2.stopped) {
      break;
    }
  }

  return programOneSent;
}

class Copy {
  constructor(id, commands) {
    this.id = id;
    this.commands = commands;

    this.registers = {};
    for (let command of this.commands) {
      if (command.x && !this.registers[command.x] && !isNumeric(command.x)) {
        this.registers[command.x] = 0;

        if (command.x === 'p') this.registers[command.x] = this.id;
      }
    }

    this.queue = [];

    this.index = 0;

    this.waitingForQueueItem = false;
    this.stopped = false;
  }

  addToQueue (item) {
    this.queue.push(item);
    // console.log(this.id + ' recieved item, queue length: ' + this.queue.length);
  }

  setSibling (sibling) {
    this.sibling = sibling;
  }

  run () {
    // console.log('Running id ' + this.id + ' index ' + this.index);
    const command = this.commands[this.index];
    const res = this.performCommand(command);
    if (res && res.skips) this.index += res.skips;

    this.index++;
    if (this.index >= this.commands.length) {
      return {
        stopped: true
      };
    }
  }

  performCommand (command) {
    this.waitingForQueueItem = false;
    switch (command.action) {
      case 'snd': {
        // console.log(this.id + ' sending item')
        if (this.id === 1) programOneSent++;
        this.sibling.addToQueue(isNumeric(command.x) ? command.x : this.registers[command.x])
        return;
      }
      case 'set': {
        this.registers[command.x] = isNumeric(command.y) ? command.y : this.registers[command.y];
        return;
      }
      case 'add': {
        this.registers[command.x] += isNumeric(command.y) ? command.y : this.registers[command.y];
        return;
      }
      case 'mul': {
        this.registers[command.x] *= isNumeric(command.y) ? command.y : this.registers[command.y];
        return;
      }
      case 'mod': {
        this.registers[command.x] %= isNumeric(command.y) ? command.y : this.registers[command.y];
        return;
      }
      case 'rcv': {
        const queueItem = this.queue.shift();
        if (queueItem != null) {
          this.registers[command.x] = queueItem
          return;
        }
        this.waitingForQueueItem = true;
        return {
          skips: -1
        };
      }
      case 'jgz': {
        if ((isNumeric(command.x) ? command.x : this.registers[command.x]) <= 0) return;
        const value = isNumeric(command.y) ? command.y : this.registers[command.y];
        return {
          skips: value - 1
        };
      }
    }
  }

}

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
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
console.log(result === 7366 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
