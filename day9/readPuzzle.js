const fs = require('fs');
function readPuzzle(callback){
  if (typeof callback != 'function') throw new Error('ReadPuzzle: Invalid Callback');
  fs.readFile('puzzle.txt','utf-8',(err,data)=>{
    if (err) throw err;
    callback(data.split('\n').join(''));
  });
}
module.exports = readPuzzle;
