
function average(numbers) {
  var filtered = numbers.filter(number => !(isNaN(number)));
  filtered = numbers.filter(number =>(number >= -40) && (number <= 200));
  
  if(filtered.length == 0)
    return NaN;
  else
    return filtered.reduce((p, c)=> p + c, 0) / filtered.length;
}

module.exports = {average};
