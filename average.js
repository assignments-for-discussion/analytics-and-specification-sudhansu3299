
function average(numbers) {
  if(numbers.length == 0)
    return NaN;
  else if(!(numbers.some(isNaN)))
    return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
