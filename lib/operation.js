import ArgumentError from './errors/argument-error';
import Number_ from './number_';

export default class Operation {
  constructor() {}

  add (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number + b.number,
      isInput: false,
    });
  }

  subtract (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number - b.number,
      isInput: false,
    });
  };

  multiply (a, b) {
    verifyArgs(a, b);

    return new Number_({
      number: a.number * b.number,
      isInput: false,
    });
  };

  divide (a, b) {
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
