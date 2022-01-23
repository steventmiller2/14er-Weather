//run 'node timers' in the terminal
//setTimeout, setInterval, and clearInterval are NodeJs functions
const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done")
};

//save the value returned by the setInterval function so we can
//clear this specific interval in the timerFinished function
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);