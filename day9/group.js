const Garbage = require('./garbage');

class Group {
  constructor(parent){
    if (parent) {
       this.parent = parent;
       this.parent.children.push(this);
    }
    this.children = [];
  }
  print(){
    if (this.parent) {
      return this.parent.print();
    } else {
      let run = object=>{
        if (object instanceof Garbage) {
          return object.content;
        } else if (object instanceof Group) {
          return object.children.map(child=>run(child));
        }
      }
      return run(this);
    }
  }
}
module.exports = Group;
