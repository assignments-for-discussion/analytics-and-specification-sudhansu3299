const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

//assuming thresholds for battery opn. when temp> 5 deg C and temp<45 deg C
it('ignores outliers in the input which are outside the thresholds',()=> {
  expect(average([7,-3,8,50])).to.be.approximately(7.5, 0.01);;
});
