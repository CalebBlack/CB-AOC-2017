function judge(data,worth=1){
  let score = worth;
  data.forEach(object=>{
    if (typeof object == 'object') {
      score += judge(object,worth+1);
    }
  });
  return score;
}
module.exports = judge;
