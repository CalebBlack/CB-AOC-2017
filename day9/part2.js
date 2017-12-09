const readPuzzle = require('./readpuzzle');
const interpret = require('./interpret');
const countGarbage = require('./countgarbage');

readPuzzle(puzzle=>{
  console.log(countGarbage(interpret(puzzle).print()));
});
