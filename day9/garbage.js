class Garbage {
  constructor(parent) {
    if (!parent) throw new Error('Garbage: Missing Parent ;(');
    this.print = this.print.bind(this);
    this.add = this.add.bind(this);
    if (parent) {
      this.parent = parent;
      this.parent.children.push(this);
    }
    this.content = '';
  }
  add(str){
    this.content += str;
  }
  print(){
    return this.parent.print();
  }
}
module.exports = Garbage;
