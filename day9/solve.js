const readPuzzle = require('./readpuzzle');
const interpret = require('./interpret');

readPuzzle(puzzle=>{
  console.log(interpret(puzzle));
});
