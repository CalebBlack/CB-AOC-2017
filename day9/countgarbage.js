function countGarbage(data){
  let output = 0;
  if (typeof data == 'object') {
    data.forEach(child=>{
      output += countGarbage(child);
    });
  } else if (typeof data == 'string') {
    output += data.length;
  }
  return output;
}
module.exports = countGarbage;
