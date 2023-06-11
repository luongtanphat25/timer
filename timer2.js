const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let timerInterval;

const timer = (input) => {
  if (input === 'b') {
    process.stdout.write('\x07');
  } else if (input >= 1 && input <= 9) {
    console.log(`Setting timer for ${input} seconds...`);
    timerInterval = setInterval(() => {
      process.stdout.write('\x07');
    }, input * 1000);
  }
};

rl.on('line', (input) => {
  if (input === 'b' || (parseInt(input) >= 1 && parseInt(input) <= 9)) {
    timer(input);
  } else if (input === 'exit') {
    rl.close();
  }
});

rl.on('close', () => {
  clearInterval(timerInterval);
  console.log('Thanks for using me, ciao!');
  process.exit(0);
});

console.log('Enter "b" for an immediate beep or a number from 1 to 9 to set a timer.');
console.log('Press CTRL+C or enter "exit" to exit the program.');
