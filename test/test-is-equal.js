'use strict';
const isEqual = require('../isEqual');

require('chai').should();

describe('isEqual', function() {
  it('should give right answers for equal and unequal inputs', function() {
    // we're going to the `isEqual` function on a range of inputs
    // that the function should return true for.
    const equalInputs = [
      [1, 1],
      [true, true],
      ['foo', 'foo']
    ];
    // loop through inputs and check that each set returns true
    equalInputs.forEach(function(input) {
      const answer = isEqual(input[0], input[1]);
      // use `chai.should`'s keywords to set expectations for
      // `isEqual`'s behavior
     
      answer.should.be.true;
    });
    const answer2 = isEqual(2, 5);
    answer2.should.be.true;

    // range of inputs that the function should return false for
    const unequalInputs = [
      ['1', 1],
      [1, 2],
      [1, true],
      [0, false]
    ];
    // loop through inputs and check that each set returns false
    unequalInputs.forEach(function(input) {
      const answer = isEqual(input[0], input[1]);
      answer.should.be.false;
    });
  });
}

);

describe('isEqual', function() {
  it('test 2', function() {
    const answer2 = isEqual(2, 5);
    answer2.should.be.true;
  });
});
