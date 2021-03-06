const fs = require('fs');
const DataSet = require('./dataset');

fs.readFile('../puzzle.txt','utf-8',(err,data)=>{
  if (err) throw err;
  let instructions = data.split('\n').filter(instruction=>instruction.length>0&&instruction.split(' ').length == 7).map(instruction=>{
    let parts = instruction.split(' ');
    return {var:parts[0],dir:parts[1]=='inc'?1:-1,amount:parts[2],conditional:parts.slice(4)};
  });
  console.log(solve(instructions));
});
function solve(instructions){
  var data = new DataSet();
  var largest = null;
  instructions.forEach(instruction=>{
    if (eval(data.get(instruction.conditional[0])+' '+instruction.conditional[1]+' '+instruction.conditional[2])) {
      let value = data.get(instruction.var) + instruction.dir * instruction.amount;
      if (!largest || largest < value) largest = value;
      data.set(instruction.var,value);
    }
  });
  return largest;
}
