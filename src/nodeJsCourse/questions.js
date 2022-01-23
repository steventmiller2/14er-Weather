// run 'node questions'
// event listeners are async processes, one of the benefits to node!

//process.stdout.write is the raw command for console.log and allows more freedom
const questions = [
  "what is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

ask();
const answers = [];

/** Opening a listener for a 'data' event for input
 *  then push answers to array and exit after questions are answered
 **/
process.stdin.on('data', data => {
  answers.push(data.toString().trim());
  if(answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// Opening a process listener for an 'exit' event
process.on('exit', () => {
  const [name, activity, lang] = answers; //array destructuring
  
  console.log(`

Thank you for your answers.

Go ${activity} ${name}, you can write ${lang} code later!!!


  `)
});