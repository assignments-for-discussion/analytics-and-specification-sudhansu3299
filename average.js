
function average(numbers) {
  if(typeof(numbers) == 'number')
    return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  else
    return NaN;
}

module.exports = {average};
