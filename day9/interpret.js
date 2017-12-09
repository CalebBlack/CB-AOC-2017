const Group = require('./group');

function interpret(str){
  const output = new Group();
  let target = output;
  let i = 0;
  while (i < str.length) {
    let char = str[i];
    if (char == '{') {
      target = new Group(target);
      console.log(output);
    } else if (char == '}') {
      target = target.parent;
    } else if (char == '!') {
      i++;
    }
    i++;
  }
  return output;
}
module.exports = interpret;
