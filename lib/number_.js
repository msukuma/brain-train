import ArgumentError from './errors/argument-error';
import { number } from './constants';

export default class Number_ {
  constructor(args) {
    this.validateArguments(args);
    this.number = args.number;
    this.hidden = args.hasOwnProperty('hidden') ? arge.hidden : false;
    this.isInput = args.hasOwnProperty('isInput') ? args.isInput : true;
  }

  setNumber (newNumber) {
    if (typeof newNumber !== number) {
      throw new ArgumentError({
          name: 'newNumber',
          expected: number,
          recieved: newNumber,
        });
    }

    this.number = newNumber;
  };

  show () {
    this.hidden = false;
  };

  hide () {
    this.hidden = true;
  };

  validateArguments (args) {
    if (!args.hasOwnProperty('number')) {
      throw new ArgumentError({
        name: 'args.number',
        expected: `args.number to be a "number"`,
        recieved: args.number,
      });
    }
  };
}
