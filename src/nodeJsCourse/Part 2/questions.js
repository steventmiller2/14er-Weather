const readline = require('readline');

//Developing the readline IO interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'what is your name? ',
  'where do you live? ',
  'what are you going to do with node js? '
];

/**
 * questions - {Array}
 * done - {callback} returns answers
 */
const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if(answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  }

  rl.question(firstQuestion, questionAnswered);
};

/**
 * This is a function call upon running this file.
 * Passes the questions array.
 * Takes callback's return as 'answers' and logs them
 */
collectAnswers(questions, answers => {
  console.log('Thank you for your answers');
  console.log(answers);
  process.exit();
});