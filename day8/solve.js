const fs = require('fs');
const DataSet = require('./dataset');

fs.readFile('puzzle.txt','utf-8',(err,data)=>{
  if (err) throw err;
  let instructions = data.split('\n').filter(instruction=>instruction.length>0&&instruction.split(' ').length == 7).map(instruction=>{
    let parts = instruction.split(' ');
    return {var:parts[0],dir:parts[1]=='inc'?'+':'-',conditional:parts.slice(4)};
  });
  console.log(solve(instructions));
});
function solve(instructions){
  var data = new DataSet
}
