const Group = require('./group');
const Garbage = require('./garbage');

function interpret(str){
  const output = new Group();
  let target = output;
  let i = 0;
  inGarbage = false;
  while (i < str.length) {
    let char = str[i];
    if (inGarbage) {
      if (char == '>') {
        inGarbage = false;
        target = target.parent;
      } else {
        target.add(char);
      }
    } else if (char == '{') {
      target = new Group(target);
      console.log(output);
    } else if (char == '}') {
      target = target.parent;
    } else if (char == '!') {
      i++;
    } else if (char == '<') {
      inGarbage = true;
      target = new Garbage(target);
    }
    i++;
  }
  return output;
}
module.exports = interpret;
