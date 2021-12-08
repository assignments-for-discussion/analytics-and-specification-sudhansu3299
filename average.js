
function average(numbers) {
  if(numbers.some(isNaN) || isNaN(numbers))
    return;
  if(numbers.length == 0)
    return NaN;
  else
    return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
