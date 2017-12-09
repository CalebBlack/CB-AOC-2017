class Group {
  constructor(parent){
    if (parent) {
       this.parent = parent;
       this.parent.children.push(this);
    }
    this.children = [];
  }
}
module.exports = Group;
