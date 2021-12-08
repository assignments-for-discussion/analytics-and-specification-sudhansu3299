
function average(numbers) {
  if(!(isNaN(numbers)))
    return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  else
    return 0;
}

module.exports = {average};
