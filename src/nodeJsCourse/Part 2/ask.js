// run 'node ask'
const readline = require("readline");

//Developing the readline IO interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Example of the readline module
rl.question('How do you like Node? ', answer => {
  console.log(`Your answer: ${answer}`);
  process.exit();
});