class DataSet {
  constructor(){
    this.data = {};
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
  }
  get(varname){
    if (!varname || typeof varname != 'string' || varname.length < 1) throw new Error('DataSet: Cannot Get, Invalid Name');
    if (!this.data[varname]) this.data[varname] = 0;
    return this.data[varname];
  }
  set(varname,value) {
    if (!varname || !value || typeof varname != 'string' || varname.length < 1 || typeof value != 'number') throw new Error('DataSet: Cannot Set, Invalid Name or Value');
    this.data[varname] = value;
  }
}
module.exports = DataSet;
