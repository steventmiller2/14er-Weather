//To run this file, run:
// 'node globalProcess --user <username(string)> --greeting <greeting(string)>

/**
 * This function processes arguments provided to the terminal
 * and returns the argument following the flag
 * Process is a global node variable
 * @param {Array} flag 
 * @returns the second argument in the array (after the flag)
 */
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

//A 'flag' is a term for the --
const greeting = grab("--greeting");
const user = grab("--user");

//This will log the arguments provided in the terminal
console.log(process.argv);
/**This will print the result of the 2 variables, greeting and user,
   which call the grab function**/ 
console.log(`${greeting} ${user}`);