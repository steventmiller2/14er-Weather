let count = 0;

const inc = () => count++;
const dec = () => count--;

const getCount = () => count;

//WORKS with require
// module.exports = {
//   inc,
//   dec,
//   getCount
// }

/**
 * Works with import
 * ES6 method. Requires modifying package.json with "type" "module"
 */
export {
  inc,
  dec,
  getCount
}