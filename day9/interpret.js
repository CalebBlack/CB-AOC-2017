const Group = require('./group');
const Garbage = require('./garbage');

function interpret(str){
  let output;
  let target;
  let inGarbage = false;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (inGarbage) {
      if (char == '!') {
        i++;
      } else if (char == '>') {
        inGarbage = false;
        target = target.parent;
      } else {
        target.add(char);
      }
    } else if (char == '{') {
      if (!output) {
        output = new Group();
        target = output;
      } else {
        target = new Group(target);
      }
    } else if (char == '}') {
      target = target.parent;
    } else if (char == '<') {
      inGarbage = true;
      target = new Garbage(target);
    }
  }
  return output;
}
module.exports = interpret;
