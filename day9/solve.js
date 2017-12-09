const readPuzzle = require('./readpuzzle');
const interpret = require('./interpret');
const judge = require('./judge');

readPuzzle(puzzle=>{
  let raw = interpret(puzzle);
  let data = raw.print();
  let score = judge(data);
  console.log(score);
});
