import { ArgumentError } from './errors';
import typeOf from './type-of';
import _ from 'lodash';

export function validateArgument(func, paramName, expected, recieved) {
  if (typeOf(recieved) !== expected) {
    throw new ArgumentError({
      function: func,
      paramName: paramName,
      expected: expected,
      recieved: recieved,
    });
  }
}

export function validateObject(fn, args, expected) {
  _.forEach(expected, (v, k) => {
    if ((expected[k].required && !args.hasOwnProperty(k)) || args.hasOwnProperty(k)) {
      validateArgument(fn, `key: ${k}`, v.type, args[k]);
    }
  });
}
