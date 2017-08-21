'use strict';

const ArgumentError = require('./errors/argument-error');
const Number_ = require('./number_');

module.exports = Operation;

function Operation() {
  this.add = function (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number + b.number,
      isInput: false,
    });
  };

  this.subtract = function (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number - b.number,
      isInput: false,
    });
  };

  this.multiply = function (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number * b.number,
      isInput: false,
    });
  };

  this.divide = function (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number / b.number,
      isInput: false,
    });
  };
}

function verifyArgs(a, b) {
  if (!a || !b) {
    throw new ArgumentError({
      name: a ? 'a' : 'b',
      expected: 'Number_',
      recieved: a ? a : b,
    });
  }
}
