
function isNum(value) {
  if(typeof(value)=='number')
    return value;
}
function average(numbers) {
  var filtered = numbers.filter(isNum);
  
  if(filtered.length == 0)
    return NaN;
  else
    return filtered.reduce((p, c)=> p + c, 0) / filtered.length;
}

module.exports = {average};
