const readPuzzle = require('./readpuzzle');
const interpret = require('./interpret');
const judge = require('./judge');

readPuzzle(puzzle=>{
  console.log(judge(interpret(puzzle).print()));
});
